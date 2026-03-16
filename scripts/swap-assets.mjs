#!/usr/bin/env node
/**
 * Asset swap script — replaces capture-related assets from a source directory.
 *
 * Usage:
 *   node scripts/swap-assets.mjs ./captures/
 *   node scripts/swap-assets.mjs --dry-run ./captures/
 *   node scripts/swap-assets.mjs --backup ./captures/
 *
 * Source files should be named by asset ID, e.g. REC_VIDEO_IMPORT.png
 * Mapping is defined in scripts/asset-mapping.json
 */

import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(process.cwd());
const mappingPath = path.join(repoRoot, "scripts/asset-mapping.json");

function parseArgs() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const backup = args.includes("--backup");
  const sourceDir = args.find((a) => !a.startsWith("--"));
  return { dryRun, backup, sourceDir };
}

function loadMapping() {
  if (!fs.existsSync(mappingPath)) {
    console.error("Missing scripts/asset-mapping.json");
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(mappingPath, "utf8"));
}

function findSourceFile(sourceDir, assetId, category) {
  const extensions =
    category === "screenshots"
      ? [".png"]
      : category === "posters"
        ? [".jpg", ".jpeg", ".png"]
        : [".mp4", ".mov", ".webm"];
  for (const ext of extensions) {
    const candidate = path.join(sourceDir, assetId + ext);
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function main() {
  const { dryRun, backup, sourceDir } = parseArgs();

  if (!sourceDir) {
    console.error("Usage: node scripts/swap-assets.mjs [--dry-run] [--backup] <source-dir>");
    process.exit(1);
  }

  const absSource = path.resolve(repoRoot, sourceDir);
  if (!fs.existsSync(absSource) || !fs.statSync(absSource).isDirectory()) {
    console.error(`Source directory not found: ${absSource}`);
    process.exit(1);
  }

  const mapping = loadMapping();
  let swapped = 0;
  let total = 0;

  if (dryRun) {
    console.log("--- DRY RUN (no files will be modified) ---\n");
  }

  for (const [category, entries] of Object.entries(mapping)) {
    if (typeof entries !== "object" || entries === null) continue;

    for (const [assetId, destRel] of Object.entries(entries)) {
      total++;
      const sourcePath = findSourceFile(absSource, assetId, category);
      if (!sourcePath) continue;

      const destPath = path.join(repoRoot, destRel);
      const destDir = path.dirname(destPath);

      if (dryRun) {
        console.log(`Would copy: ${path.basename(sourcePath)} -> ${destRel}`);
        swapped++;
        continue;
      }

      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }

      if (backup && fs.existsSync(destPath)) {
        const backupPath = destPath + ".backup-" + Date.now();
        fs.copyFileSync(destPath, backupPath);
        console.log(`Backed up: ${destRel} -> ${path.basename(backupPath)}`);
      }

      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied: ${path.basename(sourcePath)} -> ${destRel}`);
      swapped++;
    }
  }

  console.log(`\nDone. ${swapped} swapped, ${total - swapped} not found in source.`);
}

main();
