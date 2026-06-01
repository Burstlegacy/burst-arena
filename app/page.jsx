"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* HEADER */}
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        Dashboard
      </h1>

      <p style={{ color: "#aaa", marginBottom: "30px" }}>
        Welcome to the Arena
      </p>

      {/* PLAY CARD */}
      <div style={card}>
        <h2>⚔️ Play Ranked</h2>
        <p style={{ color: "#aaa" }}>
          Enter matchmaking and prove your skill
        </p>

        <Link href="/play">
          <button style={buttonPrimary}>
            Find Match
          </button>
        </Link>
      </div>

      {/* STREAM */}
      <div style={{ marginTop: "30px" }}>
        <h2>🔴 Live</h2>

        https://player.twitch.tv/?channel=burstlegacy&parent=burst-arena-vw2s.vercel.app&parent=vercel.app></iframe>
      </div>

    </div>
  );
}

/* STYLES */

const card = {
  background: "#161616",
  padding: "20px",
  borderRadius: "10px",
  border: "1px solid #222"
};

const buttonPrimary = {
  marginTop: "15px",
  background: "#ef4444",
  padding: "12px 20px",
  borderRadius: "8px",
  border: "none",
  color: "white",
  cursor: "pointer"
};
