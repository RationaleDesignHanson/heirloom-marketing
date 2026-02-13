import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(process.cwd());

/**
 * Minimal PNG/JPEG dimension inspection with zero deps.
 * - PNG: reads IHDR chunk (width/height big-endian)
 * - JPEG: scans for SOF0/SOF2 markers
 */
function getImageDimensions(filePath) {
  const buf = fs.readFileSync(filePath);

  // PNG signature
  if (
    buf.length > 24 &&
    buf[0] === 0x89 &&
    buf[1] === 0x50 &&
    buf[2] === 0x4e &&
    buf[3] === 0x47
  ) {
    // IHDR is the first chunk; width/height at fixed offsets.
    const width = buf.readUInt32BE(16);
    const height = buf.readUInt32BE(20);
    return { width, height, type: "png" };
  }

  // JPEG SOI
  if (buf.length > 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length) {
      // find marker
      if (buf[i] !== 0xff) {
        i += 1;
        continue;
      }

      // skip fill bytes
      while (buf[i] === 0xff) i += 1;
      const marker = buf[i];
      i += 1;

      // EOI or SOS ends header parsing
      if (marker === 0xd9 || marker === 0xda) break;

      // segment length includes length bytes
      if (i + 1 >= buf.length) break;
      const segLen = buf.readUInt16BE(i);
      if (segLen < 2) break;

      // SOF0 (baseline) 0xC0, SOF2 (progressive) 0xC2
      if (marker === 0xc0 || marker === 0xc2) {
        // format: [len][precision][height][width]...
        const height = buf.readUInt16BE(i + 3);
        const width = buf.readUInt16BE(i + 5);
        return { width, height, type: "jpeg" };
      }

      i += segLen;
    }
  }

  return null;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)}KB`;
  const mb = kb / 1024;
  return `${mb.toFixed(2)}MB`;
}

function checkFile(relPath, rules) {
  const absPath = path.join(repoRoot, relPath);
  const result = {
    relPath,
    ok: true,
    messages: [],
  };

  if (!fs.existsSync(absPath)) {
    result.ok = false;
    result.messages.push("missing");
    return result;
  }

  const stat = fs.statSync(absPath);
  if (!stat.isFile()) {
    result.ok = false;
    result.messages.push("not a file");
    return result;
  }

  if (typeof rules.maxBytes === "number" && stat.size > rules.maxBytes) {
    result.ok = false;
    result.messages.push(`too large (${formatBytes(stat.size)} > ${formatBytes(rules.maxBytes)})`);
  } else if (typeof rules.warnBytes === "number" && stat.size > rules.warnBytes) {
    result.messages.push(`warning: large (${formatBytes(stat.size)} > ${formatBytes(rules.warnBytes)})`);
  } else {
    result.messages.push(`size ${formatBytes(stat.size)}`);
  }

  if (rules.kind === "image") {
    const dim = getImageDimensions(absPath);
    if (!dim) {
      result.ok = false;
      result.messages.push("could not read image dimensions (expected PNG/JPG)");
      return result;
    }

    result.messages.push(`${dim.type} ${dim.width}×${dim.height}`);

    if (rules.exactWidth && dim.width !== rules.exactWidth) {
      result.ok = false;
      result.messages.push(`width ${dim.width} != ${rules.exactWidth}`);
    }
    if (rules.exactHeight && dim.height !== rules.exactHeight) {
      result.ok = false;
      result.messages.push(`height ${dim.height} != ${rules.exactHeight}`);
    }
  }

  return result;
}

const checks = [
  // Hero videos + posters (all portrait 9:16)
  {
    relPath: "public/assets/video/lp1-save-hero-16x9.mp4",
    rules: { kind: "video" },
  },
  { relPath: "public/assets/posters/lp1-save-hero.jpg", rules: { kind: "image" } },
  {
    relPath: "public/assets/video/lp2-share-hero-16x9.mp4",
    rules: { kind: "video" },
  },
  { relPath: "public/assets/posters/lp2-share-hero.jpg", rules: { kind: "image" } },
  {
    relPath: "public/assets/video/lp-video-hero-16x9.mp4",
    rules: { kind: "video" },
  },
  { relPath: "public/assets/posters/lp-video-hero.jpg", rules: { kind: "image" } },
  {
    relPath: "public/assets/video/lp-scan-hero-16x9.mp4",
    rules: { kind: "video" },
  },
  { relPath: "public/assets/posters/lp-scan-hero.jpg", rules: { kind: "image" } },
  {
    relPath: "public/assets/video/lp-generate-hero-16x9.mp4",
    rules: { kind: "video" },
  },
  { relPath: "public/assets/posters/lp-generate-hero.jpg", rules: { kind: "image" } },
  {
    relPath: "public/assets/video/lp-COOKBOOK-hero-16x9.mp4",
    rules: { kind: "video" },
  },
  { relPath: "public/assets/posters/lp-cookbook-hero.jpg", rules: { kind: "image" } },
  {
    relPath: "public/assets/video/lp-PDF-hero-16x9.mp4",
    rules: { kind: "video" },
  },
  { relPath: "public/assets/posters/lp-pdf-hero.jpg", rules: { kind: "image" } },
  {
    relPath: "public/assets/video/lp-heritage-hero-16x9.mp4",
    rules: { kind: "video" },
  },
  { relPath: "public/assets/posters/lp-heritage-hero.jpg", rules: { kind: "image" } },

  // Key screenshots (portrait captures)
  { relPath: "public/assets/screens/cap_03_share_to_heirloom.png", rules: { kind: "image" } },
  { relPath: "public/assets/screens/cap_03b_share_flow.png", rules: { kind: "image" } },
  { relPath: "public/assets/screens/cap_04_share.png", rules: { kind: "image" } },
  { relPath: "public/assets/screens/cap_04_shareb.png", rules: { kind: "image" } },
  { relPath: "public/assets/screens/cap_04_sharec.png", rules: { kind: "image" } },
  { relPath: "public/assets/screens/cap_04b_accept.png", rules: { kind: "image" } },
  { relPath: "public/assets/screens/cap_05_privacy_pills.png", rules: { kind: "image" } },
  { relPath: "public/assets/screens/cap_10_generate_result.png", rules: { kind: "image" } },
  { relPath: "public/assets/screens/cap_11_saved_recipe.png", rules: { kind: "image" } },
  { relPath: "public/assets/screens/cap_12_video_result.png", rules: { kind: "image" } },
  { relPath: "public/assets/screens/cap_13_attribution.png", rules: { kind: "image" } },
  { relPath: "public/assets/screens/cap_18_scan_result.png", rules: { kind: "image" } },
  { relPath: "public/assets/screens/reada.png", rules: { kind: "image" } },
  { relPath: "public/assets/screens/readb.png", rules: { kind: "image" } },

  // Backgrounds
  { relPath: "public/assets/bg/landing-hero.png", rules: { kind: "image" } },
  { relPath: "public/assets/bg/screenshot-frame.png", rules: { kind: "image" } },
  { relPath: "public/assets/press/presskit-header.png", rules: { kind: "image" } },

  // OG + favicon
  { relPath: "public/og/default.png", rules: { kind: "image", exactWidth: 1200, exactHeight: 630 } },
  { relPath: "public/brand/icon-1024.png", rules: { kind: "image", exactWidth: 1024, exactHeight: 1024 } },
];

const results = checks.map((c) => checkFile(c.relPath, c.rules));
const missing = results.filter((r) => r.messages.includes("missing"));
const failed = results.filter((r) => !r.ok && !r.messages.includes("missing"));
const ok = results.filter((r) => r.ok);

console.log("Asset audit");
console.log("===========");

for (const r of results) {
  const status = r.ok ? "OK " : "BAD";
  console.log(`${status}  ${r.relPath}  —  ${r.messages.join(", ")}`);
}

console.log("-----------");
console.log(`OK: ${ok.length}, Missing: ${missing.length}, Failed: ${failed.length}`);

if (failed.length > 0) process.exit(2);
if (missing.length > 0) process.exit(1);

