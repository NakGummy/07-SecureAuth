const tokenizer = (bignum1 = 100000, bignum2 = 900000) => {
  const result = Math.floor(bignum1 + Math.random() * bignum2).toString();

  return result;
};

export default tokenizer;
