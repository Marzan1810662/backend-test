const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const p1p2 = async (i) => {
//   if (i === 3) {
//     throw new Error("Error");
//   }
  console.log(`processing 1 promise ${i}`);
  await delay(5000);
  console.log(`Processing 2 promise ${i}`);
};

const main = async () => {
  const promiseArr = [];
  for (let i = 0; i < 5; i++) {
    promiseArr.push(p1p2(i));
  }
  const t = await Promise.all(promiseArr);
  console.log("Processing 3");
};

main();