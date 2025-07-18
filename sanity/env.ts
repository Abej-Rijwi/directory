export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-14";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const token = assertValue(
  process.env.SANITY_TOKEN,
  "Missing environment variable: SANITY_TOKEN"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (typeof v === "undefined" || v === "") {
    throw new Error(errorMessage);
  }
  return v;
}
