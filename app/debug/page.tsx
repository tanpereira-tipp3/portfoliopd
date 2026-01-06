export default function Debug() {
  return (
    <div style={{ padding: "40px", backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
      <h1 style={{ color: "black", fontSize: "24px" }}>Debug Page</h1>
      <p style={{ color: "black" }}>If you can see this, basic rendering works.</p>
      <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "white", border: "2px solid black" }}>
        <p>This is a test div with explicit styles.</p>
      </div>
    </div>
  );
}

