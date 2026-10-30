import { BUDGETS, PRINCIPLES_IMAGE } from "@/lib/content";
import { revealDelay } from "@/lib/utils";
import Image from "next/image";

/**
 * Section 2, key-value grid. A statement in the right half, the budgets
 * as a definition list beneath it, and a lone photograph hanging in the
 * left half.
 */
export function PrinciplesSection() {
  return (
    <section
      id="principles"
      aria-labelledby="principles-title"
      className={[
        "grid grid-cols-1 gap-x-5 gap-y-10 px-(--margin) py-24",
        "md:grid-cols-12 md:gap-y-0 md:py-40",
      ].join(" ")}
    >
      <h2
        id="principles-title"
        data-reveal
        className={[
          "font-display text-head font-bold tracking-[-0.035em]",
          "md:col-span-5 md:row-start-1",
        ].join(" ")}
      >
        Budgets before components
      </h2>

      <p
        data-reveal
        style={revealDelay(1)}
        className={[
          "text-lead text-ink md:col-span-6 md:col-start-7",
          "md:row-start-1 md:indent-[3em]",
        ].join(" ")}
      >
        Interfaces earn trust in their first hundred milliseconds. I write the
        budgets before the components, keep them in the pull request template,
        and treat a missed budget as a bug.
      </p>

      <figure
        data-reveal
        style={revealDelay(2)}
        className={[
          "w-[62%] justify-self-end md:col-span-4 md:row-span-2",
          "md:row-start-2 md:mt-16 md:w-auto md:justify-self-stretch",
        ].join(" ")}
      >
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-square">
          <Image
            src={PRINCIPLES_IMAGE.url}
            alt={PRINCIPLES_IMAGE.alt}
            fill
            sizes="(min-width: 768px) 33vw, 62vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-4 max-w-[26ch] text-small text-muted">
          Measured on mid-range Android phones over 4G, the devices most people
          in Vietnam actually hold.
        </figcaption>
      </figure>

      <dl
        className={[
          "grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2",
          "md:col-span-6 md:col-start-7 md:row-start-2 md:mt-24",
        ].join(" ")}
      >
        {BUDGETS.map((budget, index) => (
          <div
            key={budget._key}
            data-reveal
            style={revealDelay((index % 2) + 2)}
            className="flex flex-col-reverse gap-1"
          >
            <dt className="text-small text-muted">{budget.label}</dt>
            <dd
              className={[
                "font-display text-lead font-bold tabular-nums",
                "tracking-[-0.02em] text-ink",
              ].join(" ")}
            >
              {budget.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
