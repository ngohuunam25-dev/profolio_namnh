import { GitCommit, Tag } from 'lucide-react'
import Image from 'next/image'
import { JOURNEY, JOURNEY_IMAGE } from '@/lib/content'
import { revealDelay } from '@/lib/utils'

/**
 * Section 6: Engineering Journey
 * Layout Family: Linear Audit Trail / Commit-style Log
 */
export function JourneySection () {
	return (
		<section
			id='journey'
			aria-labelledby='journey-title'
			className='px-(--margin) py-24 md:py-40 bg-bg'
		>
			<div className='grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-6'>
				<h2
					id='journey-title'
					data-reveal
					className='font-display text-head font-bold tracking-[-0.035em] md:col-span-6'
				>
					Engineering journey
				</h2>
				<p
					data-reveal
					style={revealDelay(1)}
					className='max-w-[44ch] text-body md:col-span-5 md:col-start-7 text-muted'
				>
					A linear changelog of roles, architectural migrations, and production releases. Ordered newest first.
				</p>
			</div>

			<div className='mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
				{/* Audit Trail / Git Log (8 columns) */}
				<div className='lg:col-span-8 flex flex-col'>
					{JOURNEY.map((entry, idx) => (
						<article
							key={entry._id}
							data-reveal
							style={revealDelay((idx % 3) + 1)}
							className='relative pl-8 pb-12 border-l-2 border-surface last:border-transparent last:pb-0'
						>
							{/* Node dot */}
							<div className='absolute -left-[9px] top-1.5 size-4 bg-accent' />

							{/* Header meta */}
							<div className='flex flex-wrap items-center gap-3 text-small'>
								<code className='bg-surface px-2 py-0.5 text-ink font-semibold'>
									{entry.commit}
								</code>
								<span className='font-display font-bold text-accent uppercase text-[0.75rem] tracking-wider bg-surface px-2 py-0.5'>
									{entry.tag}
								</span>
								<time dateTime={entry.dateTime} className='text-muted'>
									{entry.date}
								</time>
							</div>

							{/* Title & Description */}
							<h3 className='mt-3 font-display text-lead font-bold tracking-[-0.02em] text-ink'>
								{entry.title}
							</h3>
							<p className='mt-2 max-w-[56ch] text-body text-muted'>
								{entry.description}
							</p>

							{/* Metrics if present */}
							{entry.metrics.length > 0 && (
								<div className='mt-4 flex flex-wrap gap-4'>
									{entry.metrics.map((m) => (
										<div
											key={m._key}
											className='bg-surface px-3 py-1.5 flex items-center gap-2 text-small'
										>
											<span className='text-muted'>{m.label}:</span>
											<span className='font-bold text-ink tabular-nums'>{m.value}</span>
										</div>
									))}
								</div>
							)}
						</article>
					))}
				</div>

				{/* Side portrait / Journey context (4 columns) */}
				<div
					data-reveal
					style={revealDelay(2)}
					className='lg:col-span-4 sticky top-24 hidden lg:block'
				>
					<div className='relative aspect-square w-full overflow-hidden bg-surface'>
						<Image
							src={JOURNEY_IMAGE.url}
							alt={JOURNEY_IMAGE.alt}
							fill
							sizes='33vw'
							className='object-cover'
						/>
					</div>
					<div className='mt-4 p-4 bg-surface'>
						<span className='font-display text-small font-bold text-ink block'>
							Production Proven
						</span>
						<p className='mt-1 text-small text-muted'>
							Iterative frontend engineering with strict semantic commits and verifiable milestones.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
