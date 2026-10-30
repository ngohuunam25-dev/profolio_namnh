import { ArrowUpRight, Terminal } from 'lucide-react'
import { LocalTime } from '@/components/local-time'
import { CONTACT_EMAIL, MAILTO, SOCIAL_LINKS } from '@/lib/content'
import { revealDelay } from '@/lib/utils'

/**
 * Section 8: Colophon & Contact Terminal
 * Layout Family: Command Minimalist Footer
 */
export function ContactSection () {
	return (
		<footer
			id='contact'
			aria-labelledby='contact-title'
			className='px-(--margin) py-24 md:py-32 bg-inverse text-inverse-ink flex flex-col justify-between min-h-[90svh]'
		>
			<div className='grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-12 items-start'>
				{/* Main prompt & email headline */}
				<div className='md:col-span-8 flex flex-col gap-6'>
					<h2
						id='contact-title'
						data-reveal
						className='font-display text-head font-bold tracking-[-0.035em] text-inverse-ink'
					>
						Initiate collaboration
					</h2>
					<p
						data-reveal
						style={revealDelay(1)}
						className='max-w-[48ch] text-body text-inverse-muted'
					>
						Currently considering frontend roles, design system contracts, and technical leadership opportunities. Direct email inquiries receive immediate response.
					</p>

					<div data-reveal style={revealDelay(2)} className='mt-4'>
						<a
							href={MAILTO}
							id='footer-email'
							className='font-display text-[clamp(1.5rem,4.5vw,4.5rem)] font-bold text-tint hover:text-white transition-colors underline decoration-2 underline-offset-8 break-all'
						>
							{CONTACT_EMAIL}
						</a>
					</div>
				</div>

				{/* Colophon & Status Panel (4 columns) */}
				<div
					data-reveal
					style={revealDelay(2)}
					className='md:col-span-4 bg-surface/10 p-6 flex flex-col gap-4 text-small'
				>
					<div className='flex items-center gap-2 pb-3 border-b border-surface/20'>
						<Terminal className='size-4 text-tint' />
						<span className='font-display font-bold text-inverse-ink'>
							System telemetry
						</span>
					</div>

					<div className='flex flex-col gap-2 text-inverse-muted'>
						<div className='flex justify-between'>
							<span>Location:</span>
							<span className='text-inverse-ink'>Vietnam, GMT+7</span>
						</div>
						<div className='flex justify-between'>
							<span>Local time:</span>
							<span className='text-inverse-ink font-mono'>
								<LocalTime />
							</span>
						</div>
						<div className='flex justify-between'>
							<span>Framework:</span>
							<span className='text-inverse-ink'>Next.js App Router</span>
						</div>
						<div className='flex justify-between'>
							<span>Styling:</span>
							<span className='text-inverse-ink'>Tailwind CSS v4</span>
						</div>
						<div className='flex justify-between'>
							<span>Typography:</span>
							<span className='text-inverse-ink'>Libre Franklin / Source Serif</span>
						</div>
						<div className='flex justify-between'>
							<span>CMS Target:</span>
							<span className='text-inverse-ink'>Sanity Content Lake</span>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Terminal Bar with Wordmark return */}
			<div className='mt-20 pt-8 border-t border-surface/20 flex flex-col md:flex-row items-center justify-between gap-6'>
				<div className='flex items-center gap-6'>
					<span className='font-display font-bold text-lead tracking-tight text-inverse-ink'>
						NAMNH
					</span>
					<span className='text-small text-inverse-muted'>
						(c) 2026 NamNH. All rights reserved.
					</span>
				</div>

				<ul className='flex items-center gap-6 text-small font-display font-bold'>
					{SOCIAL_LINKS.map((s) => (
						<li key={s._key}>
							<a
								href={s.href}
								target='_blank'
								rel='noreferrer'
								className='inline-flex items-center gap-1 text-inverse-muted hover:text-tint transition-colors'
							>
								{s.label}
								<ArrowUpRight className='size-3.5' />
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}
