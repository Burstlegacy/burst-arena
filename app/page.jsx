"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "40px", color: "white" }}>

      <h1>🔥 Burst Arena</h1>

      <p>Test Working Version</p>

      {/* PLAY BUTTON */}
      <Link href="/play">
        <button style={{
          padding: "10px",
          marginTop: "20px",
          background: "#ef4444",
          border: "none",
          borderRadius: "8px",
          color: "white",
          cursor: "pointer"
        }}>
          ⚔️ Play Now
        </button>
      </Link>

      {/* TWITCH */}
      <div style={{ marginTop: "40px" }}>
        <h2>🔴 Live Stream</h2>

        <iframe
  src="https://player.twitch.tv/?channel=riotgames&parent=burst-arena-vw2s.vercel.app"
  height="400"
  width="100%"
  allowFullScreen
></iframe>

      </div>

    </div>
  );
}
