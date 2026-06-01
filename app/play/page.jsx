"use client";

import { sounds, playSound } from "@/lib/sounds";

export default function Play() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl">⚔️ Matchmaking</h1>

      <button
        onClick={() => playSound(sounds.matchFound)}
        className="bg-red-600 mt-6 px-6 py-3 rounded-xl"
      >
        Find Match
      </button>
    </div>
  );
}
