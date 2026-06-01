"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "16px",
      background: "#111",
      color: "white"
    }}>
      <h1 style={{ color: "#ef4444" }}>🔥 Burst Arena</h1>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link href="/play">Play</Link>
        <Link href="/tournaments">Tournaments</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/settings">Settings</Link>
      </div>
    </div>
  );
}
