/**
 * Canonical site origin for metadata (metadataBase, og:url).
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.4beauty.example).
 * On Vercel, falls back to https://VERCEL_URL when unset.
 */
export function getSiteUrlString(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//i, "");
    return `https://${host}`;
  }
  return "http://localhost:3000";
}

export function getMetadataBase(): URL {
  return new URL(`${getSiteUrlString()}/`);
}
