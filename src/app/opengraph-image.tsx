import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Heirloom Recipe Box — Preserve Your Family's Recipes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const iconData = await fetch(
    new URL("../../public/brand/icon-1024.png", import.meta.url)
  ).then((r) => r.arrayBuffer());

  const screenData = await fetch(
    new URL("../../public/assets/screens/cap_recipe_detail.png", import.meta.url)
  ).then((r) => r.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#faf5f0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Warm gradient blob top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196,90,64,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Subtle blob bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196,90,64,0.10) 0%, transparent 70%)",
          }}
        />

        {/* App screenshot — right side */}
        <div
          style={{
            position: "absolute",
            right: 60,
            top: 40,
            width: 260,
            height: 560,
            borderRadius: 36,
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={screenData as unknown as string}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 72,
            paddingRight: 340,
            height: "100%",
            gap: 0,
          }}
        >
          {/* Logo row */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={iconData as unknown as string}
              style={{ width: 52, height: 52, borderRadius: 14, border: "1px solid rgba(0,0,0,0.10)" }}
            />
            <span style={{ fontSize: 20, fontWeight: 600, color: "#1a1a1a", letterSpacing: "-0.3px" }}>
              Heirloom Recipe Box
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              marginBottom: 20,
            }}
          >
            Preserve your family&apos;s recipes.
          </div>

          {/* Subhead */}
          <div
            style={{
              fontSize: 22,
              color: "rgba(0,0,0,0.55)",
              lineHeight: 1.4,
              fontWeight: 400,
              maxWidth: 520,
            }}
          >
            Capture from video, scan, voice, URL, PDF, or AI — and pass them down forever.
          </div>

          {/* App Store badge */}
          <div
            style={{
              marginTop: 36,
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#1a1a1a",
              borderRadius: 999,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
              alignSelf: "flex-start",
            }}
          >
            <span style={{ fontSize: 15, color: "#fff", fontWeight: 600 }}>
              Download on the App Store
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
