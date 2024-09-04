const utcToJst = (utcTime) => {
  return new Date(utcTime).toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
};

export { utcToJst };
