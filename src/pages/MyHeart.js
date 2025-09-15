import React from "react";

export default function MyHeart() {
  const hearts = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div>
      <h2>My Heart</h2>
      <div style={{ position: "relative", height: "400px" }}>
        {hearts.map((h) => (
          <span
            key={h}
            style={{
              position: "absolute",
              top: Math.random() * 400 + "px",
              left: Math.random() * 90 + "%",
              color: "pink",
              fontSize: "20px",
              animation: "float 5s infinite",
            }}
          >
            Shiropa
          </span>
        ))}
      </div>
    </div>
  );
          }
