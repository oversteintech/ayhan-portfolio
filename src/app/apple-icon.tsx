import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f1e8",
          color: "#1c1b18",
          fontSize: 76,
          letterSpacing: "-0.05em",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 132, height: 132, borderRadius: 999, border: "4px solid #1c1b18" }}>
          AU
        </div>
      </div>
    ),
    { ...size },
  );
}
