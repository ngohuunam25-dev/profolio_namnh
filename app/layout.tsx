import type { Metadata } from 'next'
import { Libre_Franklin, Source_Serif_4 } from 'next/font/google'
import './globals.css'

const libreFranklin = Libre_Franklin({
	subsets: ['latin'],
	variable: '--font-franklin',
	display: 'swap',
	weight: ['400', '600', '700'],
})

const sourceSerif4 = Source_Serif_4({
	subsets: ['latin'],
	variable: '--font-serif4',
	display: 'swap',
	weight: ['400', '600'],
})

export const metadata: Metadata = {
	title: 'NamNH | Frontend Software Engineer',
	description:
		'Personal portfolio of NamNH, frontend software engineer specializing in Next.js App Router, React, TypeScript, and micro-interactions.',
}

export default function RootLayout ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={`js ${libreFranklin.variable} ${sourceSerif4.variable}`}
		>
			<body className='bg-bg text-ink antialiased'>{children}</body>
		</html>
	)
}
