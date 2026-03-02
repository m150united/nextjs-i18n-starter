import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "better-i18n - Next.js i18n Starter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            better-i18n
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.85)",
            }}
          >
            Next.js i18n Starter
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
