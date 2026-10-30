import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { HERO_IMAGE, MAILTO } from '@/lib/content'
import { revealDelay } from '@/lib/utils'

const NAV_LINKS = [
	{ href: '#work', label: 'Work' },
	{ href: '#lab', label: 'Lab' },
	{ href: '#arsenal', label: 'Arsenal' },
	{ href: '#journey', label: 'Journey' },
	{ href: '#contact', label: 'Contact' },
]

/**
 * Section 1, asymmetric editorial split. The name is cut into two halves
 * pinned to opposite corners of a nine-column panel; a full-height
 * photograph closes the last three columns.
 */
export function HeroSection () {
	return (
		<header
			id='top'
			className={[
				'relative grid grid-cols-1 bg-bg',
				'pt-[calc(11vw+3.5rem+28px)] pb-[calc(11vw+3.5rem+28px)]',
				'md:min-h-svh md:grid-cols-12 md:py-0',
			].join(' ')}
		>
			<div
				className={[
					'flex flex-col gap-10 px-(--margin)',
					'md:relative md:col-span-9 md:grid md:grid-cols-9',
					'md:grid-rows-[1fr_auto_1fr] md:gap-x-5 md:gap-y-0 md:py-7',
				].join(' ')}
			>
				<h1
					className={[
						'pointer-events-none absolute inset-x-(--margin) top-5',
						'bottom-5 flex flex-col justify-between font-display',
						'text-monument font-bold uppercase tracking-[-0.045em]',
						'text-ink md:top-7 md:bottom-7',
					].join(' ')}
				>
					<span className='block pt-[0.06em]'>Nam</span>
					<span className='block self-end'>NH</span>
				</h1>

				<nav
					aria-label='Sections'
					className={[
						'absolute top-6 right-(--margin) md:static md:col-span-2',
						'md:col-start-8 md:row-start-2 md:justify-self-end',
					].join(' ')}
				>
					<ul className='flex flex-col items-end gap-1 text-small'>
						{NAV_LINKS.map((link, index) => (
							<li
								key={link.href}
								className={index === 4 ? '' : 'hidden md:block'}
							>
								<a
									href={link.href}
									className={[
										'inline-block py-1 font-display font-bold text-ink',
										'transition-transform duration-150',
										'hover:-translate-x-1 hover:text-accent',
									].join(' ')}
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<div className='md:col-span-5 md:col-start-3 md:row-start-2'>
					<p
						data-reveal
						style={revealDelay(1)}
						className='max-w-[30ch] text-lead text-ink'
					>
						Frontend engineer building Next.js interfaces that answer
						every click within 100 ms.
					</p>
					<div
						data-reveal
						style={revealDelay(2)}
						className='mt-8 flex flex-wrap items-center gap-3'
					>
						<Button asChild>
							<a href={MAILTO} id='hero-email'>
								Email NamNH
								<ArrowUpRight aria-hidden />
							</a>
						</Button>
						<Button asChild variant='ghost'>
							<a href='#work' id='hero-work'>
								See selected work
								<ArrowDown aria-hidden />
							</a>
						</Button>
					</div>
				</div>

				<dl
					data-reveal
					style={revealDelay(3)}
					className={[
						'grid grid-cols-2 gap-x-5 text-small text-muted',
						'md:col-span-4 md:row-start-3 md:self-end',
					].join(' ')}
				>
					<div>
						<dt className='sr-only'>Location</dt>
						<dd>Based in Vietnam, GMT+7</dd>
					</div>
					<div>
						<dt className='sr-only'>Availability</dt>
						<dd>Open to frontend roles</dd>
					</div>
				</dl>
			</div>

			<div
				className={[
					'relative order-first mx-(--margin) mb-10 aspect-[4/3]',
					'overflow-hidden bg-surface md:order-none md:col-span-3',
					'md:mx-0 md:mb-0 md:aspect-auto md:min-h-svh',
				].join(' ')}
			>
				<Image
					src={HERO_IMAGE.url}
					alt={HERO_IMAGE.alt}
					fill
					preload
					sizes='(min-width: 768px) 25vw, 100vw'
					className='hero-drift object-cover'
				/>
			</div>
		</header>
	)
}
