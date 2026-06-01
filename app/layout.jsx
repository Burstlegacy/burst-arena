"use client";

import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  const pathname = usePathname();

  return (
    <html>
      <body style={{
  backgroundColor: "#0A0A0A",
  color: "white",
  fontFamily: "Arial, sans-serif",
  margin: 0
}}>
        <Navbar />

        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
