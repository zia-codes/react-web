// components/Form.jsx
import React, { useState } from "react";

export default function Form({ showAlert, mode }) {
  const [text, setText] = useState("");

  const handleUpper = () => {
    setText(text.toUpperCase());
    showAlert("Converted to UPPERCASE");
  };

  const handleLower = () => {
    setText(text.toLowerCase());
    showAlert("Converted to lowercase");
  };

  const handleClear = () => {
    setText("");
    showAlert("Text cleared");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    showAlert("Copied to clipboard");
  };

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const readMinutes = (0.008 * words).toFixed(2);

  return (
    <div
      className="min-h-screen p-6 sm:p-10 transition-all duration-500"
      style={{
        backgroundColor: mode === "light" ? "#fff" : "#1b263b",
        color: mode === "light" ? "#111827" : "#fff",
      }}
    >
      <h1 className="text-2xl font-semibold mb-3">Enter your text</h1>

      <textarea
        className="w-full h-40 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex flex-wrap gap-3 mt-4">
        <button onClick={handleUpper} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Uppercase</button>
        <button onClick={handleLower} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Lowercase</button>
        <button onClick={handleClear} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Clear</button>
        <button onClick={handleCopy} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Copy</button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Your text summary</h2>
        <p>{words} words and {text.length} characters</p>
        <p>{readMinutes} Minutes to read</p>

        <h2 className="text-2xl font-bold mt-5">Preview</h2>
        <p className="whitespace-pre-wrap mt-2 p-3 bg-gray-100 text-black rounded">
          {text.length > 0 ? text : "Nothing to preview"}
        </p>
      </div>
    </div>
  );
}
