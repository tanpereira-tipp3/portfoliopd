export default function Debug() {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Debug Page</h1>
      <p className="text-lg mb-2">If you can see this, the page is rendering.</p>
      <p className="text-gray-600">Current time: {new Date().toLocaleString()}</p>
    </div>
  );
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

