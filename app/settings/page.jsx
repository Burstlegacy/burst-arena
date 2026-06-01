"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Settings() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("soundEnabled");
    if (saved !== null) {
      setSoundEnabled(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("soundEnabled", JSON.stringify(soundEnabled));
  }, [soundEnabled]);

  return (
    <div className="p-8">
      <h1 className="text-3xl text-red-500">
        Settings
      </h1>

      <div className="mt-6">
        <p>Sound Effects</p>

        <div
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="w-16 h-8 bg-[#222] rounded-full flex items-center p-1 cursor-pointer"
        >
          <motion.div
            animate={{ x: soundEnabled ? 32 : 0 }}
            className="w-6 h-6 bg-red-500 rounded-full"
          />
        </div>

        <p className="mt-2 text-gray-400">
          {soundEnabled ? "Sound ON" : "Sound OFF"}
        </p>
      </div>
    </div>
  );
}
