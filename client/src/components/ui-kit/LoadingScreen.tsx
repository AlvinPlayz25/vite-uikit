import { motion } from "framer-motion";
import { GradientText } from "./GradientText";
import { Waves } from "lucide-react";

export function LoadingScreen() {
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const textVariants = {
    animate: {
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const messages = [
    "Readying up...",
    "Crafting beauty...",
    "Loading magic...",
    "Brewing design...",
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-[100]"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Spinning Icon */}
        <motion.div
          variants={spinnerVariants}
          animate="animate"
          className="flex items-center justify-center"
        >
          <div className="relative w-24 h-24">
            {/* Outer ring */}
            <motion.div className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-500 border-r-purple-500" />

            {/* Inner icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-primary-foreground shadow-lg shadow-indigo-500/30">
                <Waves className="w-6 h-6" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold font-heading tracking-tight">
            <GradientText>{randomMessage}</GradientText>
          </h2>
          <motion.p
            variants={textVariants}
            animate="animate"
            className="text-sm text-muted-foreground"
          >
            Building something beautiful...
          </motion.p>
        </div>

        {/* Dots animation */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
