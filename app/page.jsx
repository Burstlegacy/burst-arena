"use client";

import { motion } from "framer-motion";
import TournamentCard from "@/components/TournamentCard";
import { sounds, playSound } from "@/lib/sounds";

export default function Home() {
  return (
    <main className="p-6">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-5xl text-red-500 font-bold">
          🔥 Burst Arena
        </h1>

        <p className="text-gray-400">
          Enter the Arena. Compete. Dominate.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => playSound(sounds.click)}
            className="bg-red-600 px-6 py-3 rounded-xl"
          >
            ⚔️ Play Now
          </motion.button>
        </div>
      </motion.div>

      {/* STREAM */}
      <div className="mt-10">
        <h2>🔴 Live Stream</h2>

        <iframe
          src="https://player.twitch.tv/?channel=burstlegacy&parent=localhost"
          className="w-full h-[400px] rounded-xl"
        />
      </div>

      {/* TOURNAMENTS */}
      <div className="mt-10">
        <h2>🏆 Tournaments</h2>

        <div className="grid grid-cols-2 gap-4">
          <TournamentCard title="Commander Chaos" game="MTG" />
          <TournamentCard title="EAFC Cup" game="EAFC" />
        </div>
      </div>

      {/* MATCH BUTTON */}
      <div className="mt-10 text-center">
        <motion.button
          animate={{
            boxShadow: [
              "0 0 10px rgba(225,29,72,0.3)",
              "0 0 25px rgba(225,29,72,0.7)"
            ]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => playSound(sounds.matchFound)}
          className="bg-red-600 px-8 py-4 rounded-xl"
        >
          ⚔️ Find Match
        </motion.button>
      </div>

    </main>
  );
}
