export function paginate<T>(items: T[], pageSize = 9) {
  return (page = 1) => {
    const total = items.length;
    const pages = Math.max(1, Math.ceil(total / pageSize));
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return { page, pages, total, items: items.slice(start, end) };
  };
}
