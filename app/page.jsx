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

      {/* BUTTON */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Link href="/play">
          <button style={{
            background: "#ef4444",
            padding: "16px 28px",
            borderRadius: "10px",
            border: "none",
