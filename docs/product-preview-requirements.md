# LogK Product Preview Requirements

This document is the source of truth for agents working on the embedded `product-preview` app and future product mockup surfaces. It must be detailed enough that an agent can reproduce the intended UI and behavior without reading prior chat history.

## Product Definition

LogK is a delegation layer for AI services. Users can ask one question and route it through multiple providers and models such as OpenAI, Anthropic, Google, local/custom models, and future providers. LogK should help users select models, estimate cost, protect private information, compare answers, synthesize final responses, and inspect usage or billing.

The preview is not the production product. It is an interactive, visual-only product surface embedded in the Astro homepage. It should feel like a real SaaS app screenshot or screen recording, but no real provider API calls are required.

## Current Deployment Constraint

The homepage is an Astro static site deployed to GitHub Pages. The embedded product preview is loaded from:

```html
<link rel="stylesheet" href="/product-preview/product-preview.css">
<script type="module" src="/product-preview/product-preview.js"></script>
<div data-product-preview data-locale="en" data-feature="model-router"></div>
```

The root build runs:

```bash
npm run build
```

The root script calls `node ./scripts/preview-workspace.mjs build`. If `product-preview/package.json` exists, that workspace build must succeed. If the real React/Vite source is absent, the fallback script requires committed files under `public/product-preview/`.

Long-term target: restore a full React/Vite source app under `product-preview/src/` and generate `public/product-preview/` during build.

Short-term deploy target: GitHub Pages must succeed with Node 22 and committed preview assets.

## Repository Boundaries

Astro owns the marketing site:

- Global layout, metadata, fonts, theme bootstrap.
- Homepage copy and localized feature-tab labels.
- Static GitHub Pages routing.
- The DOM bridge that dispatches preview feature changes.

Product-preview owns the embedded app:

- App chrome and navigation.
- Chat UI.
- Model/provider selection.
- Model workflow configuration.
- Usage/spending/billing/settings mock pages.
- Scenario data used to demonstrate product features.
- Namespaced CSS prefixed with `lpv-`.

Do not import React components directly into Astro. Astro should only mount the generated bundle through `data-product-preview`.

## Navigation Model

The product preview should have two primary navigation groups.

Primary work group:

- `Projects`
- `Agents`
- `Chats`

Account and operations group:

- `Usage`
- `Spending`
- `Billing`
- `Settings`

Each item should eventually own a dedicated page or screen inside the preview app. For the homepage embed, it is acceptable to show the `Chats` screen by default and make the other pages visually present but shallow.

Recommended layout:

- Top app bar: logo on the left, horizontally scrollable page navigation in the center, settings icon on the right.
- No separate dark/light text toggle in the top bar.
- Clicking the settings icon opens a settings overlay.
- Settings overlay contains the dark/light toggle and future profile/preferences controls.
- On mobile, top navigation remains horizontally scrollable.

## Page Requirements

### Chats

Purpose: demonstrate the core LogK value: one chat can route through many models with cost, privacy, comparison, and synthesis.

Required layout:

- Chat history area visible by default.
- Chat history scrolls vertically.
- Bottom prompt composer spans the full available width.
- Composer stays visually attached to the bottom of the chat screen.
- The upper line of the composer displays selected model workflows or roles.
- Hovering over selected workflow chips expands an overlay showing details.
- Prompt area is vertically split into two sections.

Suggested prompt split:

- Main prompt: user-facing question or task.
- Routing/context instructions: optional constraints, role plan, privacy policy, or verification request.

Required chat content:

- At least one previous user message.
- At least one multi-model answer turn.
- Cards for side-by-side model responses.
- A final synthesis response after comparison.
- Visible evidence of privacy masking or redaction.
- Visible credit estimate or cost indicator.

Bottom composer details:

- Full-width text input area.
- Selected workflow chips in the top row.
- Send/delegate button on the right.
- Optional attachments/tool buttons on the left.
- Token/credit estimate near the button.

### Projects

Purpose: future workspace organization.

Current state: keep mostly empty.

Required placeholder:

