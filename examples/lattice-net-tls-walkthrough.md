# Lattice Net TLS Hub Walkthrough

The fixture is intentionally compact, so the review starts with the cases that pull farthest apart.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 190 | ship |
| stress | retry pressure | 201 | ship |
| edge | route drift | 184 | ship |
| recovery | socket risk | 198 | ship |
| stale | packet span | 122 | watch |

Start with `stress` and `stale`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

If `stale` becomes less cautious without a clear reason, I would inspect the drag input first.
