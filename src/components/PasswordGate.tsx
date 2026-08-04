"use client";

import { useState, useEffect, type FormEvent } from "react";

const STORAGE_KEY = "portfolio-unlocked";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(STORAGE_KEY) === "1");
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (value === "sallee2026") {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
      setValue("");
    }
  }

  // Avoid flash — render nothing until we know the state.
  if (unlocked === null) return null;
  if (unlocked) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-paper">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm flex-col items-center gap-5 px-6"
      >
        <h1 className="text-2xl font-bold tracking-tight text-cod-gray">
          Hey there!
        </h1>
        <p className="text-center text-sm text-muted">
          This portfolio is password-protected. Enter the password to continue.
        </p>

        <input
          type="password"
          autoFocus
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-cod-gray outline-none transition-colors placeholder:text-muted focus:border-cod-gray"
        />

        {error && (
          <p className="text-xs text-red-500">
            Incorrect password. Try again.
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-cta bg-cod-gray py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
