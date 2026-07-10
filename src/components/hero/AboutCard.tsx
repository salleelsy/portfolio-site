import Image from "next/image";
import avatar from "../../../public/hero/avatar.png";

type Stat = { label: string; value: string };

// Real stats (kept per brief).
const STATS: Stat[] = [
  { label: "BASED IN", value: "Toronto, Canada" },
  { label: "EXP", value: "6+" },
];

/**
 * AboutCard — dark profile card in the hero.
 * Two-part layout for hierarchy: identity (tagline · name · stats) on the left,
 * quote + avatar on the right.
 */
export function AboutCard() {
  return (
    <div className="flex flex-col gap-8 rounded-card border border-card-border bg-card-dark p-8 lg:flex-row lg:items-center lg:gap-12">
      {/* Identity */}
      <div className="flex flex-1 flex-col gap-5">
        <p className="text-[14px] font-semibold text-[#9ca3af]">
          Product designer • Builder • Maker
        </p>
        <p className="text-[48px] font-extrabold leading-none text-white">
          Sallee Lee
        </p>
        <dl className="flex gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-[6px]">
              <dt className="text-[12px] font-semibold uppercase tracking-[0.24px] text-muted">
                {stat.label}
              </dt>
              <dd className="text-[16px] font-bold text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Quote + avatar */}
      <div className="flex flex-1 items-center justify-between gap-6 lg:justify-end lg:gap-10">
        <figure className="flex max-w-[440px] flex-col gap-1">
          <span
            aria-hidden
            className="text-[52px] font-bold leading-[0.9] text-line"
          >
            &ldquo;
          </span>
          <blockquote className="text-[24px] font-semibold leading-[1.35] text-white">
            It&rsquo;s all one foot in front of the other at this point.
          </blockquote>
        </figure>
        <Image
          src={avatar}
          alt="Sallee"
          width={112}
          height={112}
          placeholder="blur"
          className="size-[88px] shrink-0 rounded-full object-cover lg:size-[112px]"
        />
      </div>
    </div>
  );
}
