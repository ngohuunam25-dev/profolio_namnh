import Image from 'next/image'
import { ARSENAL, ARSENAL_IMAGE } from '@/lib/content'
import { revealDelay } from '@/lib/utils'

/**
 * Section 5: Technical Arsenal
 * Layout Family: Hierarchical Taxonomy Matrix
 */
export function ArsenalSection () {
	return (
		<section
			id='arsenal'
			aria-labelledby='arsenal-title'
			className='px-(--margin) py-24 md:py-40 bg-surface'
		>
			<div className='grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-6'>
				<h2
					id='arsenal-title'
					data-reveal
					className='font-display text-head font-bold tracking-[-0.035em] md:col-span-6'
				>
					Technical arsenal
				</h2>
				<p
					data-reveal
					style={revealDelay(1)}
					className='max-w-[44ch] text-body md:col-span-5 md:col-start-7 text-muted'
				>
					Categorized by operational depth rather than inflated skill bars. Tools selected for durability, type safety, and runtime speed.
				</p>
			</div>

			<div className='mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
				{/* Taxonomy Matrix (8 columns) */}
				<div className='lg:col-span-8 flex flex-col gap-12'>
					{ARSENAL.map((group, groupIdx) => (
						<div
							key={group._key}
							data-reveal
							style={revealDelay(groupIdx + 1)}
							className='bg-bg p-8 flex flex-col gap-6'
						>
							<h3 className='font-display text-lead font-bold tracking-[-0.02em] text-ink border-b-2 border-surface pb-3'>
								{group.title}
							</h3>

							<div className='flex flex-col gap-6'>
								{group.rows.map((row) => (
									<div
										key={row._key}
										className='grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline'
									>
										<span className='sm:col-span-3 font-display text-small font-bold text-ink'>
											{row.domain}
										</span>
										
										<div className='sm:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-2 text-small'>
											<div className='bg-surface p-2.5 flex flex-col gap-1'>
												<span className='text-muted text-[0.75rem] uppercase font-bold tracking-wider'>Daily</span>
												<span className='text-ink font-medium'>{row.daily.join(', ')}</span>
											</div>
											<div className='bg-surface p-2.5 flex flex-col gap-1'>
												<span className='text-muted text-[0.75rem] uppercase font-bold tracking-wider'>Shipped</span>
												<span className='text-ink font-medium'>{row.shipped.join(', ')}</span>
											</div>
											<div className='bg-surface p-2.5 flex flex-col gap-1'>
												<span className='text-muted text-[0.75rem] uppercase font-bold tracking-wider'>Exploring</span>
												<span className='text-ink font-medium'>{row.exploring.join(', ')}</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Visual Context Photo Slot (4 columns) */}
				<div
					data-reveal
					style={revealDelay(3)}
					className='lg:col-span-4 sticky top-24 hidden lg:block'
				>
					<div className='relative aspect-[3/4] w-full overflow-hidden bg-bg'>
						<Image
							src={ARSENAL_IMAGE.url}
							alt={ARSENAL_IMAGE.alt}
							fill
							sizes='33vw'
							className='object-cover'
						/>
					</div>
					<p className='mt-4 text-small text-muted'>
						Structured architectural layers ensure component reliability and predictable bundle footprints.
					</p>
				</div>
			</div>
		</section>
	)
}