- Page title: `Projects`.
- Empty state explaining that projects will group chats, agents, saved workflows, and usage policies.
- No complex behavior yet.

### Agents

Purpose: show model-agent orchestration.

Visual direction:

- Similar to a graphical MCP/OpenClaw-style canvas.
- Nodes represent tools, agents, model calls, memory/context, privacy gates, and verification steps.
- Edges represent data flow.
- Should feel like a visual orchestration system, not a simple list.

Required mock concepts:

- Agent node.
- Model node.
- Tool node.
- Privacy/masking node.
- Evaluation/verifier node.
- Final response node.

### Usage

Purpose: operational overview.

Required mock content:

- Request count.
- Tokens used.
- Average cost per run.
- Provider distribution.
- Recent runs table or timeline.

### Spending

Purpose: cost analytics.

Required mock content:

- Credit balance.
- Spend trend.
- Spend by provider.
- Spend by model.
- Budget threshold or alert.

### Billing

Purpose: account payment and plan.

Required mock content:

- Current plan.
- Credit purchase option.
- Invoice list.
- Payment method placeholder.

### Settings

Purpose: user/app preferences.

Required mock content:

- Theme toggle.
- Privacy defaults.
- Default model workflow.
- Organization/team placeholder.
- API/provider keys placeholder.

## Model Provider Selector

The model selector must not consume excessive space.

Required behavior:

- Group models by provider.
- Providers include at least `OpenAI`, `Anthropic`, `Google`, and `Custom`.
- Provider groups are compact.
- Model chips show only model names, not long descriptions.
- Model chips are small and placed under each provider heading.
- Selected chips should be visually distinct.
- Provider groups can wrap or horizontally scroll depending on available width.

Example provider layout:

```text
OpenAI
[GPT-5.5] [GPT-5.4] [GPT-5 Thinking] [Deep Research]

Anthropic
[Claude Opus] [Claude Sonnet]

Google
[Gemini Pro] [Gemini Flash]

Custom
[Local Llama] [Company RAG]
```

## Model Workflow Configuration

The term `model configuration` is understandable but too broad. Prefer one of these terms:

- `Model workflow`
- `Run plan`
- `Delegation plan`
- `Model pipeline`

Recommended product term: `Run plan`.

Reason: it describes what happens for a single chat turn. It can include parallel calls, cascades, verification, synthesis, cost rules, and privacy gates.

Each chat turn may use a different run plan.

### Run Plan Examples

Example 1: parallel comparison

- User selects `GPT-5.4` and `GPT-5.5`.
- Both run simultaneously.
- Responses appear side by side.
- Each answer is in a card.
- User can scroll answer cards horizontally.
- A synthesis card may appear after comparison.

Example 2: cascade and synthesis

- User selects `GPT-5.4 Deep Research` and `GPT-5 Thinking`.
- They run in parallel as research/reasoning branches.
- Their outputs cascade into `Claude` for summarization and comparison.
- Claude produces the final answer.
- The UI should show both the branch outputs and final synthesis.

Example 3: privacy-first enterprise run

- Prompt passes through privacy mask.
- Masked prompt routes to selected models.
- Verification model checks for data leakage.
- Final synthesis includes confidence and policy status.

## Graphical Run Plan UI

The user is interested in "graphic coding like Unreal Blueprint" for Compare/Synthesis. Develop this as a visual `Run Plan Canvas`.

Design principles:

- Nodes represent model calls, gates, tools, and outputs.
- Edges represent execution flow or data dependency.
- Parallel branches should be visually obvious.
- Cascade into a synthesis node should be visually obvious.
- Keep it readable in a small embedded preview.
- Use visual polish but avoid making the mockup too complex.

Initial node types:

- `Prompt`
- `Privacy Gate`
- `Model Call`
- `Tool / Search`
- `Compare`
- `Verifier`
- `Synthesis`
- `Final Answer`

Initial visual language:

- Dark canvas, subtle grid.
- Rounded rectangular nodes.
- Colored node headers by type.
- Curved connector lines.
- Small status chips such as `masked`, `running`, `done`, `verified`.

