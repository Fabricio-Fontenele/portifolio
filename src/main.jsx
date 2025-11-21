import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

console.log(
  "%c👋 Olá, desenvolvedor curioso!",
  "color: #8b5cf6; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(139, 92, 246, 0.3);"
);

console.log(
  "%c🔍 Gostou do que viu?",
  "color: #06b6d4; font-size: 18px; font-weight: bold; margin-top: 10px;"
);

console.log(
  "%cEste portfólio foi desenvolvido com:\n" +
    "⚛️  React + Vite\n" +
    "🎨 Tailwind CSS\n" +
    "✨ Muito café e dedicação\n",
  "color: #64748b; font-size: 14px; line-height: 1.8; font-family: monospace;"
);

console.log(
  "%c💼 Está procurando um dev Full Stack?",
  "color: #8b5cf6; font-size: 16px; font-weight: bold; margin-top: 10px;"
);

console.log(
  "%cVamos conversar! 👇\n" +
    "📧 fabriciofontenele67@gmail.com\n" +
    "💼 linkedin.com/in/fabricio-fontenele\n" +
    "🐙 github.com/Fabricio-Fontenele",
  "color: #10b981; font-size: 14px; line-height: 1.8; font-family: monospace;"
);

console.log(
  "%c💡 Dica: Confira o código-fonte no GitHub!",
  "color: #f59e0b; font-size: 14px; font-style: italic; margin-top: 10px;"
);

console.log(
  "%c🚀 Happy coding!",
  "color: #8b5cf6; font-size: 16px; font-weight: bold; margin-top: 10px;"
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
