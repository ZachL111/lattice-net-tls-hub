# lattice-net-tls-hub

`lattice-net-tls-hub` keeps a focused TypeScript implementation around networking. The project goal is to design a TypeScript verification harness for tls systems, covering storage recovery, log and snapshot fixtures, and failure-oriented tests.

## Why I Keep It Small

This is intentionally local and self-contained so it can be inspected without credentials, services, or seeded history.

## Lattice Net TLS Hub Review Notes

The first comparison I would make is `retry pressure` against `packet span` because it shows where the rule is most opinionated.

## Included Behavior

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/lattice-net-tls-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `retry pressure` and `packet span`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Internal Model

The fixture data drives the tests. The code stays thin, while `metadata/domain-review.json` and `config/review-profile.json` explain what each case is meant to protect.

The TypeScript implementation avoids hidden state so fixture changes are easy to reason about.

## Try It Locally

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Validation

The same command runs the local verification path. The highest-scoring domain case is `stress` at 201, which lands in `ship`. The most cautious case is `stale` at 122, which lands in `watch`.

## Scope

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
