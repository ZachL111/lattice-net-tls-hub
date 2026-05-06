function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
  {
    "name": "case_1",
    "demand": 59,
    "capacity": 77,
    "latency": 20,
    "risk": 25,
    "weight": 11,
    "score": 65,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 64,
    "capacity": 107,
    "latency": 12,
    "risk": 19,
    "weight": 10,
    "score": 154,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 83,
    "capacity": 78,
    "latency": 19,
    "risk": 5,
    "weight": 11,
    "score": 217,
    "decision": "accept"
  }
];

for (const item of cases) {
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
