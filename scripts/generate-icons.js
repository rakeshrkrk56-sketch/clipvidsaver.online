import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import fs from 'fs';
import path from 'path';

const svgPath = path.join(process.cwd(), 'public', 'icon.svg');
const svgBuffer = fs.readFileSync(svgPath);

async function generate() {
  console.log('Generating PNGs...');
  const basePath = path.join(process.cwd(), 'public');
  
  await sharp(svgBuffer).resize(16, 16).png().toFile(path.join(basePath, 'favicon-16x16.png'));
  await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(basePath, 'favicon-32x32.png'));
  await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(basePath, 'android-chrome-192x192.png'));
  await sharp(svgBuffer).resize(512, 512).png().toFile(path.join(basePath, 'android-chrome-512x512.png'));
  await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(basePath, 'apple-touch-icon.png'));
  
  console.log('Generating ICO...');
  const icoBuffer = await pngToIco([
    path.join(basePath, 'favicon-32x32.png'),
    path.join(basePath, 'favicon-16x16.png')
  ]);
  fs.writeFileSync(path.join(basePath, 'favicon.ico'), icoBuffer);
  
  console.log('Done mapping icons successfully.');
}

generate().catch(err => {
  console.error("Error generating files:", err);
  process.exit(1);
});
