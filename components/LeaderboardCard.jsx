export default function LeaderboardCard({ name, rank }) {
  return (
    <div className="bg-[#161616] p-4 rounded flex justify-between">
      <span>{name}</span>
      <span className="text-yellow-400">{rank}</span>
    </div>
  );
}
