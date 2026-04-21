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
          background: "#2C2420",
          color: "#C9A96E",
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: "-0.05em",
          fontFamily: "Georgia, serif",
        }}
      >
        4B
      </div>
    ),
    { ...size },
  );
}
