"use client";
import { motion } from "framer-motion";

export default function TournamentCard({ title, game }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      <div style={{
  background: "#161616",
  padding: "16px",
  borderRadius: "10px",
  cursor: "pointer"
}}>
    >
      <h3>{title}</h3>
      <p className="text-gray-400">{game}</p>
    </motion.div>
  );
}
