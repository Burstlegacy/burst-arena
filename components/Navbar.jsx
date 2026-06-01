"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 40px",
      background: "#111",
      borderBottom: "1px solid #222"
    }}>
      <h1 style={{ color: "#ef4444", fontSize: "20px" }}>
        🔥 Burst Arena
      </h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/play">⚔️ Play</Link>
        <Link href="/tournaments">🏆 Tournaments</Link>
        <Link href="/leaderboard">🥊 Leaderboard</Link>
        <Link href="/settings">⚙️ Settings</Link>
      </div>
    </div>
  );
}
