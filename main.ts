// Alien Field Notes: The Two Day Earth Review
// Writes one original one-line review of Earth, as left by an alien tourist,
// to /output/entry.txt. Deterministic: the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Earth: free air, gorgeous sunsets, but checkout takes eighty years and the minibar is the entire ocean. Four stars — the sunsets are worth the eighty-year wait.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
