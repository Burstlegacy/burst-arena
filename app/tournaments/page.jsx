"use client";
import TournamentCard from "@/components/TournamentCard";

export default function Tournaments() {
  return (
    <div className="p-8">
      <h1 className="text-2xl">Tournaments</h1>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <TournamentCard title="Weekly Cup" game="MTG" />
        <TournamentCard title="Arena League" game="EAFC" />
      </div>
    </div>
  );
}
