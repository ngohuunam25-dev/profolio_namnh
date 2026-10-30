"use client";

import type { Project } from "@/lib/content";
import { cn, revealDelay } from "@/lib/utils";
import { ArrowUpRight, Lock } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/** Props for {@link WorkSection}. */
interface WorkSectionProps {
  projects: Project[];
}

/**
 * Section 3, sticky split-screen focus. Projects scroll in the left half
 * while a pinned frame in the right half shows whichever one crosses the
 * middle of the viewport.
 */
export function WorkSection({ projects }: WorkSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.index);
          setActiveIndex(index);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const setItemRef = useCallback(
    (index: number) => (node: HTMLLIElement | null) => {
      itemRefs.current[index] = node;
    },
    [],
  );

  const active = projects[activeIndex];

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="bg-surface px-(--margin) py-24 md:py-40"
    >
      <div className="grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-12">
        <h2
          id="work-title"
          data-reveal
          className={[
            "font-display text-head font-bold tracking-[-0.035em]",
            "md:col-span-6",
          ].join(" ")}
        >
          Selected work
        </h2>
        <p
          data-reveal
          style={revealDelay(1)}
          className="max-w-[44ch] text-body md:col-span-5 md:col-start-7"
        >
          Four products shipped to real users, each measured before and after.
          The numbers are the budgets from above, held in production.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-5 md:mt-8 md:grid-cols-12">
        <ol className="md:col-span-6">
          {projects.map((project, index) => (
            <li
              key={project._id}
              ref={setItemRef(index)}
              data-index={index}
              className={cn(
                "flex flex-col justify-center py-12 md:min-h-[68svh]",
                "transition-opacity duration-300",
                index !== activeIndex && "md:opacity-60",
              )}
            >
              <ProjectEntry project={project} />
            </li>
          ))}
        </ol>

        <div className="hidden md:col-span-6 md:col-start-7 md:block">
          <div className="sticky top-[12svh] flex flex-col items-end">
            <div
              className={[
                "relative aspect-[4/5] h-[68svh] max-w-full",
                "overflow-hidden bg-surface-2",
              ].join(" ")}
            >
              {projects.map((project, index) => (
                <Image
                  key={project._id}
                  src={project.coverImage.url}
                  alt={index === activeIndex ? project.coverImage.alt : ""}
                  fill
                  sizes="(min-width: 768px) 40vw, 0px"
                  className={cn(
                    "object-cover transition-[opacity,transform]",
                    "duration-500 ease-out",
                    index === activeIndex
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0",
                  )}
                />
              ))}
            </div>
            <p
              aria-live="polite"
              className={[
                "mt-4 flex w-full max-w-[calc(68svh*0.8)] justify-between",
                "gap-5 text-small text-muted",
              ].join(" ")}
            >
              <span>
                {active.tag}, {active.year}
              </span>
              <span>{active.role}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Props for {@link ProjectEntry}. */
interface ProjectEntryProps {
  project: Project;
}

/** One project: name, summary, metrics and links. */
function ProjectEntry({ project }: ProjectEntryProps) {
  return (
    <article aria-labelledby={`${project.slug.current}-title`}>
      <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden md:hidden">
        <Image
          src={project.coverImage.url}
          alt={project.coverImage.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <h3
        id={`${project.slug.current}-title`}
        className="font-display text-head font-bold tracking-[-0.035em]"
      >
        {project.title}
      </h3>
      <p className="mt-3 text-small text-muted md:hidden">
        {project.tag}, {project.year}. {project.role}.
      </p>
      <p className="mt-5 max-w-[48ch] text-body text-ink">
        {project.description}
      </p>
      <dl className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {project.metrics.map((metric) => (
          <div key={metric._key} className="flex flex-col-reverse gap-1">
            <dt className="text-small text-muted">{metric.label}</dt>
            <dd
              className={[
                "font-display text-body font-bold tabular-nums",
                "text-ink",
              ].join(" ")}
            >
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-small">
        <li>
          {project.liveUrl ? (
            <ProjectLink href={project.liveUrl}>Live site</ProjectLink>
          ) : (
            <PrivateNote>Internal tool, no public link</PrivateNote>
          )}
        </li>
        <li>
          {project.repoUrl ? (
            <ProjectLink href={project.repoUrl}>Source</ProjectLink>
          ) : (
            <PrivateNote>Private repository</PrivateNote>
          )}
        </li>
      </ul>
    </article>
  );
}

/** Props for {@link ProjectLink}. */
interface ProjectLinkProps {
  href: string;
  children: string;
}

/** An outbound project link with an arrow that nudges on hover. */
function ProjectLink({ href, children }: ProjectLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[
        "group inline-flex min-h-11 items-center gap-1 font-display",
        "font-bold text-ink underline decoration-tint decoration-2",
        "underline-offset-4 transition-colors hover:text-accent",
      ].join(" ")}
    >
      {children}
      <ArrowUpRight
        aria-hidden
        className={[
          "size-4 transition-transform duration-150",
          "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
        ].join(" ")}
      />
    </a>
  );
}

/** Props for {@link PrivateNote}. */
interface PrivateNoteProps {
  children: string;
}

/** Shown in place of a link that cannot be public. */
function PrivateNote({ children }: PrivateNoteProps) {
  return (
    <span className="inline-flex min-h-11 items-center gap-1.5 text-muted">
      <Lock aria-hidden className="size-3.5" />
      {children}
    </span>
  );
}
