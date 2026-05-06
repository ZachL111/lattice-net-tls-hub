import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 62, slack: 47, drag: 10, confidence: 49 };
assert.equal(domainReviewScore(item), 190);
assert.equal(domainReviewLane(item), "ship");
