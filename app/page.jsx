"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      padding: "40px",
      maxWidth: "1200px",
      margin: "0 auto",
      color: "white"
    }}>

      {/* HEADER */}
      <h1 style={{ fontSize: "32px" }}>
        Dashboard
      </h1>

      <p style={{ color: "#aaa" }}>
        Welcome to the Arena
      </p>

      {/* PLAY BUTTON */}
      <Link href="/play">
        <button style={{
          marginTop: "20px",
          background: "#ef4444",
          padding: "12px 24px",
          borderRadius: "8px",
          border: "none",
          color: "white",
          cursor: "pointer"
        }}>
          ⚔️ Find Match
        </button>
      </Link>

      {/* TWITCH STREAM */}
      <div style={{ marginTop: "40px" }}>
        <h2>🔴 Live</h2>

        <iframe
          src="https://player.twitch.tv/?channel=burstlegacy&parent=burst-arena-vw2s.vercel.app&parent=vercel.app"
          height="400"
          width="100%"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  );
}
