import Image from 'next/image';
import { arrowRightWhiteIcon, quoteCtaLabel } from '@/lib/content';
import { whatsappUrl } from '@/lib/site';

type QuoteCtaLinkProps = {
  message?: string;
  label?: string;
  className?: string;
};

export default function QuoteCtaLink({ message, label = quoteCtaLabel, className = '' }: QuoteCtaLinkProps) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary pr-4 pl-6 text-[0.9375rem] font-bold whitespace-nowrap text-white transition hover:bg-primary-strong hover:shadow-[0_10px_24px_rgba(1,47,103,0.28)] ${className}`}
    >
      {label}
      <Image
        src={arrowRightWhiteIcon.src}
        alt={arrowRightWhiteIcon.alt}
        width={arrowRightWhiteIcon.width}
        height={arrowRightWhiteIcon.height}
        className="size-6 shrink-0 object-contain"
      />
    </a>
  );
}
