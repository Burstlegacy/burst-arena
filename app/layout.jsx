"use client";

import Link from "next/link";

export default function Layout({ children }) {
  return (
    <html>
      <body style={{
        margin: 0,
        fontFamily: "Arial",
        background: "#0A0A0A",
        color: "white"
      }}>
        <div style={{ display: "flex" }}>

          {/* SIDEBAR */}
          <div style={{
            width: "220px",
            height: "100vh",
            background: "#111",
            padding: "20px",
            borderRight: "1px solid #222"
          }}>

            <h2 style={{ color: "#ef4444" }}>
              🔥 Burst Arena
            </h2>

            <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px" }}>
              <SidebarLink href="/play" label="⚔️ Play" />
              <SidebarLink href="/tournaments" label="🏆 Tournaments" />
              <SidebarLink href="/leaderboard" label="🥊 Leaderboard" />
              <SidebarLink href="/profile" label="👤 Profile" />
              <SidebarLink href="/settings" label="⚙️ Settings" />
            </div>

          </div>

          {/* MAIN CONTENT */}
          <div style={{ flex: 1, padding: "40px" }}>
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}

function SidebarLink({ href, label }) {
  return (
    <Link href={href}>
      <div style={{
        padding: "10px",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "0.2s",
      }}>
        {label}
      </div>
    </Link>
  );
}
