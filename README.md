# Juno Fall Academic Festival 2026

Static Thai Ragnarok Online event guide, published from `main` at the repository root:
https://econds.github.io/RO-Juno-Fall-Academic-Festival-2026/

## Suite navigation

Stable ID: `juno-festival-2026`. `index.html` loads the approved, immutable local
`assets/ro-suite/2.0.0/nav.js` component. All three release files are exact copies
of Portal release 2.0.0 (source commit `e2712f1cc4d7c72ccd31f384e5292c3d9bb19529`).
Only `assets/ro-suite/host-theme.css` adapts the guide's existing dark purple/gold
palette and 980px content alignment.

The component renders its frozen offline catalog immediately and requests
https://econds.github.io/ro_tools_portal/catalog/v1/tools.json on connection.
Juno is deliberately absent from the frozen release: its stable ID displays
until the central catalog resolves its title. Do not regenerate the snapshot
or edit the release files to add Juno. Future suite changes need only a Portal
catalog publication. If the module fails, a normal Portal link remains.

Publish the reviewed Portal registry addition before this child integration.
This PR does not deploy or change Pages settings. Roll back by reverting the
integration commit; checklist storage `juno-fall-2026-v1` and guide behavior
remain unchanged.

## Verification

Baseline `c5d1aaf4eecccbcdbb876dee2d3eaa61615b11ea` was the current `main` and
successful Pages deployment revision (run `38555228751`) before this change.
The repository had no existing README, AGENTS.md, skills, tests or CI workflow.

Run `npm ci`, `npx playwright install chromium`, then `npm test`.
An installed system browser can be selected with `CHROMIUM_PATH=/usr/bin/chromium`.
The added PR CI workflow runs the same checks without deployment permissions.

- Exact original HTML comparison after stripping only two marked integration
  blocks preserves every guide datum, URL, command, style and application script.
- Pinned SHA-256 checks cover all three release files and source provenance.
- Chromium checks at 320, 390 and 1440px cover automatic catalog loading before
  opening, unknown-to-known identity, current link, host colors, search, Tab,
  Escape/focus return, horizontal overflow, checklist persistence/reset, actual
  clipboard `/navi` copying and representative valid/insufficient planner inputs.
- Offline and blocked-module checks retain usable guide/checklist/Portal fallback.
- Catalog responses are mocked at the exact production endpoint before page
  navigation; unrelated external fonts/images are blocked for deterministic QA.

These integration tests do not claim exhaustive event-data accuracy or a live
production CORS/network smoke. The complete immutable-component security and
catalog validation suite lives in Portal; Juno verifies the shipped bytes.
