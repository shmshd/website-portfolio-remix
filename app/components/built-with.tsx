import { SiCloudflarepages, SiRemix } from "react-icons/si";

export function BuiltWith() {
  return (
    <div className="flex w-full items-center justify-center px-2 py-2">
      <div className="absolute bottom-0 justify-center py-2 text-foreground/60">
        Built with{" "}
        <a
          className="underline md:no-underline md:hover:underline"
          href="https://remix.run/"
          target="_blank"
          rel="noreferrer"
        >
          <SiRemix />
          Solid
        </a>{" "}
        and{" "}
        <div className="block pt-1 md:inline">
          hosted at{" "}
          <a
            className="underline md:no-underline md:hover:underline"
            href="https://pages.cloudflare.com/"
            target="_blank"
            rel="noreferrer"
          >
            <SiCloudflarepages />
            Cloudflare Pages
          </a>
        </div>
      </div>
    </div>
  );
}
