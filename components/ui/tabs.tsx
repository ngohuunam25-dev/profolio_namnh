'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

/** Root of a tab set (Radix Tabs). */
export function Tabs (props: ComponentProps<typeof TabsPrimitive.Root>) {
	return <TabsPrimitive.Root {...props} />
}

/** The row of triggers. */
export function TabsList ({
	className,
	...props
}: ComponentProps<typeof TabsPrimitive.List>) {
	return (
		<TabsPrimitive.List
			className={cn('flex gap-1 bg-surface p-1', className)}
			{...props}
		/>
	)
}

/** One trigger; the active one takes the ground colour. */
export function TabsTrigger ({
	className,
	...props
}: ComponentProps<typeof TabsPrimitive.Trigger>) {
	return (
		<TabsPrimitive.Trigger
			className={cn(
				'min-h-11 px-4 font-display text-small font-bold text-muted',
				'transition-colors duration-150 hover:text-ink',
				'data-[state=active]:bg-bg data-[state=active]:text-ink',
				className,
			)}
			{...props}
		/>
	)
}

/** The panel shown for the active trigger. */
export function TabsContent ({
	className,
	...props
}: ComponentProps<typeof TabsPrimitive.Content>) {
	return <TabsPrimitive.Content className={cn(className)} {...props} />
}
