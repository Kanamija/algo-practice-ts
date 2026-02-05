const cache: Record<string, number> = {};

const gridPaths = (n: number, m: number): number => {
  const key = `${n},${m}`;

  const cached = cache[key];
  if (cached !== undefined) return cache[key;]

  if (n === 1 || m === 1) return 1;

  cache[key] = gridPaths(n, m - 1) + gridPaths(n - 1, m);

  return cache[key];
};

console.log(gridPaths(1, 2));
console.log(gridPaths(8, 2));
console.log(gridPaths(3, 3));
console.log(gridPaths(4, 4));
console.log(gridPaths(5, 5));
console.log(gridPaths(10, 10));