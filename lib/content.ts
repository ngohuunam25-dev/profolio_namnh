/**
 * Mock content for the portfolio, shaped like the Sanity documents the
 * page will query later. Field names match the planned schema so the
 * components can switch from these constants to GROQ results unchanged.
 */

/** A Sanity slug object. */
export interface SanitySlug {
	_type: 'slug'
	current: string
}

/** An image reference, resolved to a URL as the image pipeline would. */
export interface SanityImage {
	_type: 'image'
	url: string
	alt: string
	width: number
	height: number
}

/** One measured result attached to a document. */
export interface Metric {
	_key: string
	label: string
	value: string
}

/**
 * The fields every work document shares: projects, roles in the journey
 * and open source packages.
 */
export interface WorkDocument {
	_id: string
	title: string
	slug: SanitySlug
	tag: string
	metrics: Metric[]
	description: string
	coverImage: SanityImage | null
	repoUrl: string | null
	liveUrl: string | null
}

/** A selected project shown in the work section. */
export interface Project extends WorkDocument {
	_type: 'project'
	year: number
	role: string
	coverImage: SanityImage
}

/** One entry of the engineering journey, written as a commit. */
export interface JourneyEntry extends WorkDocument {
	_type: 'journeyEntry'
	commit: string
	scope: string
	date: string
	dateTime: string
}

/** A published open source package. */
export interface OpenSourcePackage extends WorkDocument {
	_type: 'openSourcePackage'
	install: string
}

/** One budget in the principles section. */
export interface Budget {
	_key: string
	label: string
	value: string
}

/** One row of the technical arsenal. */
export interface ArsenalRow {
	_key: string
	domain: string
	daily: string[]
	shipped: string[]
	exploring: string[]
}

/** A group of arsenal rows. */
export interface ArsenalGroup {
	_key: string
	title: string
	rows: ArsenalRow[]
}

const PICSUM = 'https://picsum.photos/id'

/**
 * Builds a Picsum URL for a fixed photograph at an exact crop, in the
 * page's one treatment (greyscale).
 */
function picsum (id: number, width: number, height: number) {
	return `${PICSUM}/${id}/${width}/${height}?grayscale`
}

export const CONTACT_EMAIL = 'hello@namnh.dev'

