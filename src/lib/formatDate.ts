export default function formatDate(d: Date | string) {
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" });
}
