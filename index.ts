// supported protocols
export const protocols = {
  compound: {
    name: "Compound",
    path: "compound",
    description:
      "Compound is a decentralized money market protocol to borrow and lend assets.",
    suffix: "COMP",
    folder: "compound",
  },
  uniswap: {
    name: "Uniswap",
    path: "uniswap",
    description:
      "Uniswap is a decentralized protocol for automated liquidity provision on Ethereum.",
    suffix: "UNI",
    folder: "uniswap",
  },
  synthetix: {
    name: "Synthetix",
    path: "snxgov.eth",
    description:
      "Synthetix is a decentralised synthetic asset issuance protocol built on Ethereum.",
    suffix: "SC-NFT",
    folder: "synthetix",
    safeAddress: "0x438679ECE13EDB95aDD18Ed02dDbf5e2418FF730",
  },
  yearn: {
    name: "Yearn",
    path: "yearn",
    description:
      "yEarn is an automated liquidity aggregator offering a number of yield farming opportunities.",
    suffix: "YFI",
    folder: "yearn",
  },
  powerpool: {
    name: "Powerpool",
    path: "powerpool",
    description:
      "PowerPool is a cross-chain lending protocol for governance tokens.",
    suffix: "CVP",
    folder: "compound",
  },
  rarible: {
    name: "Rarible",
    path: "rarible",
    description:
      "Rarible is the premiere NFT marketplace to mint, buy, and sell digital collectibles.",
    suffix: "RARI",
    folder: "rarible",
  },
  pooltogether: {
    name: "PoolTogether",
    path: "pooltogether",
    description:
      "PoolTogether is a protocol enabling governance-managed, no-loss prize games on Ethereum.",
    suffix: "PcDAI",
    folder: "pooltogether",
  },
  "gnosis.eth": {
    name: "Gnosis",
    path: "gnosis.eth",
    description:
      "GnosisDAO uses Gnosis products to transparently guide decisions on development, support, and governance of its token ecosystem.",
    suffix: "GNO",
    folder: "gnosis.eth",
  },
  defidollar: {
    name: "DefiDollar DAO",
    path: "defidollar",
    description:
      "DUSD is a stablecoin controlled by a DAO using DeFi primitives to remain pegged to the Dollar.",
    suffix: "DFD",
    folder: "defidollar",
  },
  indexCoop: {
    name: "Index",
    path: "index",
    description:
      "The Index Coop is an autonomous asset manager governed, maintained, and upgraded by INDEX token holders.",
    suffix: "INDEX",
    folder: "indexCoop",
  },
  rally: {
    name: "Rally",
    path: 'rally',
    description: "Rally’s is a decentralized network enabling creators to monetize and align themselves with their community.",
    suffix: "RLY",
    folder: 'rally'
  },
  siren: {
    name: "Siren",
    path: "siren",
    description:
      "Siren is a distributed protocol for creating, trading, and redeeming fully-collateralized options contracts.",
    suffix: "SI",
    folder: "siren",
  },
  aave: {
    name: "Aave",
    path: "aave",
    description:
      "Aave is an open source and non-custodial protocol enabling the creation of money markets.",
    suffix: "LEND",
    folder: "aave",
  },
  balancer: {
    name: "Balancer",
    path: "balancer",
    description: "Balancer is a non-custodial portfolio manager, liquidity provider, and price sensor.",
    suffix: "BAL",
    folder: "balancer",
  },
  yamv2: {
    name: "Yam",
    path: "yamv2",
    description: "Yam is an experiment in fair farming, governance, and elasticity controlled by the community.",
    suffix: "YAM",
    folder: "yamv2",
  },
  "yup.eth": {
    name: "Yup",
    path: "yup.eth",
    description: "Your opinion matters. Curate the web. Earn & influence.",
    suffix: "YUP",
    folder: "yup",
    snapshotSpaceName: "yup.eth",
    safeAddress: "0xbd5224f66D5ce49a8Afefc14a76248D158D14c6F",
  },
  "gov.dhedge.eth": {
    name: "dHEDGE",
    path: "gov.dhedge.eth",
    description: "Non-custodial, decentralized asset management for synthetic assets on Ethereum",
    suffix: "DHT",
    folder: "dhedge",
    snapshotSpaceName: "gov.dhedge.eth",
  },
};

export const protocolBranding = {
  pooltogether: {
    "--background-primary-nav": "#290b5a",
    "--color-text-nav": "#e7e8eb",
    "--background-switcher-active": "#341762",
  },
  defidollar: {
    "--background-primary-nav": "#212529",
    "--color-text-nav": "#e7e8eb",
    "--background-switcher-active": "#5553e8",
  },
};
