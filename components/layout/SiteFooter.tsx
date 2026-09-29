import Image from 'next/image';
import Link from 'next/link';
import { brandIdentity, contactChannels, copyrightNotice, type ContactChannel } from '@/lib/content';
import { footerNav } from '@/lib/site';

function ContactChannelContent({ channel }: { channel: ContactChannel }) {
  return (
    <>
      <Image
        src={channel.icon.src}
        alt={channel.icon.alt}
        width={channel.icon.width}
        height={channel.icon.height}
        className="size-6 shrink-0"
      />
      <span>{channel.label}</span>
    </>
  );
}

export default function SiteFooter() {
  const { footerLogo } = brandIdentity;

  return (
    <footer id="contato" className="bg-footer text-white">
      <div className="container-page pt-12 pb-6 lg:pt-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
          <div className="lg:w-[clamp(18rem,28vw,26rem)] lg:shrink-0">
            <div className="flex items-center">
              <Image
                src={footerLogo.src}
                alt={footerLogo.alt}
                width={footerLogo.width}
                height={footerLogo.height}
                sizes="112px"
                className="-ml-3 h-auto w-24 shrink-0 lg:w-28"
              />
              <div className="-ml-2 flex flex-col">
                <span className="text-4xl leading-none font-semibold lg:text-[2.75rem]">{brandIdentity.name}</span>
                <span className="mt-1 text-xs font-medium tracking-[0.04em]">{brandIdentity.tagline}</span>
              </div>
            </div>
            <p className="mt-2 text-sm font-semibold text-white/40">{brandIdentity.slogan}</p>
          </div>

          <div aria-hidden="true" className="hidden h-36 w-px shrink-0 bg-[rgba(217,217,217,0.34)] lg:mr-10 lg:block" />

          <div className="grid gap-10 font-inter sm:grid-cols-2 lg:flex lg:gap-0">
            <nav aria-labelledby="footer-links-title" className="lg:w-[clamp(10rem,16vw,15rem)]">
              <h2 id="footer-links-title" className="text-base font-bold">
                Links
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                {footerNav.map((item) => (
                  <li key={item.sectionId}>
                    <Link href={item.href} className="transition-opacity hover:opacity-70">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-base font-bold">Contato</h2>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                {contactChannels.map((channel) => (
                  <li key={channel.id}>
                    {channel.href ? (
                      <a href={channel.href} className="flex items-center gap-2.5 transition-opacity hover:opacity-70">
                        <ContactChannelContent channel={channel} />
                      </a>
                    ) : (
                      <span className="flex items-center gap-2.5">
                        <ContactChannelContent channel={channel} />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="mt-10 h-px bg-[rgba(217,217,217,0.34)] lg:mt-12" />

        <p className="mt-6 text-center font-inter text-sm text-white/40">{copyrightNotice}</p>
      </div>
    </footer>
  );
}
