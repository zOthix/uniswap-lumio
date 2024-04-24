const projectId = process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID ?? '';

const mainnet = {
  chainId: process.env.REACT_APP_CHAIN_ID ? Number(process.env.REACT_APP_CHAIN_ID) : 1,
  name: 'Rootstock',
  currency: 'ETH',
  explorerUrl: process.env.REACT_APP_EXPLORER_URL!,
  rpcUrl: process.env.REACT_APP_NETWORK_URL!,
};

const metadata = {
  name: 'Rootstock',
  description: 'Rootstock Swap',
  url: 'https://rootstock.io/',
  icons: [''],
};

export {
    projectId,
    mainnet,
    metadata
}