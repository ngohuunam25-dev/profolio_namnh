'use client'

import { type CSSProperties, useState } from 'react'
import { cn } from '@/lib/utils'

const EASINGS = [
	{ key: 'linear', label: 'Linear', value: 'linear' },
	{ key: 'ease-out', label: 'Ease out', value: 'cubic-bezier(0.2, 0.7, 0.2, 1)' },
	{
		key: 'overshoot',
		label: 'Overshoot',
		value: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
	},
] as const

type EasingKey = typeof EASINGS[number]['key']

/** Describes how a duration feels, using the page's own budgets. */
function describeDuration (duration: number) {
	if (duration <= 100) return 'Reads as instant'
	if (duration <= 300) return 'Reads as responsive'
	return 'Reads as slow'
}

/**
 * The live thing of the page: set a duration and an easing, flip the
 * switch, and feel the difference between 80 ms and 400 ms.
 */
export function DurationLab () {
	const [duration, setDuration] = useState(180)
	const [easingKey, setEasingKey] = useState<EasingKey>('ease-out')
	const [isOn, setIsOn] = useState(false)

	const easing = EASINGS.find((item) => item.key === easingKey) ?? EASINGS[1]
	const motionStyle: CSSProperties = {
		transitionDuration: `${duration}ms`,
		transitionTimingFunction: easing.value,
	}

	return (
		<div className='flex h-full flex-col gap-10'>
			<div>
				<h3 className='font-display text-lead font-bold tracking-[-0.02em]'>
					Feel the duration
				</h3>
				<p className='mt-3 max-w-[44ch] text-body'>
					Set a duration and an easing, then flip the switch. Most
					people stop noticing the wait somewhere under 100 ms.
				</p>
			</div>

			<div className='flex flex-wrap items-center gap-x-10 gap-y-6'>
				<button
					type='button'
					role='switch'
					id='duration-switch'
					aria-checked={isOn}
					aria-label='Demo switch'
					onClick={() => setIsOn((value) => !value)}
					style={motionStyle}
					className={cn(
						'relative h-20 w-72 shrink-0 transition-colors',
						isOn ? 'bg-ink' : 'bg-bg',
					)}
				>
					<span
						aria-hidden
						style={motionStyle}
						className={cn(
							'absolute top-2 left-2 size-16 transition-[transform,background-color]',
							isOn ? 'translate-x-52 bg-bg' : 'translate-x-0 bg-ink',
						)}
					/>
				</button>
				<p aria-live='polite'>
					<output
						htmlFor='duration-range'
						className='block font-display text-lead font-bold tabular-nums'
					>
						{duration} ms, {easing.label.toLowerCase()}
					</output>
					<span className='text-small text-muted'>
						{describeDuration(duration)}
					</span>
				</p>
			</div>

			<div className='mt-auto grid gap-6 sm:grid-cols-2'>
				<label className='flex flex-col gap-2' htmlFor='duration-range'>
					<span className='text-small text-muted'>Duration</span>
					<input
						id='duration-range'
						type='range'
						min={40}
						max={600}
						step={20}
						value={duration}
						onChange={(event) => setDuration(Number(event.target.value))}
						className='h-11 w-full cursor-pointer accent-(--accent)'
					/>
				</label>
				<fieldset className='flex flex-col gap-2'>
					<legend className='mb-2 text-small text-muted'>Easing</legend>
					<div className='flex gap-1 bg-bg p-1'>
						{EASINGS.map((item) => (
							<button
								key={item.key}
								type='button'
								aria-pressed={item.key === easingKey}
								onClick={() => setEasingKey(item.key)}
								className={cn(
									'min-h-10 flex-1 px-2 font-display text-small font-bold',
									'transition-colors duration-150',
									item.key === easingKey
										? 'bg-ink text-bg'
										: 'text-muted hover:text-ink',
								)}
							>
								{item.label}
							</button>
						))}
					</div>
				</fieldset>
			</div>
		</div>
	)
}
