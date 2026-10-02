import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "#f5f1e8",
          borderRadius: 32,
          border: "3px solid #1c1b18",
          color: "#1c1b18",
          fontSize: 28,
          fontFamily: "Georgia, serif",
          letterSpacing: "-0.04em",
        }}
      >
        AU
      </div>
    ),
    { ...size },
  );
}
