"use client";
import { motion } from "framer-motion";

export default function TournamentCard({ title, game }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      <div className="bg-[#161616] p-4">
    >
      <h3>{title}</h3>
      <p className="text-gray-400">{game}</p>
    </motion.div>
  );
}
