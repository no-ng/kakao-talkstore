export function calcRatio(x: number, y: number, x2: number): number {
  return (y * x2) / x;
}

export function encodeQuery(params?: Record<string, string | number>): string {
  if (!params) {
    return '';
  }

  let query = '';

  for (const key in params) {
    query += `${key}=${params[key]}&`;
  }

  return `?${query.slice(0, -1)}`;
}
