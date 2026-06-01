export default function Tournaments() {
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>
        🏆 Tournaments
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px"
      }}>

        <div style={card}>
          Commander Clash
        </div>

        <div style={card}>
          EAFC Cup
        </div>

      </div>
    </div>
  );
}

const card = {
  background: "#161616",
  padding: "20px",
  borderRadius: "10px"
};
