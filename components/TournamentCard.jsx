"use client";

import { motion } from "framer-motion";

export default function TournamentCard({ title, game }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={{
        background: "#161616",
        padding: "16px",
        borderRadius: "10px",
