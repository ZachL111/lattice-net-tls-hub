import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
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
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
