"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      
      {/* HERO */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{
          fontSize: "48px",
          color: "#ef4444",
          marginBottom: "10px"
        }}>
          🔥 Burst Arena TEST 1234
        </h1>

        {/* TWITCH STREAM */}
<div style={{ marginTop: "40px" }}>
  <h2>🔴 Live Stream Test</h2>

  <iframe
    src="https://player.twitch.tv/?channel=riotgames&parent=burst-arena-vw2s.vercel.app"
    height="400"
    width="100%"
    allowFullScreen
  ></iframe>
</div>
        
        <p style={{ color: "#aaa", marginBottom: "20px" }}>
          Enter the Arena. Compete. Dominate.
        </p>

        /play
          <button style={styles.primaryButton}>
            ⚔️ Play Now
          </button>
        </Link>
      </div>

      {/* TOURNAMENTS */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={styles.sectionTitle}>🏆 Featured Tournaments</h2>

        <div style={styles.grid}>
          <Card title="Commander Chaos" subtitle="MTG • Live" />
          <Card title="EAFC Arena Cup" subtitle="EAFC • Starting Soon" />
        </div>
      </section>

      {/* MATCHMAKING */}
      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <Link href="/play">
          <button style={styles.bigButton}>
            ⚔️ Find Match
          </button>
        </Link>
      </section>

      {/* LEADERBOARD */}
      <section>
        <h2 style={styles.sectionTitle}>🥊 Top Players</h2>

        <div style={styles.card}>
          <p>🏆 PlayerX — Champion</p>
          <p>🥇 PlayerY — Gold</p>
          <p>🥈 PlayerZ — Silver</p>
        </div>
      </section>

    </div>
  );
}

/* COMPONENTS INLINE */

function Card({ title, subtitle }) {
  return (
    <div style={styles.cardHover}>
