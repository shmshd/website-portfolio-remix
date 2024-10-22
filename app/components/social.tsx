import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

const socialButtons = [
  {
    href: "mailto:vkicyn4f@duck.com",
    icon: FiMail,
    target: "_self",
    title: "Email",
  },
  {
    href: "https://github.com/shmshd",
    icon: BsGithub,
    target: "_blank",
    title: "GitHub",
  },
];

export default function Social() {
  const [tappedIcon, setTappedIcon] = useState<null | string>(null);

  const manageTap = (iconTitle: string) => {
    setTappedIcon(iconTitle);
    setTimeout(() => setTappedIcon(null), 300);
  };

  return (
    <div className="mt-8 flex space-x-8 sm:space-x-10">
      {socialButtons.map((social, i) => (
        <a
          key={i}
          className="flex cursor-pointer content-center transition duration-300 hover:scale-125"
          href={social.href}
          target={social.target}
          title={social.title}
        >
          <motion.div
            animate={{
              scale: tappedIcon === social.title ? [0.75, 1.25, 1] : 1,
            }}
            onClick={() => manageTap(social.title)}
          >
            <social.icon
              className="hover:text-primary-foreground"
              size="1.5rem"
            />
          </motion.div>
        </a>
      ))}
    </div>
  );
}