export const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
	'Frontend role for NamNH',
)}&body=${encodeURIComponent(
	'Hi Nam,\n\nWe are hiring for a frontend role and would like to talk.\n',
)}`

export const SOCIAL_LINKS = [
	{ _key: 'github', label: 'GitHub', href: 'https://github.com/namnh' },
	{
		_key: 'linkedin',
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/namnh',
	},
	{ _key: 'readcv', label: 'Read.cv', href: 'https://read.cv/namnh' },
]

export const HERO_IMAGE: SanityImage = {
	_type: 'image',
	url: picsum(1081, 900, 1600),
	alt: 'Stepped white building corner rising into a pale sky',
	width: 900,
	height: 1600,
}

export const PRINCIPLES_IMAGE: SanityImage = {
	_type: 'image',
	url: picsum(893, 1000, 1000),
	alt: 'Curved latticed facade forming sweeping lines',
	width: 1000,
	height: 1000,
}

export const ARSENAL_IMAGE: SanityImage = {
	_type: 'image',
	url: picsum(193, 880, 1100),
	alt: 'Stone college building facing a striped lawn',
	width: 880,
	height: 1100,
}

export const JOURNEY_IMAGE: SanityImage = {
	_type: 'image',
	url: picsum(859, 600, 600),
	alt: 'Brick facade with shuttered windows and a cream door',
	width: 600,
	height: 600,
}

export const BUDGETS: Budget[] = [
	{ _key: 'input', label: 'Input feedback', value: 'under 100 ms' },
	{ _key: 'motion', label: 'Motion duration', value: '150 to 300 ms' },
	{ _key: 'js', label: 'First-load JavaScript', value: '90 kB a route' },
	{ _key: 'lcp', label: 'Largest paint on 4G', value: 'under 1.8 s' },
	{ _key: 'cls', label: 'Layout shift', value: '0.05 or less' },
	{ _key: 'a11y', label: 'Accessibility', value: 'WCAG 2.2 AA' },
	{ _key: 'types', label: 'Type safety', value: 'strict, no any' },
	{ _key: 'rsc', label: 'Components', value: 'server by default' },
]

export const PROJECTS: Project[] = [
	{
		_id: 'project.ledgerline',
		_type: 'project',
		title: 'Ledgerline',
		slug: { _type: 'slug', current: 'ledgerline' },
		tag: 'Fintech dashboard',
		year: 2026,
		role: 'Lead frontend',
		description:
			'A portfolio analytics dashboard rebuilt on the App Router. ' +
			'Server components stream the heavy tables while charts ' +
			'hydrate on demand, so traders read numbers before spinners.',
		metrics: [
			{ _key: 'lcp', label: 'Largest paint', value: '3.4 s to 1.1 s' },
			{ _key: 'js', label: 'Client JavaScript', value: '412 to 138 kB' },
			{ _key: 'inp', label: 'Interaction delay', value: '280 to 72 ms' },
		],
		coverImage: {
			_type: 'image',
			url: picsum(942, 1200, 1500),
			alt: 'Angular white concrete building against a black sky',
			width: 1200,
			height: 1500,
		},
		repoUrl: null,
		liveUrl: 'https://ledgerline.example',
	},
	{
		_id: 'project.fieldnote',
		_type: 'project',
		title: 'Fieldnote',
		slug: { _type: 'slug', current: 'fieldnote' },
		tag: 'Editorial platform',
		year: 2025,
		role: 'Frontend engineer',
		description:
			'A long-form magazine on Sanity with incremental regeneration. ' +
			'Editors preview drafts in place, and every article hero ' +
			'reserves its space, so nothing jumps while it loads.',
		metrics: [
			{ _key: 'cls', label: 'Layout shift', value: '0.21 to 0.00' },
			{ _key: 'publish', label: 'Draft to live', value: '15 min to 40 s' },
			{ _key: 'a11y', label: 'Accessibility score', value: '100' },
		],
		coverImage: {
			_type: 'image',
			url: picsum(315, 1200, 1500),
			alt: 'Looking up a dark lightwell towards a bright sky',
			width: 1200,
			height: 1500,
		},
		repoUrl: 'https://github.com/namnh/fieldnote',
		liveUrl: 'https://fieldnote.example',
	},
	{
		_id: 'project.tactile',
		_type: 'project',
		title: 'Tactile',
		slug: { _type: 'slug', current: 'tactile' },
		tag: 'Component registry',
		year: 2025,
		role: 'Author and maintainer',
		description:
			'A shadcn-style registry of Radix components with motion ' +
			'tokens built in. Teams copy the source instead of installing ' +
			'a package, and keep full control of every element.',
		metrics: [
			{ _key: 'count', label: 'Components', value: '38' },
			{ _key: 'size', label: 'Median size', value: '1.4 kB' },
			{ _key: 'keys', label: 'Keyboard paths tested', value: 'all' },
		],
		coverImage: {
			_type: 'image',
			url: picsum(101, 1200, 1500),
			alt: 'Concrete building with deep window bays under a pale sky',
			width: 1200,
			height: 1500,
		},
		repoUrl: 'https://github.com/namnh/tactile',
		liveUrl: 'https://tactile.example',
	},
	{
		_id: 'project.transit-board',
		_type: 'project',
		title: 'Transit Board',
		slug: { _type: 'slug', current: 'transit-board' },
		tag: 'Realtime interface',
		year: 2024,
		role: 'Frontend engineer',
		description:
			'A live departures board for bus stations, fed by server-sent ' +
			'events. Rows reorder with layout animations that hold 60 ' +
			'frames a second on a low-cost TV stick.',
		metrics: [
			{ _key: 'latency', label: 'Update latency', value: '1.2 s' },
			{ _key: 'frame', label: 'Frame budget', value: '16 ms' },
			{ _key: 'screens', label: 'Screens running', value: '24' },
		],
		coverImage: {
			_type: 'image',
			url: picsum(951, 1200, 1500),
			alt: 'Facade of rectangular panels in a strict grid',
			width: 1200,
			height: 1500,
		},
		repoUrl: null,
		liveUrl: null,
	},
]

export const ARSENAL: ArsenalGroup[] = [
	{
		_key: 'build',
		title: 'Building the interface',
		rows: [
			{
				_key: 'framework',
				domain: 'Framework',
				daily: ['Next.js App Router', 'React 19'],
				shipped: ['Remix', 'Astro'],
				exploring: ['React Compiler'],
			},
			{
				_key: 'language',
				domain: 'Language',
				daily: ['TypeScript, strict'],
				shipped: ['Node.js', 'Zod'],
				exploring: ['Effect'],
			},
			{
				_key: 'styling',
				domain: 'Styling',
				daily: ['Tailwind CSS', 'CSS variables'],
				shipped: ['CSS Modules', 'vanilla-extract'],
				exploring: ['View Transitions API'],
			},
			{
				_key: 'components',
				domain: 'Components',
				daily: ['shadcn/ui', 'Radix primitives'],
				shipped: ['React Aria', 'Headless UI'],
				exploring: ['Base UI'],
			},
		],
	},
	{
		_key: 'behaviour',
		title: 'Making it behave',
		rows: [
			{
				_key: 'motion',
				domain: 'Motion',
				daily: ['CSS transitions', 'Motion for React'],
				shipped: ['GSAP'],
				exploring: ['Scroll-driven animations'],
			},
			{
				_key: 'state',
				domain: 'State and data',
				daily: ['Server Actions', 'TanStack Query'],
				shipped: ['Redux Toolkit', 'Zustand'],
				exploring: ['Local-first sync'],
			},
			{
				_key: 'content',
				domain: 'Content',
				daily: ['Sanity', 'GROQ'],
				shipped: ['MDX', 'Contentful'],
				exploring: ['Sanity Live Content API'],
			},
		],
	},
	{
		_key: 'confidence',
		title: 'Shipping with confidence',
		rows: [
			{
				_key: 'quality',
				domain: 'Testing',
				daily: ['Vitest', 'Testing Library'],
				shipped: ['Playwright', 'Storybook'],
				exploring: ['Visual regression in CI'],
			},
			{
				_key: 'tooling',
				domain: 'Tooling',
				daily: ['pnpm', 'ESLint', 'Vercel'],
				shipped: ['Turborepo', 'GitHub Actions'],
				exploring: ['Biome'],
			},
		],
	},
]

export const JOURNEY: JourneyEntry[] = [
	{
		_id: 'journey.lead-fintech',
		_type: 'journeyEntry',
		commit: '9c1e4a7',
		tag: 'feat',
		scope: 'role',
		title: 'lead frontend on a fintech analytics team',
		slug: { _type: 'slug', current: 'lead-fintech' },
		date: 'Sep 2026',
		dateTime: '2026-09',
		description:
			'Own the dashboard surface for a team of six. Introduced ' +
			'budgets to the pull request template and a weekly field data ' +
			'review.',
		metrics: [{ _key: 'team', label: 'Team', value: '6 engineers' }],
		coverImage: null,
		repoUrl: null,
		liveUrl: null,
	},
	{
		_id: 'journey.perf-dashboard',
		_type: 'journeyEntry',
		commit: '5b20d3f',
		tag: 'perf',
		scope: 'dashboard',
		title: 'cut client JavaScript by two thirds',
		slug: { _type: 'slug', current: 'perf-dashboard' },
		date: 'Mar 2026',
		dateTime: '2026-03',
		description:
			'Moved data tables to server components and lazy-loaded the ' +
			'chart engine. First-load JavaScript went from 412 kB to 138 kB.',
		metrics: [{ _key: 'js', label: 'Saved', value: '274 kB' }],
		coverImage: null,
		repoUrl: null,
		liveUrl: 'https://ledgerline.example',
	},
	{
		_id: 'journey.oss-tactile',
		_type: 'journeyEntry',
		commit: 'e81a6c0',
		tag: 'feat',
		scope: 'oss',
		title: 'publish Tactile, a copy-paste component registry',
		slug: { _type: 'slug', current: 'oss-tactile' },
		date: 'Aug 2025',
		dateTime: '2025-08',
		description:
			'Released the registry with motion tokens and keyboard tests ' +
			'for every component. Written so the source reads as its own ' +
			'documentation.',
		metrics: [{ _key: 'count', label: 'Components', value: '38' }],
		coverImage: null,
		repoUrl: 'https://github.com/namnh/tactile',
		liveUrl: 'https://tactile.example',
	},
	{
		_id: 'journey.app-router',
		_type: 'journeyEntry',
		commit: '3fd94b2',
		tag: 'refactor',
		scope: 'stack',
		title: 'move a 40-route app from Pages to App Router',
		slug: { _type: 'slug', current: 'app-router' },
		date: 'Jan 2025',
		dateTime: '2025-01',
		description:
			'Migrated route by route behind a proxy, with no freeze on ' +
			'feature work. Layout-level data fetching removed most of the ' +
			'client waterfalls.',
		metrics: [{ _key: 'routes', label: 'Routes', value: '40' }],
		coverImage: null,
		repoUrl: null,
		liveUrl: null,
	},
	{
		_id: 'journey.studio',
		_type: 'journeyEntry',
		commit: '1a7c5e9',
		tag: 'feat',
		scope: 'role',
		title: 'join a product studio as frontend engineer',
		slug: { _type: 'slug', current: 'studio' },
		date: 'Jun 2024',
		dateTime: '2024-06',
		description:
			'Shipped marketing sites and a realtime transit board for ' +
			'clients. Learned to design in the browser next to designers.',
		metrics: [{ _key: 'shipped', label: 'Launches', value: '9' }],
		coverImage: null,
		repoUrl: null,
		liveUrl: null,
	},
	{
		_id: 'journey.init',
		_type: 'journeyEntry',
		commit: '0c33f18',
		tag: 'chore',
		scope: 'init',
		title: 'start Software Engineering at FPT University',
		slug: { _type: 'slug', current: 'init' },
		date: 'Sep 2022',
		dateTime: '2022-09',
		description:
			'First React project in the first semester: a timetable that ' +
			'my classmates still use to find free rooms.',
		metrics: [],
		coverImage: null,
		repoUrl: null,
		liveUrl: null,
	},
]

export const PACKAGES: OpenSourcePackage[] = [
	{
		_id: 'package.hold-button',
		_type: 'openSourcePackage',
		title: 'HoldButton',
		slug: { _type: 'slug', current: 'hold-button' },
		tag: 'Component',
		install: 'npx shadcn add @tactile/hold-button',
		description:
			'A press-and-hold button for destructive actions. It works ' +
			'with a pointer, a thumb and the keyboard, and announces its ' +
			'state to screen readers.',
		metrics: [
			{ _key: 'size', label: 'Size', value: '1.1 kB' },
			{ _key: 'deps', label: 'Dependencies', value: 'none' },
		],
		coverImage: null,
		repoUrl: 'https://github.com/namnh/tactile',
		liveUrl: 'https://tactile.example/hold-button',
	},
	{
		_id: 'package.use-budget',
		_type: 'openSourcePackage',
		title: 'useBudget',
		slug: { _type: 'slug', current: 'use-budget' },
		tag: 'Hook',
		install: 'npx shadcn add @tactile/use-budget',
		description:
			'Logs a warning in development when an interaction misses its ' +
			'millisecond budget.',
		metrics: [],
		coverImage: null,
		repoUrl: 'https://github.com/namnh/tactile',
		liveUrl: null,
	},
	{
		_id: 'package.sanity-cover',
		_type: 'openSourcePackage',
		title: 'sanity-cover',
		slug: { _type: 'slug', current: 'sanity-cover' },
		tag: 'Utility',
		install: 'npm i sanity-cover',
		description:
			'Turns a Sanity image field into next/image props with the ' +
			'hotspot respected.',
		metrics: [],
		coverImage: null,
		repoUrl: 'https://github.com/namnh/sanity-cover',
		liveUrl: null,
	},
]
