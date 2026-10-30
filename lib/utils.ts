import { clsx, type ClassValue } from 'clsx'
import type { CSSProperties } from 'react'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
	extend: {
		classGroups: {
			'font-size': [
				{ text: ['small', 'body', 'lead', 'head', 'monument'] },
			],
		},
	},
})

/**
 * Merges class names and resolves Tailwind conflicts, including the
 * page's custom type steps.
 */
export function cn (...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

/**
 * Returns the inline style that staggers a `data-reveal` entrance.
 *
 * @example
 * <p data-reveal style={revealDelay(2)}>Second in line</p>
 */
export function revealDelay (index: number): CSSProperties {
	return { '--i': index } as CSSProperties
}
