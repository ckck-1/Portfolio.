import Image from "next/image";
import Link from "next/link";

const HoverLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      href={href}
      className="relative block h-6 overflow-hidden group text-base"
    >
      <div className="transition-transform duration-300 ease-out transform group-hover:-translate-y-6">
        <span className="flex items-center h-6 text-[#b3b3b3]">{text}</span>
        <span className="flex items-center h-6 text-white">{text}</span>
      </div>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-6 md:px-12 xl:px-[4.5rem] py-20 md:py-28 lg:py-32">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-12 xl:gap-16">
          <div className="flex flex-col gap-6 items-start lg:max-w-[280px]">
            <Link href="/" aria-label="home" className="flex items-center">
              <span className="font-display text-4xl font-bold text-white tracking-tight">CK</span>
            </Link>
            <div className="flex gap-5">
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110 opacity-80 hover:opacity-100">
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/icons/66f629d681ac33b5c79a81e0_youtubeicon-1.png" alt="Youtube" width={24} height={24} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110 opacity-80 hover:opacity-100">
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/icons/66f629d681ac33b5c79a815a_instagram-2.png" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://www.tiktok.com/en/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110 opacity-80 hover:opacity-100">
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a4508f3-6eca-41d5-9ad4-eeee2203a219-idesigner-lite-template-webflow-io/assets/icons/66f629d681ac33b5c79a8161_tiktok-3.png" alt="TikTok" width={24} height={24} />
              </a>
            </div>
            <p className="text-base leading-relaxed text-white/90">
              Beautiful ideas deserve powerful technology.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10 md:pl-16 lg:pl-8">
            <div className="flex flex-col gap-5">
              <h5 className="font-display font-semibold text-base tracking-[0.1em] uppercase text-white">Main</h5>
              <nav className="flex flex-col gap-3">
                <HoverLink href="/" text="Home" />
                <HoverLink href="/about" text="About" />
                <HoverLink href="/works" text="Works" />
                <HoverLink href="/contact" text="Contact" />
              </nav>
            </div>

            <div className="flex flex-col gap-5">
              <h5 className="font-display font-semibold text-base tracking-[0.1em] uppercase text-white">Pages</h5>
              <nav className="flex flex-col gap-3">
                <HoverLink href="/terms-conditions" text="Terms & Conditions" />
                <HoverLink href="/privacy-policy" text="Privacy Policy" />
              </nav>
            </div>

            <div className="flex flex-col gap-5">
              <h5 className="font-display font-semibold text-base tracking-[0.1em] uppercase text-white">Utilities</h5>
              <nav className="flex flex-col gap-3">
                <HoverLink href="/utilties/style-guide" text="Style Guide" />
                <HoverLink href="/utilties/instructions" text="Instructions" />
                <HoverLink href="/utilties/licenses" text="Licenses" />
                <HoverLink href="/utilties/changelog" text="Changelog" />
              </nav>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/10 my-12 md:my-16"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[#b3b3b3] text-sm md:text-base">
            © 2025 CK. All Rights Reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex items-center text-sm md:text-base text-[#b3b3b3]">
              Built with passion, creativity, and code.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;