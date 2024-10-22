import { useLocation } from "react-router";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";
import { useState } from "react";

const routes = [
  { name: "Home", url: "/" },
  { name: "Projects", state: false, url: "/projects" },
  { name: "Contact", url: "/contact" },
] as { name: string; state?: boolean; url: string }[];

export default function Nav() {
  const location = useLocation();
  const pathname = location.pathname;

  const [tappedUrl, setTappedUrl] = useState<null | string>(null);
  const manageTap = (url: string) => {
    setTappedUrl(url);
    setTimeout(() => setTappedUrl(null), 300);
  };

  return (
    <div className="mt-5 flex justify-between text-lg sm:justify-start sm:space-x-16">
      {routes.map((route, i) => (
        <a
          key={i}
          className={cn(
            "inline uppercase outline-none transition duration-150 hover:scale-[1.03] hover:text-primary-foreground/80",
            pathname === route.url ||
              (pathname.includes("/project/") && route.url === "/projects")
              ? "text-primary-foreground"
              : ""
          )}
          href={route.url}
        >
          <motion.div
            animate={{
              scale: tappedUrl === route.url ? [0.97, 1.03, 1] : 1,
            }}
            onClick={() => manageTap(route.url)}
            transition={{
              duration: 0.4,
              easing: "ease-in-out",
            }}
          >
            {route.name}
          </motion.div>
        </a>
      ))}
    </div>
  );
}
