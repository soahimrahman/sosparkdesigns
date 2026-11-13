# AGENTS.md — SoSparkDesigns Engineering & Agent Collaboration Guide

This document defines architectural standards, quality gates, and AI agent interaction protocols for developers and AI agents working on this codebase.

---

## 1. Project Overview & Identity

- **Studio:** SoSparkDesigns (`https://sosparkdesigns.cyou`)
- **Founder & Creative Director:** Soahim Rahman Tasin (`soahimrahman2024@gmail.com`)
- **Location:** Dhaka, Bangladesh (Global client delivery)
- **Proprietary Ventures:** SparkForge (`https://sparkfroge.pro.bd`), Subz Empire (`https://subzempire.com`)
- **Design System:** Luminous SoSpark (Strict Light Theme Only: `#ffffff`, `#f8fafc`, `#0069EA` primary blue, `#000000`/`#09090b` typography). Zero green or purple accents. Zero fabricated testimonials or synthetic employee profiles.

---

## 2. Technology Stack & Quality Gates

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5 (Strict mode)
- **Styling:** Tailwind CSS with centralized design tokens (`src/styles/globals.css`, `src/lib/motion-tokens.ts`)
- **Validation:** Zod schemas (`src/lib/validations.ts`)
- **Testing:** Vitest (`npm test`)
- **Linter:** ESLint (`npm run lint`)
- **Build:** `npm run build`

Before committing changes:
```bash
npx tsc --noEmit && npm run lint && npm test && npm run build
```

---

## 3. AG-UI (Agent-User Interaction Protocol) Workflow

This project adheres to the **AG-UI Protocol** (`@ag-ui/core`, `@ag-ui/client`, `@ag-ui/encoder`) for all conversational AI interfaces, agent streaming endpoints, generative UI widgets, and bi-directional state synchronization.

### Reference Skill
Load the authoritative Hermes skill before implementing AG-UI features:
```text
skill_view(name='ag-ui')
```

### Core Architecture Principles

1. **Standardized Event Streaming**:
   Agent endpoints (such as `/api/chat` or autonomous agent bridges) must emit events adhering to AG-UI wire protocol specifications:
   - Lifecycle: `RUN_STARTED`, `RUN_FINISHED`, `RUN_ERROR`
   - Text Streaming: `TEXT_MESSAGE_START`, `TEXT_MESSAGE_CHUNK`, `TEXT_MESSAGE_FINISH`
   - Tool Invocations: `TOOL_CALL_START`, `TOOL_CALL_ARGS`, `TOOL_CALL_FINISH`, `TOOL_CALL_RESULT`
   - State & Telemetry: `STATE_SYNC`, `ACTIVITY_SNAPSHOT`, `CUSTOM`

2. **Generative UI via A2UI**:
   - **Fixed Schema (Preferred)**: When returning predictable UI surfaces (service quotes, delivery checks, metric cards), backend tools must return the `a2ui_operations` envelope (`createSurface`, `updateComponents`, `updateDataModel`).
   - **Dynamic Schema**: For open-ended generative widgets, use `A2UIMiddleware` and stream `render_a2ui` arguments so the client progressively paints components.
   - **Catalog Integrity**: Component tags and catalog IDs must match the client-registered catalog. Never allow LLMs to invent non-existent UI components.

3. **Bi-Directional Interaction & Human-in-the-Loop**:
   User interactions with rendered A2UI components (e.g. form inputs, button clicks, approval prompts) flow back to the agent as private user context:
   ```text
   A2UI user action:
   {"action": "submit", "surfaceId": "inquiry_card", "data": {"budget": "$5,000 - $10,000"}}
   ```

4. **MCP Apps & Tool Bridging**:
   When connecting Model Context Protocol (MCP) servers to frontend views, route through `@ag-ui/mcp-apps-middleware` or `@ag-ui/mcp-middleware` to preserve security boundaries and state tracking.
