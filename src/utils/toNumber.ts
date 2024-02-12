export const toNumber = (value: number | string | null | undefined) => {
  return typeof value === "string" ? Number(value || 0).valueOf() : Number(value ?? 0).valueOf();
};
