interface AdPlaceholderProps {
  id: string;
  className?: string;
}

export default function AdPlaceholder({ id, className = '' }: AdPlaceholderProps) {
  // empty:hidden ensures the container uses 0px of space until an ad script injects content
  return (
    <div 
      id={id} 
      className={`ad-container empty:hidden transition-all duration-300 flex justify-center items-center ${className}`}
    />
  );
}
