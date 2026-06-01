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

      {/* HERO */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#ef4444", fontSize: "40px" }}>
          🔥 Burst Arena
        </h1>

        <p style={{ color: "#aaa" }}>
          Enter the Arena. Compete. Dominate.
        </p>

        <Link href="/play">
          <button style={{
            background: "#ef4444",
            padding: "12px 24px",
            borderRadius: "8px",
            border: "none",
            color: "white",
            cursor: "pointer",
            marginTop: "20px"
          }}>
            ⚔️ Play Now
          </button>
        </Link>
      </div>

      {/* TWITCH */}
      <div style={{ marginTop: "40px" }}>
        <h2>🔴 Live Stream</h2>

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
