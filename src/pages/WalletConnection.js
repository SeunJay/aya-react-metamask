import { Web3ReactProvider, useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";

import { injected } from "../utils/connectors";
import { useEagerConnect } from "../hooks/useEagerConnect";
import { useInactiveListener } from "../hooks/useInactiveListener";
import Spinner from "../components/Spinner";

const WalletConnection = () => {
  const context = useWeb3React();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;
  return <div>WalletConnection</div>;
};

export default WalletConnection;
