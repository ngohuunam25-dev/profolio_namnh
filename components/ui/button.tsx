import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
	[
		'inline-flex min-h-12 items-center justify-center gap-2 px-6',
		'font-display text-small font-bold whitespace-nowrap',
		'transition-[transform,background-color,color] duration-150',
		'ease-out active:scale-[0.97] disabled:pointer-events-none',
		'disabled:opacity-50 focus-visible:outline-offset-4',
		'[&_svg]:size-4 [&_svg]:shrink-0',
	],
	{
		variants: {
			variant: {
				primary: 'bg-accent text-on-accent hover:bg-ink hover:text-bg',
				outline: [
					'border-2 border-current text-ink',
					'hover:bg-ink hover:text-bg',
				],
				ghost: 'text-ink hover:bg-surface',
			},
		},
		defaultVariants: {
			variant: 'primary',
		},
	},
)

/** Props for {@link Button}. */
export interface ButtonProps
	extends ComponentProps<'button'>,
	VariantProps<typeof buttonVariants> {
	/** Render the child element (a link, usually) with button styles. */
	asChild?: boolean
}

/**
 * The page's one button shape: flat, square-cornered, 48px tall.
 *
 * @example
 * <Button asChild><a href='#work'>See selected work</a></Button>
 */
export function Button ({
	className,
	variant,
	asChild = false,
	...props
}: ButtonProps) {
	const Component = asChild ? Slot : 'button'

	return (
		<Component
			className={cn(buttonVariants({ variant }), className)}
			{...props}
		/>
	)
}
