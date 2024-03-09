export const getToTen = (base) => {
  return (
    (base > 10 && Number(`${base / 10}`.split(".")[1])) ||
    (base > 100 && Number(`${base / 100}`.split(".")[1])) ||
    base
  );
};

export const getColorByCount = (count) => {
  const colors = {
    0: "#FFF2A9",
    1: "#433212",
    2: "#442900",
    3: "#15010A",
    4: "#7C2B0A",
    5: "#E74800",
    6: "#C6121A",
    7: "#291214",
    8: "#00305A",
    9: "#07A6CB",
    10: "#001A28",
  };
  const base = count % Object.keys(colors).length || count;
  return colors[base] || colors[10];
};

export const getRandomNumber = (min = 1, max = 100) => {
  return Math.floor(Math.random() * max) + min;
};
