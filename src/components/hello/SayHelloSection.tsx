"use client";

import { useState } from "react";

const EMAIL = "sallee.lsy@gmail.com";

// Shared field styling (Figma 662:21207): 8px radius, #f6f6f6 fill, #e2e2e2 border.
const FIELD =
  "w-full rounded-[8px] border border-[#e2e2e2] bg-[#f6f6f6] px-4 py-3 text-[16px] text-cod-gray outline-none transition-colors placeholder:text-[#afafaf] focus:border-ink";

/**
 * SayHelloSection — the "Say hello" tab panel (Figma 662:21221).
 * Big invitation heading, availability blurb, and a Name / Email / Message
 * form. There's no backend yet, so submitting composes a prefilled email in
 * the visitor's mail client.
 */
export function SayHelloSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || "your portfolio"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section aria-labelledby="hello-heading" className="bg-body-bg">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[50px] px-6 py-14 sm:px-10">
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
          <button
            type="submit"
            className="w-full rounded-[8px] bg-ink px-4 py-[14px] text-center text-[18px] font-medium leading-5 text-paper outline-none transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
          >
            Get in Touch
          </button>
        </form>
      </div>
    </section>
  );
}
