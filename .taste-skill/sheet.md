# DIRECTION SHEET ΓÇö The name as a monument
seed 404247629 ┬╖ drawn 2026-10-30 ┬╖ sector personal-portfolio ┬╖ tone editorial
Brief: NamNH, frontend engineer building Next.js App Router interfaces with precise micro-interactions

| | |
| --- | --- |
| Direction | The name as a monument |
| Hero | Name split to corners |
| Type | Libre Franklin / Source Serif 4 |
| Colour | kept from the brand |
| Sections | intro (Right-half paragraph, lone photo) ΓåÆ work (Names passing a held square) ΓåÆ showcase (Band of unequal panels) ΓåÆ list (Statement, table pushed right) ΓåÆ about (Portrait as drop cap) ΓåÆ features (Small proof beside text) ΓåÆ contact (The email as display type) |
| Motion | Pinned story |
| Photographs | the "Architecture" set, as atmosphere |

This is the direction for this build. Adopt it. Do not blend it with the layout you would have made anyway,
and do not redraw because it is unfamiliar: unfamiliar is the point. Redraw a slot only when it conflicts
with a stated brand constraint or needs an asset that does not exist, and say why in your report.

The parts of this sheet were written separately and will disagree in small ways. Settle every disagreement in this order:
**house rules** (including type no smaller than 13px and body text of 16px or more) ΓåÆ **the direction** (the idea, the composition habits, where the
one accent goes) ΓåÆ **the type system and the palette** (which face does which job, the five size steps, which colour is the ground and where the
accent goes) ΓåÆ **the hero blueprint** ΓåÆ **the section blueprints**. Under each blueprint below, "Adjusted for this page" lists where it disagrees.
In practice: take geometry from blueprints (columns, proportions, what sits where) and take everything else from above them. Map every size a
blueprint names onto one of your five type steps instead of adding a sixth. Use one button shape, one corner radius and one pair of page margins on
the whole page, whatever individual blueprints say. If a blueprint names a kind of typeface (a light serif, a heavy grotesk), use the dealt face.

## 1. The idea
The name is the headline. Set it so large that it becomes architecture: as wide as the viewport, cropped by an edge, or stacked to fill the screen. Nothing else on the first screen competes; the description of what this is drops to a single small sentence. The idea comes from treating the name's letters as material. Ask what the subject can do to its own name: a photograph of the work sits inside a counter or replaces a letter, the name repeats down the page like a reel, the letters are split to opposite corners and the page happens between them. In the study this was the single most common device among sites scoring 7.5 or more.

Before anything else, write one sentence in your notes: "On this page, <the subject's own material> becomes <the device>."
Fill the first blank from your inventory of what only this client has (its name and what it means, its street, its numbers, its
constraint), then put the nearest competitor in the sentence: if it still works, the idea is the category's, not the client's.
Then name the one live thing the visitor can do on the page (SKILL.md step 4).

## 2. Composition
First screen: the wordmark spans 88ΓÇô100% of the viewport width (font-size 16ΓÇô24vw, set with a clamp so it never wraps), anchored either to the bottom edge with its descenders nearly touching it, or dead centre with everything else pushed to the corners. One line of supporting text at 16ΓÇô20px sits in a corner on a shared margin; navigation is three or four words in the opposite corner. After the hero the page is deliberately small and calm: a narrow text column or a simple two-column grid, so the contrast with the monument holds. The name returns once more at full width as the footer, in the inverse colours. Margins are tight (20ΓÇô32px) so the type reaches the edges. Two type sizes do nearly all the work: the monument and a small text size, with one mid size for section headings.

