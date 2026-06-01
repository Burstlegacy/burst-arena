"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div style={{
  padding: "40px",
  maxWidth: "1200px",
  margin: "0 auto"
}}>

  {/* HERO */}
  <div style={{ textAlign: "center", marginBottom: "50px" }}>
    <h1 style={{
      fontSize: "48px",
      color: "#ef4444",
      marginBottom: "10px"
    }}>
      🔥 Burst Arena
    </h1>

    <p style={{
      color: "#aaa",
      fontSize: "18px"
    }}>
      Enter the Arena. Compete. Dominate.
    </p>
  </div>

  {/* ACTION BUTTON */}
  <div style={{ textAlign: "center", marginBottom: "40px" }}>
    <Link href="/play">
      <button style={{
        background: "#ef4444",
        padding: "16px 28px",
        borderRadius: "10px",
        border: "none",
        color: "white",
        fontSize: "18px",
        cursor: "pointer"
      }}>
        ⚔️ Enter Arena
      </button>
    </Link>
  </div>

</div>

      {/* TWITCH */}
      <div style={{ marginTop: "40px" }}>
        <h2>🔴 Live Stream</h2>

        <iframe
  src="https://player.twitch.tv/?channel=burstlegacy&parent=burst-arena-vw2s.vercel.app"
  height="400"
  width="100%"
  allowFullScreen
></iframe>

      </div>

    </div>
  );
}
