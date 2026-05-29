import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://clipvidsaver.online${item.url}`
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb" className="mb-6 md:mb-8 overflow-x-auto pb-2 -mb-2">
        <ol className="flex items-center space-x-1 sm:space-x-2 text-sm text-slate-500 whitespace-nowrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={item.url} className="flex items-center">
                {index === 0 ? (
                  <Link to={item.url} className="hover:text-indigo-600 transition-colors flex items-center">
                    <Home size={14} className="mr-1.5 mb-0.5" />
                    <span className="hidden sm:inline">{item.name}</span>
                    <span className="sm:hidden">Home</span>
                  </Link>
                ) : !isLast ? (
                  <Link to={item.url} className="hover:text-indigo-600 transition-colors">
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-xs md:max-w-md" aria-current="page" title={item.name}>
                    {item.name}
                  </span>
                )}
                
                {!isLast && (
                  <ChevronRight size={14} className="mx-1 sm:mx-2 text-slate-400 shrink-0" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
