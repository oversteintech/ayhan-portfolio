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
          background: "#050505",
          borderRadius: 8,
          border: "1px solid rgba(196,165,116,0.45)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            fontFamily: "Georgia, serif",
          }}
        >
          <span style={{ color: "#f4f4f5" }}>AU</span>
          <span style={{ color: "#c4a574" }}>.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