## 3. Type ΓÇö Libre Franklin / Source Serif 4
An American gothic for headings over a sober transitional serif for reading, the pairing of a newspaper front page. Suits essays, annual reports, archives and finance pages that have real paragraphs.
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet">
```
- Display: **Libre Franklin** ΓÇö weight 700 ┬╖ tracking -0.035em ┬╖ leading 0.92 ┬╖ uppercase for the title, sentence case for section headings
- Text: **Source Serif 4** ΓÇö 400 for body, 600 for emphasis, italic for quotations ┬╖ leading 1.55 ┬╖ tracking 0
```css
:root {
  --step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);
  --step-body: clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem);
  --step-lead: clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);
  --step-head: clamp(2rem, 1.3rem + 3.2vw, 4rem);
}
```
One family. The display cut must survive enormous sizes: tight tracking (-0.04 to -0.07em), leading 0.8ΓÇô0.9, optical kerning on. Section headings are modest (28ΓÇô40px) on purpose.
The direction decides sizes and how many of them; the type system decides how this face is set. Where the two give different tracking or leading, use the values of the type system: they are tuned to this face.
The display size itself comes from the hero blueprint below.

## 4. Colour
Kept from the brand. Two values carry the page (ground and ink). The accent, if used at all, appears on one thing only: the single action or the inset image frame. The footer inverts ground and ink.

## 5. Imagery
**The project has no photographs of its own yet.** First choice: **real pictures of the subject's world from the open collections**: its city and street in old postcards and photographs, an old map of the neighbourhood, its materials up close, its trade in engravings, museum objects of its kind (references/imagery.md ┬º3). Start with `node C:/Users/Nam/.gemini/config/skills/design-taste-frontend/scripts/assets.mjs "personal portfolio"`, then queries from your inventory (its street, its materials, its trade's tools and history). Download what you use into the project with `--get` and credit every one on the page (`--credits` prints the footer line). They show the world around the client, never the client's own room, dish, product, person or team. Second, for what no honest picture exists of: draw the subject's own things in code, large, in one flat graphic language and the palette's real colours (its tiles, its windows, its objects; references/imagery.md ┬º8). Third: the dealt photographs, only where an honestly generic picture fits (the sea, the weather, a material), never one a visitor could take for the thing itself and never an unrelated scene. One treatment for all of them. If this direction is built on photographs, plan the set before building (four to six pictures of one family) and reuse them at different crops and scales instead of finding or drawing a new picture for every slot; keep drawings as `<symbol>` + `<use>` or generate them with a small script so the page stays light. List every found picture (with its source and licence), every dealt photograph and every drawing that stands in for photography in your report.

Few images, used as inserts in the typography rather than as illustrations beside it: one photograph inside or behind the name (a 4:5 or 1:1 frame replacing a letter, or tucked between two words), then a short run of large full-width or half-width photographs further down. Square corners. No collage of small thumbnails.

**Floor (the inspector checks it):** at least four real pictures on the page, usually six to twelve; SVG drawings do not count. One moving picture where an honest clip exists: `node <skill>/scripts/assets.mjs --video "<query>"`, used as a muted loop with a poster frame. Whatever this direction says about pictures, it is carried out with real ones.

Photographs dealt for this build, from the "Architecture" set (structure, lines, bridges, facades and building interiors)
Order of preference for imagery: (1) the project's own photographs and product shots; (2) images you generate, if an image tool is
available; (3) real pictures of the subject's world found in the open collections (assets.mjs, downloaded and credited on the page);
(4) drawings of the subject in code; (5) these. They are real photographs (Unsplash licence, served by picsum.photos) of places, light and
texture. They are atmosphere, never a stand-in for a specific product, dish, person or interface. List the ones you use in your report so
they can be replaced.
- `https://picsum.photos/id/1081/1600/1000` ΓÇö Stepped white modern building corner rising into a pale blue sky ┬╖ light tone ┬╖ white, pale blue, soft grey ┬╖ calm area: top ┬╖ native landscape ┬╖ photo: Julien Moreau
- `https://picsum.photos/id/942/1600/1000` ΓÇö White angular concrete building against a black sky ┬╖ dark tone ┬╖ black, white, pale grey ┬╖ black-and-white ┬╖ calm area: top ┬╖ native landscape ┬╖ photo: Carl Nenzen Loven
- `https://picsum.photos/id/101/1600/1000` ΓÇö Concrete bunker-like building against a pale teal sky ┬╖ mid tone ┬╖ pale teal, concrete grey ┬╖ calm area: top ┬╖ native landscape ┬╖ photo: Christian Bardenhorst
- `https://picsum.photos/id/951/1600/1000` ΓÇö Building facade of red, yellow and white rectangular panels ┬╖ light tone ┬╖ red, yellow, white ┬╖ native landscape ┬╖ photo: S├⌐rgio Rola
- `https://picsum.photos/id/893/1600/1000` ΓÇö Curved latticed building facade forming sweeping lines, black and white ┬╖ dark tone ┬╖ black, white, grey ┬╖ black-and-white ┬╖ native landscape ┬╖ photo: Samuel Zeller
- `https://picsum.photos/id/315/1600/1000` ΓÇö View straight up a dark building lightwell to bright sky ┬╖ dark tone ┬╖ dark brown, white, olive ┬╖ native landscape ┬╖ photo: Liam Andrew
- `https://picsum.photos/id/859/1600/1000` ΓÇö Red brick building with a cream door, red shutters and a parked bicycle ┬╖ mid tone ┬╖ brick red, cream ┬╖ native square ┬╖ photo: Brennan Ehrhardt
- `https://picsum.photos/id/193/1600/1000` ΓÇö Gothic stone college building facing a striped green lawn ┬╖ mid tone ┬╖ lawn green, sandstone, sky blue ┬╖ calm area: bottom ┬╖ native landscape ┬╖ photo: Vadim Sherbakov
The last two path numbers are width and height: request the exact crop you render (`/1200/1500` for a 4:5 portrait, `/2400/1350` for a hero) and
add `?grayscale` to desaturate. Use three to six of them, not all eight. Always set `width`, `height`, `alt` and `loading="lazy"` (not on the hero image).
Other sets that fit this brief: desert-and-road, city-day, fog-and-quiet, object-still ΓÇö `node draw.mjs --photos <set>` prints one in full; `--photos list` shows all sets. Taking photographs from another set is your call and is not a redraw; keep them to one light and one treatment.

