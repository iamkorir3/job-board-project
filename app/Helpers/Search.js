export function search(items, query, searchFields) {
  if (!query || !items) return items;

  const lowerQuery = query.toLowerCase();

  return items.filter((item) =>
    searchFields.some((field) =>
      String(item[field]).toLowerCase().includes(lowerQuery)
    )
  );
}
