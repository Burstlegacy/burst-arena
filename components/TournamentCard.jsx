"use client";

export default function TournamentCard({ title, game }) {
  return (
    <div style={{
      background: "#161616",
      padding: "16px",
      borderRadius: "10px",
      cursor: "pointer",
      border: "1px solid #222"
    }}>
      <h3 style={{ marginBottom: "8px" }}>{title}</h3>
      <p style={{ color: "#aaa" }}>{game}</p>
    </div>
  );
}
