import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { url } from "./config";

const socket = io(url);

export default function ChatBot({ onClose }) {
  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem("chatMessages");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("ai_response", (msg) => {
      const newMessage = { sender: "ai", text: msg };
      setMessages((prev) => {
        const updated = [...prev, newMessage];
        sessionStorage.setItem("chatMessages", JSON.stringify(updated));
        return updated;
      });
    });

    return () => {
      socket.off("ai_response");
    };
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => {
      const updated = [...prev, userMsg];
      sessionStorage.setItem("chatMessages", JSON.stringify(updated));
      return updated;
    });

    socket.emit("user_message", input);
    setInput("");
  };

  return (
    <div
      className="card secondaryBg shadow"
      id="chat1"
     style={{
  borderRadius: "15px",
  maxWidth: "450px",
  width: "100%",
}}
    >
      <div
        className="d-flex justify-content-between align-items-center p-3 mb-4 primaryBg text-white border-bottom-0"
        style={{
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      >
        <p className="mb-0 fw-bold">Live chat</p>
        <i className="fas fa-times" role="button" onClick={onClose}></i>
      </div>

      <div
        className="card-body"
        style={{ overflowY: "auto", maxHeight: "300px" }}
      >
        {/* 👇 Default AI welcome message */}
        {messages.length === 0 && (
          <div className="d-flex flex-row justify-content-start mb-3">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
              alt="ai avatar"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
                alignSelf: "flex-end",
              }}
            />
            <div
              className="p-3 ms-2 primaryBg text-white"
              style={{ borderRadius: "15px" }}
            >
              <p className="small mb-0">
                👋 Hi! I’m Webprowale’s AI. What are you planning to build today
                a website, mobile app, or maybe an AI project?
              </p>
            </div>
          </div>
        )}

        {/* Render chat history */}
        {messages.map((m, i) =>
          m.sender === "user" ? (
            <div key={i} className="d-flex flex-row justify-content-end mb-3">
              <div
                className="p-3 me-2 border bg-black text-white"
                style={{ borderRadius: "15px" }}
              >
                <p className="small mb-0">{m.text}</p>
              </div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                alt="user avatar"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  alignSelf: "flex-end",
                }}
              />
            </div>
          ) : (
            <div key={i} className="d-flex flex-row justify-content-start mb-3">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="ai avatar"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  alignSelf: "flex-end",
                }}
              />
              <div
                className="p-3 ms-2 primaryBg text-white"
                style={{ borderRadius: "15px" }}
              >
                <p className="small mb-0">{m.text}</p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Input with Send Button */}
      <div className="d-flex align-items-center p-2 border-top mb-2">
        {/* <textarea
          className="form-control secondaryBg text-black me-2"
          placeholder="Type your message here"
          rows="1"
          style={{ resize: "none" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
        ></textarea> */}
        <input className="form-control secondaryBg text-black me-2"
          placeholder="Type your message here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()} />
        <button
          className="btn primaryBg text-white rounded-circle"
          onClick={sendMessage}
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}
