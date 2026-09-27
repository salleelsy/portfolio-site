"use client";

import { useCallback, useState } from "react";
import { Snackbar } from "../Snackbar";

const EMAIL = "sallee.lsy@gmail.com";

// Web3Forms delivers form submissions straight to the inbox registered with
// this access key (sallee.lsy@gmail.com). The key is public by design — it
// can only send to that inbox. Set it in .env.local and on the host.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

// Shared field styling (Figma 662:21207): 8px radius, #f6f6f6 fill, #e2e2e2 border.
const FIELD =
  "w-full rounded-[8px] border border-[#e2e2e2] bg-[#f6f6f6] px-4 py-3 text-[16px] text-cod-gray outline-none transition-colors placeholder:text-[#afafaf] focus:border-ink";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * SayHelloSection — the "Say hello" tab panel (Figma 662:21221).
 * Big invitation heading, availability blurb, and a Name / Email / Message
 * form that sends straight to Sallee's inbox via Web3Forms, then confirms
 * with a snackbar. Without a key configured it falls back to a prefilled
 * email in the visitor's mail client.
 */
export function SayHelloSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const closeSnack = useCallback(() => setStatus("idle"), []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`Hello from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    // Honeypot: real visitors never see or tick this box; bots often do.
    const botcheck = new FormData(event.currentTarget).get("botcheck");

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio message from ${name}`,
          from_name: "Sallee's portfolio",
          name,
          email,
          message,
          botcheck: Boolean(botcheck),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: boolean };
      if (!res.ok || !data.success) throw new Error("Send failed");
      setName("");
      setEmail("");
      setMessage("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <>
      <section aria-labelledby="hello-heading" className="bg-panel">
        <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-[50px] px-6 py-14 sm:px-10">
          <h2
            id="hello-heading"
            className="max-w-[700px] text-[40px] font-semibold leading-[1.25] tracking-[-1.5px] text-ink sm:text-[56px] sm:leading-[70px]"
          >
            Let&rsquo;s build something great together.
          </h2>
          <p className="max-w-[720px] text-[18px] leading-[1.6] text-cod-gray">
            Let&rsquo;s make something great together. I&rsquo;m available for full-time roles,
            freelance projects, and creative collaborations worldwide. Or if you&rsquo;d just
            like to grab a coffee and talk about life, I&rsquo;m always happy to chat.
          </p>

          <form onSubmit={handleSubmit} className="flex w-full max-w-[640px] flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              <label className="flex-1">
                <span className="sr-only">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`${FIELD} h-12`}
                />
              </label>
              <label className="flex-1">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${FIELD} h-12`}
                />
              </label>
            </div>
            <label>
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                placeholder="Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${FIELD} h-40 resize-none`}
              />
            </label>
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="hidden"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-[8px] bg-ink px-4 py-[14px] text-center text-[18px] font-medium leading-5 text-paper outline-none transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60"
            >
              {sending ? "Sending…" : "Get in Touch"}
            </button>
          </form>
        </div>
      </section>

      <Snackbar
        open={status === "sent" || status === "error"}
        tone={status === "error" ? "error" : "success"}
        message={
          status === "error"
            ? `Something went wrong. Please try again, or email me at ${EMAIL}.`
            : "Sent! I\u2019ll get back to you as soon as possible."
        }
        onClose={closeSnack}
      />
    </>
  );
}

