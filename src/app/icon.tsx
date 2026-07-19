import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#030303",
          borderRadius: 8,
          border: "1px solid rgba(59, 130, 246, 0.35)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 15,
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
