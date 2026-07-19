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
          background: "linear-gradient(135deg, #030303 0%, #111111 100%)",
          borderRadius: 36,
          border: "2px solid rgba(59, 130, 246, 0.3)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span style={{ color: "#f0f0f0" }}>AU</span>
          <span style={{ color: "#3b82f6" }}>.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
