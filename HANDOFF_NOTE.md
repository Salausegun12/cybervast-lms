# Technical Handoff Note
**Project**: Cybervast LMS — Component Foundation Sprint
**Prepared By**: Frontend Development Intern Team
**Date**: July 2026

## 1. Stack Decisions & Architecture
*   **Framework**: Next.js 14+ (React 18+) was chosen for the foundation, providing a robust, server-render-capable architecture.
*   **Styling**: Tailwind CSS is used globally. We implemented a utility-first approach. No plain CSS was used for component styles.
*   **Design Tokens**: `tokens.css` holds the CSS variables for the brand palette (`#7B2FBE` Primary, `#4A0E8F` Dark, `#FFFFFF` White), typography (`Inter`), spacing, and border-radius.
*   **TypeScript**: All components are strictly typed using TypeScript interfaces to ensure reliable prop usage and autocompletion.
*   **Testing**: Unit tests were intentionally omitted from this sprint as per direct instructions (`test tahkbe na`), but the file structure is ready for them if needed later.

## 2. Implemented Components
We have successfully built and showcased the following components in our living style guide (`/src/app/page.tsx`):
*   **P0**: Button (Primary, Secondary, Ghost, Danger), Input, Textarea, Badge (5 variants).
*   **P1**: Card (with Header/Body/Footer slots), Avatar (with image and initials fallback), Sidebar & NavItem (collapsible), Modal / Dialog (accessible with keyboard trap).
*   **P2**: Progress Bar, Dropdown / Select (Single and Multi-select support).

## 3. Accessibility (a11y) & Responsiveness
*   All interactive elements (Buttons, Inputs, Dropdowns, Modals) include necessary `aria-labels` and `role` attributes.
*   The Modal component includes a keyboard trap (closes on `ESC`).
*   Components were built with mobile-first breakpoints and flex/grid layouts to ensure responsiveness across devices.

## 4. Known Limitations & Open Questions for UI/UX
*   **Dropdown Positioning**: The custom dropdown does not yet use a positioning engine (like Floating UI or Popper.js), so it may clip if placed at the very bottom of a scrollable container.
*   **Modal Focus Trap**: While the Modal closes on `ESC`, strict tab-focus trapping (preventing tabbing outside the modal) might need further refinement depending on the final hi-fi designs.
*   **Typography Scale**: We are currently using Tailwind's default typography scale (`text-sm`, `text-base`, `text-lg`). *Question for UI/UX*: Do we need a custom font-size and line-height scale defined in `tokens.css` to match the hi-fi designs?
*   **Shadows**: We used Tailwind's `shadow-sm` and `shadow-md`. *Question for UI/UX*: Are there specific custom shadow values (elevation tokens) we should apply?

The components are ready for integration once the high-fidelity mockups are finalized.
