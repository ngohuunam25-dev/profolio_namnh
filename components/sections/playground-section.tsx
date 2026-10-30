import { ArrowUpRight, Copy, Terminal } from 'lucide-react'
import { PACKAGES } from '@/lib/content'
import { revealDelay } from '@/lib/utils'

/**
 * Section 7: Open Source & Code Playground
 * Layout Family: Dual-Column Code Spec
 */
export function PlaygroundSection () {
	return (
		<section
			id='playground'
			aria-labelledby='playground-title'
			className='px-(--margin) py-24 md:py-40 bg-surface'
		>
			<div className='grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-6'>
				<h2
					id='playground-title'
					data-reveal
					className='font-display text-head font-bold tracking-[-0.035em] md:col-span-6'
				>
					Open source and component spec
				</h2>
				<p
					data-reveal
					style={revealDelay(1)}
					className='max-w-[44ch] text-body md:col-span-5 md:col-start-7 text-muted'
				>
					Modular utilities and accessible component primitives modeled as copyable patterns rather than monolithic npm dependencies.
				</p>
			</div>

			<div className='mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12'>
				{/* Column 1: Package Specifications (5 columns) */}
				<div className='lg:col-span-5 flex flex-col gap-6'>
					{PACKAGES.map((pkg, idx) => (
						<article
							key={pkg._id}
							data-reveal
							style={revealDelay(idx + 1)}
							className='bg-bg p-6 flex flex-col justify-between gap-4'
						>
							<div>
								<div className='flex items-center justify-between'>
									<span className='font-display font-bold text-accent text-[0.75rem] uppercase tracking-wider bg-surface px-2 py-0.5'>
										{pkg.tag}
									</span>
									{pkg.repoUrl && (
										<a
											href={pkg.repoUrl}
											target='_blank'
											rel='noreferrer'
											className='inline-flex items-center gap-1 text-small font-bold text-ink hover:text-accent'
										>
											Source
											<ArrowUpRight className='size-3.5' />
										</a>
									)}
								</div>

								<h3 className='mt-3 font-display text-lead font-bold tracking-[-0.02em] text-ink'>
									{pkg.title}
								</h3>
								<p className='mt-2 text-small text-muted'>
									{pkg.description}
								</p>
							</div>

							<div className='mt-2 pt-4 border-t-2 border-surface'>
								<span className='text-[0.75rem] uppercase text-muted font-bold block mb-1'>Installation</span>
								<pre className='bg-surface p-2.5 text-[0.8125rem] text-ink overflow-x-auto'>
									<code>{pkg.install}</code>
								</pre>
							</div>
						</article>
					))}
				</div>

				{/* Column 2: Live Code Playground / Implementation Spec (7 columns) */}
				<div
					data-reveal
					style={revealDelay(2)}
					className='lg:col-span-7 bg-inverse text-inverse-ink p-8 flex flex-col justify-between'
				>
					<div>
						<div className='flex items-center justify-between border-b border-surface/20 pb-4'>
							<div className='flex items-center gap-2'>
								<Terminal className='size-4 text-tint' />
								<span className='font-display text-small font-bold text-inverse-ink'>
									hold-button.tsx (Radix Primitive Pattern)
								</span>
							</div>
							<span className='text-[0.75rem] text-tint uppercase tracking-wider font-bold'>
								TypeScript strict
							</span>
						</div>

						<pre className='mt-6 text-[0.8125rem] leading-relaxed text-inverse-muted overflow-x-auto font-mono'>
							<code>{`import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface HoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onHoldComplete?: () => void
  holdDuration?: number
  asChild?: boolean
}

export const HoldButton = React.forwardRef<HTMLButtonElement, HoldButtonProps>(
  ({ onHoldComplete, holdDuration = 1000, asChild = false, children, ...props }, ref) => {
    const [progress, setProgress] = React.useState(0)
    const timerRef = React.useRef<NodeJS.Timeout | null>(null)

    const start = () => {
      const step = 20
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timerRef.current!)
            onHoldComplete?.()
            return 100
          }
          return prev + (step / holdDuration) * 100
        })
      }, step)
    }

    const cancel = () => {
      if (timerRef.current) clearInterval(timerRef.current)
      setProgress(0)
    }

    return (
      <button
        ref={ref}
        onMouseDown={start}
        onMouseUp={cancel}
        onMouseLeave={cancel}
        onTouchStart={start}
        onTouchEnd={cancel}
        aria-valuenow={Math.round(progress)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
HoldButton.displayName = 'HoldButton'`}</code>
						</pre>
					</div>

					<div className='mt-8 pt-4 border-t border-surface/20 flex flex-wrap items-center justify-between text-small text-inverse-muted'>
						<span>Zero external CSS runtime dependency</span>
						<span>Full keyboard accessibility</span>
					</div>
				</div>
			</div>
		</section>
	)
}
