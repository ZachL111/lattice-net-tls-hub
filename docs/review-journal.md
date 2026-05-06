# Review Journal

The cases below are the review handles I would use before changing the implementation.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its networking focus without claiming live deployment or external usage.

## Cases

- `baseline`: `packet span`, score 190, lane `ship`
- `stress`: `retry pressure`, score 201, lane `ship`
- `edge`: `route drift`, score 184, lane `ship`
- `recovery`: `socket risk`, score 198, lane `ship`
- `stale`: `packet span`, score 122, lane `watch`

## Note

The useful failure mode here is a wrong decision on a named case, not a vague style disagreement.
