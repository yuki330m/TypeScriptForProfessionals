
// 数値リテラル
const binary = 0b1010;
const octal = 0o755;
const hexadecumal = 0xff;
console.log("進数表示")
console.log(binary, octal, hexadecumal);

// 数が大きい、小さい場合の表し方
const big = 1e8;
const small = 4e-5;
console.log("大小の数を表す")
console.log(big, small);

// _区切り可能
const million = 1_000_000;
console.log("_区切りの確認");
console.log(million);

// bigint
const bigint: bigint = (123n + 456n) * 2n;
console.log("bigint");
console.log(bigint);

// テンプレートリテラル
const t_message: string = `/hello
world!`;
const t_m1: string = "hello"
const t_m2: string = "world!"
console.log("テンプレートリテラル");
console.log(t_message);
console.log(`${t_m1}, ${t_m2}`);

// 暗黙の型変換
// import { createInterface } from "readline";
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// rl.question('文字列を入力してください', (line) => {
//   console.log(`${line}が入力されました`);
  // rl.close();
// })
// rl.question('数値を入力してください', (line) => {
//   // 数値の足し算ではなく文字列の足し算になっている
//   console.log(line + 1000);
//   // 数値に変換
//   const num = Number(line);
//   console.log(num + 1000);
//   rl.close()
// })

// ??演算子
const secret = process.env.SECRET ?? "default";
console.log(`secretは${secret}です`);

