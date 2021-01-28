export function generateArrayObj<T>(total: number, generateFunc: () => T): T[] {
  const generateData = [];
  for (let index = 0; index < total; index++) {
    const element = generateFunc();
    generateData.push(element);
  }
  return generateData;
}
