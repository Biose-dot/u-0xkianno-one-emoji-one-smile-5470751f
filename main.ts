// One Emoji, One Smile — make.fun bounty entry.
// A deterministic program that writes exactly one emoji to /output/entry.txt:
// the emoji most likely to make a stranger smile.
//
// The emoji: 🌻 (sunflower)
//   Warm at first glance with no context needed, universal across ages and
//   backgrounds, and chosen rather than the default smiley — a sunflower is
//   sunshine you can send, friendly without intimacy, sarcasm or flirtation,
//   so it reads exactly right coming from a stranger.
//   One emoji, inside the sealed gate of 1–8 characters (checked below so a
//   future edit can never silently break validity).
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🌻";

// Sealed gate: /output/entry.txt must be UTF-8 text of 1 to 8 characters.
if ([...EMOJI].length < 1 || [...EMOJI].length > 8 || EMOJI.trim() === "") {
  throw new Error("emoji violates the 1-8 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
