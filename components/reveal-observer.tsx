'use client'

import { useEffect } from 'react'

/**
 * Adds `is-in` to every `[data-reveal]` element the first time it enters
 * the viewport. Renders nothing.
 */
export function RevealObserver () {
	useEffect(() => {
		const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

		if (!('IntersectionObserver' in window)) {
			elements.forEach((element) => element.classList.add('is-in'))
			return
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return
					entry.target.classList.add('is-in')
					observer.unobserve(entry.target)
				})
			},
			{ rootMargin: '0px 0px -8% 0px' },
		)

		elements.forEach((element) => observer.observe(element))

		return () => observer.disconnect()
	}, [])

	return null
}
