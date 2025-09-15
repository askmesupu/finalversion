import React, { useState } from "react";

export default function AnswerQuestion() {
  const [answer, setAnswer] = useState(null);
  const [noPos, setNoPos] = useState({ top: "200px", left: "150px" });

  const moveNo = () => {
    setNoPos({
      top: Math.random() * 300 + "px",
      left: Math.random() * 300 + "px",
    });
  };

  return (
    <div>
      <h2>Will you stay forever with me? 💍</h2>
      <div style={{ marginTop: "30px" }}>
        <button onClick={() => setAnswer("yes")}>Yes</button>
        <button
          onMouseEnter={moveNo}
          style={{
            position: "absolute",
            top: noPos.top,
            left: noPos.left,
          }}
        >
          No
        </button>
      </div>

      {answer === "yes" && (
        <div>
          <h3>I love you baby ❤️</h3>
          <img src="https://i.ibb.co/5FSp4Jb/dudu-happy.png" alt="Happy Dudu" width="150"/>
        </div>
      )}

      {answer === "no" && (
        <div>
          <img src="https://i.ibb.co/ZGrzV7p/dudu-cry.png" alt="Crying Dudu" width="150"/>
        </div>
      )}
    </div>
  );
        }
