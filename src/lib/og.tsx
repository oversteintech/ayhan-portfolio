import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Language-neutral social card: name, portrait, and domain render correctly for every locale. */
export async function renderOgImage() {
  const portrait = await readFile(join(process.cwd(), "public", "profile.jpg"));
  const src = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f5f1e8", color: "#1c1b18", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(to right, rgba(42,84,128,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(42,84,128,0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 0 72px 80px", width: 760 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ display: "flex", width: 56, height: 56, borderRadius: 999, border: "2px solid #1c1b18", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
              AU
            </div>
            <div style={{ display: "flex", width: 60, height: 2, background: "#8a4b0c" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 96, letterSpacing: "-0.04em", lineHeight: 1 }}>Ayhan Uzundal</div>
            <div style={{ display: "flex", gap: 16, alignItems: "center", fontSize: 28, color: "#3d3831" }}>
              <div style={{ display: "flex", width: 10, height: 10, borderRadius: 999, background: "#2a5480" }} />
              <div style={{ display: "flex", width: 10, height: 10, borderRadius: 999, background: "#2f5e45" }} />
              <div style={{ display: "flex", width: 10, height: 10, borderRadius: 999, background: "#8a4b0c" }} />
            </div>
          </div>
          <div style={{ fontSize: 26, color: "#3d3831" }}>ayhanuzundal.com.tr</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1, paddingRight: 70 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#fbf9f4",
              padding: 16,
              border: "1px solid #ddd5c6",
              boxShadow: "0 30px 60px -30px rgba(28,27,24,0.45)",
              transform: "rotate(-2deg)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse only renders plain <img> */}
            <img src={src} width={300} height={440} alt="" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
