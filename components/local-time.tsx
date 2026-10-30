'use client'

import { useEffect, useState } from 'react'

const FORMAT = new Intl.DateTimeFormat('en-GB', {
	hour: '2-digit',
	minute: '2-digit',
	timeZone: 'Asia/Ho_Chi_Minh',
})

/** The current time in Vietnam, refreshed every thirty seconds. */
export function LocalTime () {
	const [time, setTime] = useState<string | null>(null)

	useEffect(() => {
		const update = () => setTime(FORMAT.format(new Date()))
		const first = window.setTimeout(update, 0)
		const interval = window.setInterval(update, 30_000)

		return () => {
			window.clearTimeout(first)
			window.clearInterval(interval)
		}
	}, [])

	return <span className='tabular-nums'>{time ?? 'GMT+7'}</span>
}
