import { ITagProps } from '@/features/home/types';

export const Tag: React.FC<ITagProps> = ({
  text,
  color,
  textColor,
  top,
  left,
  rotate,
}) => {
  return (
    <span
      className={`${color} ${textColor} animate-popup animate-shake absolute z-50 px-2 py-1 text-sm font-extrabold uppercase md:text-base`}
      style={{
        top,
        left,
        transform: `rotate(${rotate}deg)`,
        animationDelay: `${Math.random() * 0.5}s`, // small random delay for natural effect
      }}
    >
      {text}
    </span>
  );
};
