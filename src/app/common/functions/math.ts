/**
 * Premapuje hodnotu x z intervalu [a1, a2] na interval [b1, b2].
 *
 * @param x Vstupná hodnota, ktorá sa má premapovať.
 * @param a1 Dolná hranica vstupného intervalu.
 * @param a2 Horná hranica vstupného intervalu.
 * @param b1 Dolná hranica výstupného intervalu.
 * @param b2 Horná hranica výstupného intervalu.
 * @returns Hodnota premapovaná do výstupného intervalu.
 */
export const mapRange = (
  x: number,
  a1: number,
  a2: number,
  b1: number,
  b2: number
): number => {
  // Lineárna interpolácia
  // Najprv normalizujeme x do rozsahu [0, 1] v rámci vstupného intervalu
  const normalizedX = (x - a1) / (a2 - a1);
  // Potom túto normalizovanú hodnotu škálujeme na výstupný interval
  const mappedValue = b1 + normalizedX * (b2 - b1);
  return mappedValue;
};

export const getRandomInt = (min: number, max: number) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};
