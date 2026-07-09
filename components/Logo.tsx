import Image from 'next/image';
import { site } from '@/lib/site';

const LOGO_WIDTH = 899;
const LOGO_HEIGHT = 217;

const sizeClasses = {
  sm: 'h-10 w-auto max-w-[10.5rem] sm:h-12 sm:max-w-none',
  md: 'h-12 w-auto max-w-[12rem] sm:h-14 sm:max-w-none md:h-16',
  lg: 'h-14 w-auto sm:h-16 md:h-20 lg:h-24',
  xl: 'h-16 w-auto sm:h-20 md:h-24 lg:h-28',
} as const;

type LogoProps = {
  size?: keyof typeof sizeClasses;
  className?: string;
  priority?: boolean;
  premium?: boolean;
};

export default function Logo({
  size,
  className,
  priority = false,
  premium = true,
}: LogoProps) {
  const resolvedClassName = [
    size ? sizeClasses[size] : 'h-10 w-auto max-w-[10.5rem] sm:h-12',
    premium &&
      'drop-shadow-[0_1px_1px_rgba(20,33,61,0.08)] contrast-[1.04] saturate-[1.05] transition-transform duration-300',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Image
      src="/logo.png"
      alt={`${site.name} — ${site.role}`}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className={resolvedClassName}
      priority={priority}
      unoptimized
    />
  );
}
