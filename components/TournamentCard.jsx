"use client";
import { motion } from "framer-motion";

export default function TournamentCard({ title, game }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#161616] p-4 rounded-xl"
    >
      <h3>{title}</h3>
      <p className="text-gray-400">{game}</p>
    </motion.div>
  );
}
