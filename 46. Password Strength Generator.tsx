import React, { useState } from "react";

const App: React.FC = () => {
  const [password, setPassword] = useState("");
  const getStrength = (password: string): string => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);

    const length = password.length;
    const passedChecks = [hasUpper, hasLower, hasNumber, hasSymbol].filter(
      Boolean
    ).length;

    if (length === 0) return "";
    if (length < 6) return "Weak";
    if (length >= 6 && passedChecks >= 2) return "Medium";
    if (length >= 8 && passedChecks >= 3) return "Strong";

    return "Weak";
  };
  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      {password && (
        <p>
          Password Strength:{" "}
          <span
            className={
              getStrength(password) === "Strong"
                ? "text-green-600"
                : getStrength(password) === "Medium"
                ? "text-yellow-600"
                : "text-red-600"
            }
          >
            {getStrength(password)}
          </span>
        </p>
      )}
      <p>Password Strength: {getStrength(password)}</p>
    </div>
  );
};
export default App;
