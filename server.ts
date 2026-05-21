import 'dotenv/config';
import express from 'express';
import path from 'path';
import puppeteer from 'puppeteer';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// Enable trust for reverse proxies (e.g., Nginx) and HTTPS resolution
app.set('trust proxy', 1);

app.use(cors());
app.use(express.json());

// Main API endpoint for scraping AI video
app.post('/api/scrape', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  let browser;
  try {
    console.log(`Starting Puppeteer to scrape: ${url}`);
    
    // Launch puppeteer with basic arguments to run reliably in container environments
    const launchOptions: any = {
      headless: true, // Use headless mode
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    };

    if (process.env.PUPPETEER_EXECUTABLE_PATH) {
      launchOptions.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
    }

    browser = await puppeteer.launch(launchOptions);

    const page = await browser.newPage();
    
    // Set a realistic user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    // Block images/fonts to speed up
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const type = req.resourceType();
      if (type === 'image' || type === 'font' || type === 'stylesheet') {
        req.abort();
      } else {
        req.continue();
      }
    });

    console.log('Navigating to page...');
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    // Look for video elements or common meta tags used for videos
    let videoUrl = await page.evaluate(() => {
      // 1. Try to find a raw <video> tag
      const videoEl = document.querySelector('video source, video');
      if (videoEl && (videoEl as any).src && (videoEl as any).src.startsWith('http')) {
        return (videoEl as any).src;
      }
      
      if (videoEl && videoEl.getAttribute('src')) {
          return videoEl.getAttribute('src');
      }

      // 2. Try to find og:video meta tag
      const ogVideo = document.querySelector('meta[property="og:video"]');
      if (ogVideo) {
        return ogVideo.getAttribute('content');
      }
      
      // 3. Try parsing text for typical video CDNs if necessary (fallback)
      return null; // No direct video found
    });

    await browser.close();

    if (videoUrl) {
      console.log(`Successfully scraped video URL: ${videoUrl}`);
      // Return the video URL along with a mock fake thumbnail or title if needed
      res.json({
        success: true,
        data: {
          url: videoUrl,
          title: "AI Extracted Video",
          thumbnail: "https://images.unsplash.com/photo-1596409600006-2c1cfbccc669?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        }
      });
    } else {
        console.log("Puppeteer couldn't find a direct video.");
        res.status(404).json({
           success: false,
           error: "Could not detect any video on the provided page. The link might be expired, private, or invalid."
        });
    }
  } catch (error: any) {
    if (browser) await browser.close();
    console.error('Puppeteer scraping error:', error);
    
    res.status(500).json({
      success: false,
      error: "Failed to process the URL. The site might be blocking our scraper or the connection timed out."
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  const server = app.listen(PORT as number, HOST as string, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
  });

  // Graceful shutdown handlers for PM2 and orchestration tools
  const shutdown = () => {
    console.log('\nShutdown signal received. Closing HTTP server...');
    server.close(() => {
      console.log('HTTP server closed.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

startServer();
