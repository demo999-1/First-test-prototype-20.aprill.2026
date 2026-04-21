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
          background: "linear-gradient(145deg, #2C2420 0%, #1A1A18 100%)",
          color: "#C9A96E",
          fontSize: 72,
          fontWeight: 300,
          fontFamily: "Georgia, serif",
        }}
      >
        4B
      </div>
    ),
    { ...size },
  );
}
