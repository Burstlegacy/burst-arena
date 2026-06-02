
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

      {/* PLAY CARD */}
      <div style={{
        background: "#161616",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px"
      }}>
        <h2>⚔️ Play Ranked</h2>
        <p style={{ color: "#aaa" }}>
          Enter matchmaking and prove your skill
        </p>

        <Link href="/play">
          <button style={{
            marginTop: "10px",
            background: "#ef4444",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            color: "white",
            cursor: "pointer"
          }}>
            Find Match
          </button>
        </Link>
      </div>

      {/* TWITCH */}
      
<div style={{ marginTop: "30px" }}>
  <h2>🔴 Live</h2>

  <iframe
    src="https://player.twitch.tv/?channel=burstlegacy&parent=burst-arena-vw2s.vercel.app&parent=vercel.app"
    height="400"
    width="100%"
    allowFullScreen
  ></iframe>
</div>

  );
}
``


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
