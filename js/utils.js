// [min, max) 랜덤값 반환
export const randomNumBetween = (min, max) => {
  return Math.random() * (max - min) + min;
};
