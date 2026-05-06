function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 62, slack: 47, drag: 10, confidence: 49 };
equal(domainReviewScore(item), 190);
equal(domainReviewLane(item), "ship");
