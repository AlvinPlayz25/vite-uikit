import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-5xl md:text-6xl lg:text-7xl text-center px-8"
        style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 600 }}
      >
        Ready to Start Building Apps?
      </motion.h1>
    </div>
  );
}
