import Image from "next/image";
import avatar from "../../../public/hero/avatar.png";

// Real stats (kept per brief).
const STATS = [
  { label: "Based in", value: "Toronto, Canada" },
  { label: "Experience in this field", value: "6+" },
];

/**
 * AboutCard — dark intro card in the hero (Figma 637:23533).
 * 40px-radius dark panel: avatar + "Hello, I'm / Sallee Lee" + stats on the
 * left, and the quote in a light 32px-radius box on the right.
 */
export function AboutCard() {
  return (
    <div className="flex flex-col gap-8 rounded-[40px] border border-card-border bg-card-dark p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10">
      {/* Identity */}
      <div className="flex items-center gap-8">
        <Image
          src={avatar}
          alt="Sallee"
          width={112}
          height={112}
          placeholder="blur"
          className="size-[88px] shrink-0 rounded-full object-cover lg:size-[112px]"
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <p className="text-[16px] leading-[1.5] text-white">Hello, I&rsquo;m</p>
            <p className="text-[40px] font-semibold leading-none text-white lg:text-[48px]">
              Sallee Lee
            </p>
          </div>
          <dl className="flex gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="text-[16px] leading-[1.5] text-white">{stat.label}</dt>
                <dd className="text-[18px] font-bold leading-6 text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Quote box */}
      <figure className="flex flex-col gap-1 rounded-[32px] bg-body-bg p-6 lg:w-1/2 lg:shrink-0">
        <span aria-hidden className="text-[52px] font-bold leading-[0.9] text-card-dark">
          &ldquo;
        </span>
        <blockquote className="text-[24px] font-semibold italic leading-[1.35] text-card-dark">
          It&rsquo;s all one foot in front of the other at this point.
        </blockquote>
      </figure>
    </div>
  );
}
