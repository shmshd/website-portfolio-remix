import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Content(props: { children: ReactNode; title: string }) {
  return (
    <div className="mt-10">
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.15, easing: "ease-in-out" }}
      >
        <h1 className="text-4xl md:text-5xl">{props.title}</h1>
        <div className="mt-6">{props.children}</div>
      </motion.div>
    </div>
  );
}
