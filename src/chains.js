const Mantle = {
  hex: "0x1389",
  name: "Mantle",
  rpcUrl: "https://rpc.ankr.com/mantle_testnet",
  ticker: "MNT",
};

const MumbaiTestnet = {
  hex: "0x13881",
  name: "Polygon Mumbai Testnet",
  rpcUrl:
    "https://polygon-mumbai.g.alchemy.com/v2/EwYGlLqaIoNe2mkStZ_xnoRBLECVs4JS",
  ticker: "MATIC",
};
const zkEVMTestnet = {
  hex: "0x5a2",
  name: "Polygon zkEVM Testnet",
  rpcUrl:
    "https://polygonzkevm-testnet.g.alchemy.com/v2/uswuFewKUYx2EaPypjMlDFuUxKBpMcAK",
  ticker: "ETH",
};
const ScrollTestnet = {
  hex: "0x8274f",
  name: "Scroll Testnet",
  rpcUrl:
    "https://tame-crimson-daylight.scroll-testnet.discover.quiknode.pro/12fd87f7c39ce1625785e9cd827f1496c47a1ddd/",
  ticker: "ETH",
};

export const CHAINS_CONFIG = {
  "0x1389": Mantle,
  "0x13881": MumbaiTestnet,
  "0x5a2": zkEVMTestnet,
  "0x8274f": ScrollTestnet,
};
