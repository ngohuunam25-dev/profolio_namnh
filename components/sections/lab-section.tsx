'use client'

import { useState } from 'react'
import { DurationLab } from '@/components/lab/duration-lab'
import { Button } from '@/components/ui/button'
import { revealDelay } from '@/lib/utils'

/**
 * Section 4: Micro-Interactions & Lab Experiments
 * Layout Family: Interactive Bento Cells
 */
export function LabSection () {
	const [activeTab, setActiveTab] = useState<'button' | 'toggle' | 'badge'>('button')
	const [holdProgress, setHoldProgress] = useState(0)
	const [isHolding, setIsHolding] = useState(false)
	const [holdTriggered, setHoldTriggered] = useState(false)
	const [switchActive, setSwitchActive] = useState(false)

	const startHold = () => {
		setIsHolding(true)
		setHoldTriggered(false)
		let p = 0
		const interval = setInterval(() => {
			p += 5
			if (p >= 100) {
				clearInterval(interval)
				setHoldProgress(100)
				setIsHolding(false)
				setHoldTriggered(true)
			} else {
				setHoldProgress(p)
			}
		}, 30)
		const stopHold = () => {
			clearInterval(interval)
			setIsHolding(false)
			setHoldProgress(0)
			window.removeEventListener('mouseup', stopHold)
			window.removeEventListener('touchend', stopHold)
		}
		window.addEventListener('mouseup', stopHold)
		window.addEventListener('touchend', stopHold)
	}

	return (
		<section
			id='lab'
			aria-labelledby='lab-title'
			className='px-(--margin) py-24 md:py-40 bg-bg'
		>
			<div className='grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-6'>
				<h2
					id='lab-title'
					data-reveal
					className='font-display text-head font-bold tracking-[-0.035em] md:col-span-6'
				>
					Micro-interactions and lab experiments
				</h2>
				<p
					data-reveal
					style={revealDelay(1)}
					className='max-w-[44ch] text-body md:col-span-5 md:col-start-7 text-muted'
				>
					Every interaction is crafted with intent. We measure tactile feedback, transition curves, and keyboard behavior down to individual frames.
				</p>
			</div>

			<div className='mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6'>
				{/* Primary Live Experiment Bento Cell (7 columns) */}
				<div
					data-reveal
					style={revealDelay(2)}
					className='lg:col-span-7 bg-surface p-8 md:p-10 flex flex-col justify-between'
				>
					<DurationLab />
				</div>

				{/* Secondary Interactive Bento Cells (5 columns) */}
				<div
					data-reveal
					style={revealDelay(3)}
					className='lg:col-span-5 flex flex-col gap-6'
				>
					{/* Cell 1: Destructive Hold Button */}
					<div className='bg-surface p-8 flex flex-col justify-between min-h-[220px]'>
						<div>
							<h3 className='font-display text-lead font-bold tracking-[-0.02em] text-ink'>
								Tactile hold interaction
							</h3>
							<p className='mt-2 text-small text-muted'>
								Press and hold to confirm high-impact actions. Prevents accidental destructive events.
							</p>
						</div>
						<div className='mt-6 flex items-center gap-4'>
							<button
								type='button'
								onMouseDown={startHold}
								onTouchStart={startHold}
								className='relative overflow-hidden min-h-12 px-6 font-display text-small font-bold text-on-accent bg-accent select-none'
							>
								<span
									className='absolute inset-0 bg-ink transition-all ease-linear'
									style={{ width: `${holdProgress}%` }}
								/>
								<span className='relative z-10'>
									{holdTriggered ? 'Confirmed' : isHolding ? 'Holding...' : 'Hold to execute'}
								</span>
							</button>
							<span className='text-small tabular-nums text-muted'>
								{holdProgress}%
							</span>
						</div>
					</div>

					{/* Cell 2: Micro Switch & Haptic states */}
					<div className='bg-surface p-8 flex flex-col justify-between min-h-[220px]'>
						<div>
							<h3 className='font-display text-lead font-bold tracking-[-0.02em] text-ink'>
								Haptic state switch
							</h3>
							<p className='mt-2 text-small text-muted'>
								Optimized tap-to-toggle with dual-tier state transition and high visual contrast.
							</p>
						</div>
						<div className='mt-6 flex items-center justify-between'>
							<span className='text-small font-medium text-ink'>
								{switchActive ? 'Status: Active' : 'Status: Idle'}
							</span>
							<button
								type='button'
								role='switch'
								aria-checked={switchActive}
								aria-label='Toggle status'
								onClick={() => setSwitchActive(!switchActive)}
								className='relative h-9 w-16 bg-surface-2 p-1 transition-colors'
							>
								<div
									className={`size-7 bg-accent transition-transform duration-200 ${
										switchActive ? 'translate-x-7 bg-ink' : 'translate-x-0'
									}`}
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
