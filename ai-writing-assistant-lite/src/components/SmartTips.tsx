const tips = [
  "💡 Start with a strong hook!",
  "🧠 Ask a question to engage the reader.",
  "📌 Keep paragraphs short and easy to read.",
  "✨ Use active voice to sound confident.",
];

export default function SmartTips() {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  return <div className="tip">{randomTip}</div>;
}
