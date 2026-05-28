interface AdPlaceholderProps {
  id: string;
  className?: string;
}

export default function AdPlaceholder({ id, className = '' }: AdPlaceholderProps) {
  // Mobile ads usually require at least 50px-100px of height. Reserving space reduces CLS.
  const isTopBanner = id === 'ad-top-banner';
  const isMiddleBanner = id === 'ad-middle-content';
  const minHeightClass = (isTopBanner || isMiddleBanner) ? 'min-h-[50px] md:min-h-[90px]' : '';

  return (
    <div 
      id={id} 
      className={`ad-container transition-all duration-300 flex justify-center items-center ${minHeightClass} ${className}`}
    />
  );
}