## 6. Hero ΓÇö Name split to corners
The name is cut into two halves that stay pinned to opposite corners while the page passes between them. A layer with `position: sticky; top: 0; height: 100svh` and `pointer-events: none` holds both: the first word top-left, 28px from the top and left edges; the second word bottom-right, 28px from the bottom and right edges. Both are set at clamp(72px, 9vw, 140px), line-height 0.85, in white with `mix-blend-mode: difference` so they read on every panel beneath. On the first screen the stage between them is a paper-white panel on columns 1ΓÇô9 and one full-height photograph on columns 10ΓÇô12 touching the top, right and bottom edges. The supporting sentence, 20px and max 34ch, starts at column 3 at 44% of the height; the single action is a text link with an arrow directly under it. Three text links are stacked at 15px along the right edge of the white panel at mid-height. The rest of the panel is empty. Later panels, full-height photographs and text panels of different widths, scroll under the pinned halves for three to five viewports; then the layer releases into ordinary sections.

On a phone: Both halves stay pinned: the first word top-left and the second bottom-right, each at 15vw with 16px margins. Between them every panel is a full-width photograph 56svh tall followed by its sentence at 17px. On the first screen the photograph crosses the middle band with the supporting sentence and the action link beneath it. The stacked links collapse to one word at the top-right corner.
Headline: The name in two halves (two words, or one word cut at a syllable), each up to about 9 characters at 9vw, one per corner, with no other headline.

Adjusted for this page:
- It names colours (white): map them onto this palette's roles (ground `--bg`, panels `--surface` and the fields, text `--ink`/`--muted`, the accent `--accent` on the primary action only).
- It pins something for three screens or more: hold a pin for two or three screens at most, give every screen under it its own content, and let nothing pass over the pinned words (the inspector checks all three).
- It blends text with `difference`: over anything but black, white or grey that gives random hues. Use a solid ink chosen for each ground instead.
- Its action is a text link: the primary action on the first screen is a real button (filled or solid-bordered, 44px or taller), placed where the blueprint puts the link. A second action may stay a link.

## 7. Sections, in order
Each is a composition to rebuild with this project's content. Keep the geometry; change the subject. Re-order or drop a
section when the argument of the page needs it (see references/copy.md), never to fall back to a card grid.

