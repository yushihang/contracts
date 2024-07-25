const fs = require("fs");
const path = require("path");

// 指定合约 JSON 文件的路径
const contractPath = path.join(
  __dirname,
  "artifacts",
  "contracts",
  "state",
  "State.sol",
  "State.json",
);

// 读取合约 JSON 文件
const contractJson = JSON.parse(fs.readFileSync(contractPath, "utf8"));

// 获取 bytecode
const bytecode = contractJson.bytecode;

// 指定输出文件路径
const outputPath = path.join(__dirname, "build", "State.bin");

// 确保输出目录存在
if (!fs.existsSync(path.dirname(outputPath))) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

// 写入 bytecode 到 .bin 文件
fs.writeFileSync(outputPath, bytecode);

console.log(`Bytecode saved to ${outputPath}`);
