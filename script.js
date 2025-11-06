/* Global reset and base styles */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

body {
  font-family: "Montserrat", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
  background: radial-gradient(circle at top, #333 0, #111 55%, #000 100%);
  color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 16px;
}

/* Layout wrapper */
.page-wrapper {
  background: linear-gradient(145deg, #111, #181818);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);
  max-width: 960px;
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Header */
.site-header {
  padding: 20px 24px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: radial-gradient(circle at top left, #333 0, #111 45%, #000 100%);
}

.logo {
  height: 28px;
  width: auto;
  object-fit: contain;
  filter: brightness(1.1);
}

.site-title {
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.site-subtitle {
  font-size: 0.9rem;
  font-weight: 300;
  color: #d2d2d2;
}

/* Main chat area */
.chatbox {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 8px;
  gap: 12px;
}

/* Messages area */
.chat-window {
  flex: 1;
  overflow-y: auto;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  scrollbar-width: thin;
  scrollbar-color: #c9a96b rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  background: radial-gradient(circle at top, #222 0, #111 60%, #000 100%);
}

/* Custom scrollbar (WebKit) */
.chat-window::-webkit-scrollbar {
  width: 8px;
}
.chat-window::-webkit-scrollbar-track {
  background: transparent;
}
.chat-window::-webkit-scrollbar-thumb {
  background: #c9a96b;
  border-radius: 999px;
}

/* Message bubbles */
.message {
  max-width: 80%;
  padding: 10px 12px;
  border-radius: 16px;
  font-size: 0.9rem;
  line-height: 1.45;
  display: inline-block;
  position: relative;
  word-wrap: break-word;
}

/* User messages (right side) */
.message.user {
  align-self: flex-end;
  background: linear-gradient(135deg, #f5f5f5, #dedede);
  color: #111;
  border-bottom-right-radius: 4px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
}

/* Bot messages (left side) */
.message.bot {
  align-self: flex-start;
  background: rgba(15, 15, 15, 0.9);
  color: #f5f5f5;
  border: 1px solid rgba(201, 169, 107, 0.25);
  border-bottom-left-radius: 4px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.55);
}

/* Small label above messages (e.g., "You", "Beauty Advisor") */
.message-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 4px;
  opacity: 0.8;
}

/* Time stamp under messages */
.message-time {
  font-size: 0.7rem;
  margin-top: 4px;
  opacity: 0.65;
}

/* Typing indicator */
.typing-indicator {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.typing-dot {
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: #c9a96b;
  animation: bounce 1s infinite ease-in-out;
}

.typing-dot:nth-child(2) {
  animation-delay: 0.15s;
}
.typing-dot:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0.4);
    opacity: 0.7;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Chat form */
.chat-form {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px;
  border-radius: 999px;
  background: rgba(18, 18, 18, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.04);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.65);
}

.chat-form input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #f5f5f5;
  font-size: 0.95rem;
  padding: 8px 10px;
}

.chat-form input::placeholder {
  color: #777;
  font-weight: 300;
}

.chat-form button {
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 999px;
  padding: 8px 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f7e7c2, #c9a96b);
  color: #111;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.8);
  transition: transform 0.08s ease, box-shadow 0.08s ease, filter 0.08s ease;
}

.chat-form button:active {
  transform: translateY(1px) scale(0.98);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.7);
}

.chat-form .material-icons {
  font-size: 20px;
}

/* Footer */
.site-footer {
  padding: 10px 18px 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 0.75rem;
  color: #b8b8b8;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: #050505;
}

.site-footer nav {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.site-footer a {
  color: #e6cf95;
  text-decoration: none;
  font-size: 0.75rem;
}

.site-footer a:hover {
  text-decoration: underline;
}

/* Accessibility helper */
.visually-hidden {
  position: absolute;
  left: -9999px;
}

/* Responsive tweaks */
@media (max-width: 768px) {
  .page-wrapper {
    min-height: 90vh;
  }

  .site-header {
    padding: 16px 16px 10px;
  }

  .site-title {
    font-size: 1.2rem;
  }

  .chatbox {
    padding: 12px 10px 6px;
  }

  .message {
    max-width: 90%;
  }

  .site-footer {
    padding: 8px 12px 12px;
  }
}