Minimum homepage preview requirement:

- One compact blueprint strip or panel showing a run plan:

```text
Prompt -> Privacy Gate -> [GPT-5.5, Claude, Gemini] -> Compare -> Synthesis
```

This can replace or augment the current `Compare` panel.

## Chat Turn Display

A chat turn can contain:

- User prompt.
- Run plan summary.
- Parallel model answer cards.
- Intermediate cascade outputs.
- Final synthesis.
- Cost and timing metadata.
- Privacy status.

Side-by-side response cards:

- Cards should be horizontally scrollable.
- Each card title includes model name.
- Each card includes role, response summary, confidence/agreement, and cost.
- Cards should remain usable on mobile.

Final synthesis:

- Visually distinct from raw model responses.
- Should reference that it compared or aggregated model outputs.
- Should show confidence or agreement.

## Homepage Feature Tabs

Astro homepage owns the outer feature tabs. They are not part of the product app chrome.

Current feature IDs:

- `model-router`
- `cost-planner`
- `privacy-gateway`
- `answer-synthesis`
- `audit-trace`

Requirements:

- Tabs show only titles.
- Selected tab explanation appears in a separate panel between tabs and preview.
- Clicking a tab dispatches:

```js
window.dispatchEvent(
  new CustomEvent("logk-preview:set-feature", {
    detail: { feature: "cost-planner" }
  })
);
```

The embedded preview listens to this event and switches scenarios.

## Responsive Requirements

Desktop:

- Homepage hero stacks vertically.
- Product preview spans full content width.
- Product app can use a multi-column layout.
- Chat composer spans full chat width.

Tablet:

- Product app columns collapse progressively.
- Top navigation remains horizontally scrollable.
- Provider/model chips wrap cleanly.

Mobile:

- Product app must not require horizontal page scrolling.
- Internal lists may horizontally scroll only when intentional, such as model chips or answer cards.
- Chat composer remains full width.
- Sidebar navigation should move to top tabs or horizontal nav.

## Visual Quality Bar

The preview should feel like a high-quality SaaS product screen, not a decorative illustration.

Preferred direction:

- Dark IDE-like surface by default.
- Real app chrome.
- Compact navigation.
- Dense but legible panels.
- Small model chips.
- Chat history visible.
- Smooth but restrained interactions.

Avoid:

- Large marketing cards inside the product app.
- Oversized model cards.
- Abstract decorative visuals that do not explain the product.
- Heavy 3D tilt or morphing effects.
- Duplicate feature selectors in both Astro and product app unless they serve different purposes.

## Implementation Plan For Future Agents

1. Restore or create full React/Vite source under `product-preview/src/`.
2. Keep the library build output path as `../public/product-preview`.
3. Replace the temporary committed-bundle fallback script with real `vite build`, `tsc --noEmit`, and `vite dev` scripts.
4. Implement app-level routes/screens for `Projects`, `Agents`, `Chats`, `Usage`, `Spending`, `Billing`, and `Settings`.
5. Make `Chats` the default homepage embedded screen.
6. Implement provider-grouped model selector.
7. Implement run plan chips and hover overlay in the composer.
8. Implement the blueprint-style run plan visualization.
9. Re-run root `npm run check` and `npm run build`.
10. Verify GitHub Pages build uses Node 22.

## Acceptance Criteria

Build:

- `npm ci` succeeds in GitHub Actions.
- `npm run build` succeeds on GitHub Actions with Node 22.
- `dist/product-preview/product-preview.js` and `.css` exist after build.

Homepage:

- Feature tabs are title-only.
- Feature explanation appears separately.
- Embedded preview spans full width.
- No tilt/morph effect.

Product preview:

- Top bar contains logo, horizontal navigation, and settings icon.
- Settings overlay contains dark/light toggle.
- Chat screen has visible scrollable history.
- Bottom prompt composer spans full width.
- Models are grouped by provider.
- Model tags are compact.
- Run plan/model workflow is visible in the composer.
- Parallel model responses can be displayed side by side.
- Blueprint-style run plan visualization exists for compare/synthesis.