### 1. intro ΓÇö Right-half paragraph, lone photo (split)
No heading. On a 12-column grid with 5vw margins, one statement paragraph of 45ΓÇô70 words occupies columns 7ΓÇô12 only, set at clamp(24px, 2.2vw, 34px) with leading 1.25 and a first-line indent of 3em. Its top edge sits 18vh below the section top. Columns 1ΓÇô6 stay empty except for a single square photograph, 20vw wide, in columns 1ΓÇô3, placed so its top aligns with the paragraph's last line and it hangs below the text by most of its height. A five-line note at 14px, 180px wide, sits in columns 1ΓÇô2, 96px beneath the photograph. Section padding is 160px top and bottom. Nothing is centred: the paragraph's left edge is the midpoint of the page, and later text blocks on the page may reuse that line. Holds one paragraph, one photograph and one note.
On a phone: The paragraph comes first at 22px, full width with 20px margins and no indent. The photograph follows at 62% width, pushed to the right margin, in a 4:5 crop instead of square. The small note sits to its left, bottom-aligned with the photograph, in the remaining 30% of the width.

### 2. work ΓÇö Names passing a held square (index)
A flat ground and one centred column of very large names: eight to fourteen project or product names in condensed capitals at clamp(96px, 14vw, 200px), leading 0.85, one per line and each line centred, so long names run nearly to the margins and short ones leave wide ground either side. A square frame 450px across (31vw), square corners, holds at the centre of the viewport behind the list: a sticky element (`position: sticky; top: calc(50svh - 225px)`) at the head of the list with a negative bottom margin equal to its height, centred, below the names in the stacking order, so the passing names cross the picture and are never hidden by it. Choose pictures with a calm centre, or lay a flat 30% scrim inside the frame, so the crossing name keeps 3:1. In the study the picture sits on top of the names; here nothing lies on top of large type. It shows the picture of whichever name is crossing its centre (an IntersectionObserver with a thin root margin at the viewport's middle sets the current name) and swaps with a 200ms crossfade. Level with the frame's middle, 48px to its left and right, two facts about the current item sit at 16px, the kind of work on the left and the year or price on the right, changing with it. The heading opens the list as its first line, at the same size in the soft ink, two words at most. Every name is a link. The section runs about three screens, so each name holds the centre for about a quarter of a screen.
On a phone: Names drop to 15vw and may wrap to two lines, still centred. The frame shrinks to a 60vw square and stays sticky at the centre; the two facts move into one row at 16px directly under it. The heading line stays first.

Adjusted for this page:
- It names a kind of typeface: use the dealt faces (display Libre Franklin, text Source Serif 4) and their settings; capitals only where the type system sets them.
- It pins something for three screens or more: hold a pin for two or three screens at most, give every screen under it its own content, and let nothing pass over the pinned words (the inspector checks all three).
- It crops letters along their top: the inspector fails that (jurors read it as broken). Crop at the bottom edge or a side instead.

### 3. showcase ΓÇö Band of unequal panels (strip)
A modest heading, then one wide band of pictures. The heading, two to four words at 36ΓÇô44px, starts at column 3, left of centre, with 64px beneath it. The band spans the full viewport width edge to edge and is 68svh tall: four photographs standing side by side with no gaps and deliberately unequal widths, a flex row with flex-grow values of 5, 2, 3 and 2. Each panel is cropped with object-fit: cover to a tall slice, so the band reads as one folded view. The first panel carries a two-line title at 28px in paper colour at its top-left, 24px in, over a neutral scrim that covers only that corner. Hovering a panel raises its flex-grow to 6 over 500ms while the others give way; without hover the widths simply stay. One caption line at 16px sits under the band at the left margin.
On a phone: The heading sits on the margin at 28px. The band becomes a two-by-two block with no gaps, 84svh tall in total: the first row split 64/36 and the second 36/64, so the slices stay unequal. The title stays on the first panel. No hover behaviour.

### 4. list ΓÇö Statement, table pushed right (table)
A heading of four to six words spans the full width on two lines at clamp(40px, 4.5vw, 68px), left-aligned with its first line indented 3vw and leading 0.98. 96px below, the table is pushed into the right-hand five columns (8ΓÇô12) and the left stays open. One plain word naming the table (offices, hours, rates) hangs at 14px in column 7, top-aligned with the first row. Each row is a three-part line at 15ΓÇô16px with 26px between rows: the kind or day in the soft ink at the left of the measure, the place or service at 30%, and the address, time or price right-aligned, with a small arrow where the row links. Rows are separated by space only; every fourth row has 44px above it to form groups. In columns 1ΓÇô4, bottom-aligned with the last row, one 4:5 photograph 22vw wide may sit alone. Holds 5ΓÇô14 rows.
On a phone: Heading at 9.5vw without the indent. The table takes the full width at 16px; each row stacks the kind above the place, with the value right-aligned on the first line. The naming word is dropped because the heading already says it. The photograph follows at 60% width on the right margin.

### 5. about ΓÇö Portrait as drop cap (statement)
No heading. One biography paragraph of 50ΓÇô80 words is set large at clamp(24px, 2.5vw, 38px), regular weight, leading 1.2, across columns 3ΓÇô12 of the grid. A square portrait is floated at the paragraph's start with `float: left`: its side equals three lines of text (3.6em), with 0.5em of space to its right, so the first three lines wrap beside it and the fourth returns to the paragraph's left edge, like a drop capital. Square corners. The person's name, the first words of the paragraph, is in full ink; the rest may be in a softer ink with linked names in full ink and underlined. A second paragraph follows after one blank line in the soft ink at the same size. Columns 1ΓÇô2 hold three short facts (place, since when, how to reach) at 14px, top-aligned with the portrait. Section padding 140px.
On a phone: Text at 22px with leading 1.25, full width. The portrait keeps its float but grows to four lines tall, about 110px square. The three facts move below the second paragraph as a single row of three small blocks at 13px.

### 6. features ΓÇö Small proof beside text (list)
One narrow module repeated four to six times down the page, never alternating sides. Each module is 640px wide at most and starts on the page's text margin (at about 22% of the viewport on an understated page). Left part: a flat panel 360px wide and 120 to 200px tall, one tone off the ground, radius 8px, holding one small exact demonstration: a cropped interface fragment at true size, or a tightly cropped photograph covering the panel. Right part, 20px away and top-aligned: a heading of one or two lines at 18px medium and two short paragraphs at 15px in the soft ink, in a column 250px wide. Panel heights vary with their content; text always hangs from the panel's top edge. 96ΓÇô120px of empty ground between modules. The section heading is 24ΓÇô28px, on the same left edge, 64px above the first module. In a column under 600px the text moves beneath its panel.
On a phone: Each module stacks: the panel at full width and natural height, then heading and paragraphs 16px below on the same left edge, at 17px and 15px. 64px between modules. Panels keep their true-size contents and crop from the right instead of scaling down.

Adjusted for this page:
- It names its own corners: use the one radius of this page (square unless the direction says otherwise) and one button shape.

### 7. contact ΓÇö The email as display type (statement)
The section is 100svh in the inverse of the page's colours. A single email address is set as one line of display type spanning the content width: the font-size is fitted so the address runs from margin to margin (about 7ΓÇô9vw for 20 characters; break after the @ onto two lines if it is longer than 26), light or regular weight, tight tracking, sitting on a baseline 12vh above the bottom edge. It is a `mailto:` link; on hover the whole line takes the accent ink. In the top-left corner, a sentence of up to 12 words at 20ΓÇô22px says what to write about. In the two bottom corners at 14px: phone and city at the left, two or three social links at the right. No heading and no form. For a pinned ending, make the section `position: sticky; bottom: 0` beneath the page so the previous section lifts off it.
On a phone: The address breaks after the @ onto two lines at 11.5vw, left-aligned, sitting at 55% of an 86svh screen. The sentence sits at the top-left at 18px. Phone, city and social links stack at the bottom-left at 15px with 12px between them.

## 8. Motion ΓÇö Pinned story
One element holds its place with `position: sticky` (a title, a frame, a product fragment) while the items that belong to it scroll past or swap inside it. The page's ordinary scrolling does the work; nothing is hijacked. Hold it for about one screen per step and three screens at most, two held stages per page at most, with a line of text on every held screen. Recipe: 'Pinned story' in references/motion.md.
This is the signature move, the one loud moment. Around it the page still needs the rest of the motion layer (SKILL.md step 9): an entrance for the parts of every section, feedback on every control, and one moving picture. The inspector fails a page that barely moves. Recipes: references/motion.md.

## 10. Where the richness comes from
Scale. The size of the name against the smallness of everything else is the entire visual event, so protect both ends: do not shrink the name to make room, and do not let body text creep above 20px.

## 11. How this direction goes wrong
A long name set small is just a logo. If the name has more than about 12 characters, stack it on two lines or crop it with the viewport edge; never drop below 12vw. Do not add a second big headline under the name. Do not decorate the letters.

## 12. Real references
Studied sites that work this way. Take the principle, never the specifics: no names, copy, images or signature assets of theirs.
- **Produx Design** (Awwwards Site of the Day, studied score 7.4) `aww-produx-design`
  Idea: The wordmark is the hero, and the showreel image assembles itself from scattered square fragments as you scroll.
  Hero: Near-black field with 80px side margins. The wordmark, in a wide, light-weight uppercase sans with a slashed O, runs margin to margin (about 89% of the width) with a cap height near 20% of the viewport, starting 9% from the top. A large empty gap follows. In the lower half a two-line statement at 5.1vw sits flush left; opposite it, bottom-aligned to the statement and flush to the right margin, is a three-line paragraph in small monospace about a quarter of the width. No nav bar, button or image in the first viewport; the bottom quarter is empty.
  Worth taking: Run the wordmark margin to margin in a light weight rather than a heavy one; thin strokes at huge size read as assured instead of loud.
- **House of Honey** (Awwwards Site of the Day, studied score 8.4) `aww-house-of-honey-1`
  Idea: A block-heavy wordmark pierced by a hairline script: the bold-against-delicate contrast is repeated at every scale, with giant pink script behind quiet serif statements.
  Hero: Top 42% is a flat blush-pink band; the bottom 58% is a full-bleed photograph of a bright living room, arched window on the centre axis, butting against the band with no margin. A tiny nav row sits at the very top with 8px side margins: block logo glyph and five links left, contact link with a small square arrow box far right. The wordmark fills the width edge to edge: two words in ultra-black extended caps, about 120px cap height, dark aubergine, with a hairline script 'of' 230px tall between them, overshooting above and below. Directly beneath, two two-line serif uppercase taglines at 31px, one flush left, one flush right.
  Worth taking: Set a wordmark edge to edge in ultra-heavy extended caps and thread a hairline script connecting word through it that overshoots the cap height both ways.
- **Nick Ho** (Awwwards Site of the Day, studied score 7.5) `aww-nick-ho`
  Idea: A young racing driver's sponsor pitch built from the paddock's own objects: the car number as the hero, the helmet as the sponsor wall, the season calendar as a track the car drives down, a gallery dial that reads like a rev counter and a chequered-flag hand-off, all in black, white and greyscale photography with one signal yellow for what is live.
  Hero: A full-bleed greyscale photograph of the driver in his helmet beside the car fills the screen as a WebGL depth-map canvas, with a 288px dark scrim at the bottom. Dead centre, the car number in white condensed figures at about 216px (15vw) dominates. Three stacked stats (figure plus 14px label) at the left, a right-aligned column of short facts at the right edge; the name as the h1 bottom-left in condensed caps at only 50px (3.5vw) over a three-line 14px intro, and the next race bottom-right. No visible nav or action: only a 24px yellow square menu button top-right and a small monogram top-left.
  Worth taking: Turn the subject's own objects into navigation: a vehicle sliding down a schedule as the you-are-here marker, a carousel shaped like a gauge, flag tiles as the one soft transition. Each carries information as well as character.
Full notes on any of them: `node draw.mjs --site <id>`.

## Always
Headlines two lines or fewer at every width. No eyebrow labels, no monospace, no 01/02/03, no thin rules, no gradients, no shadows at rest,
no cream-and-terracotta, no violet. The frame: one h1 on the first screen that says what this is, equal outer margins, no
section huddled on one side with the other half empty, no blank stretch over half a screen, a heading on every section.
`inspect.mjs` measures all of it.

Saved to D:/OneDrive - ─Éß║íi hß╗ìc FPT- FPT University/Desktop/Profolio/.taste-skill/direction.json ┬╖ reprint with `node draw.mjs --show`
