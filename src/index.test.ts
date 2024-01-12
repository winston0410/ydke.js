import { equal, deepStrictEqual } from "node:assert/strict";
import { describe, test } from "node:test";
import { parseURL } from "./index";

describe("parseURL", () => {
    test("should handle ydke URL", () => {
        const deck = parseURL("ydke://o6lXBZyFNAI=!viOnAg==!7ydRAA==!");

        deepStrictEqual(deck.main, new Uint32Array([89631139, 36996508]));
        deepStrictEqual(deck.extra, new Uint32Array([44508094]));
        deepStrictEqual(deck.side, new Uint32Array([5318639]));
    });
});
