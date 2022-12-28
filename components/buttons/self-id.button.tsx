import {
  EthereumAuthProvider,
  useViewerConnection,
  ViewerConnectionState,
} from "@self.id/framework";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";

// declare let window: any;

interface SignInButtonProps {
  connection: ViewerConnectionState;
  handleClick: () => void;
}

function ConnectButton(props: SignInButtonProps) {
  const { connection } = props;
  return (
    <Button
      disabled={connection.status === "connecting"}
      loading={loading}
      onClick={async () => {
        setLoading(true);
        let accounts;
        let selfId;
        if (window.ethereum.request)
          accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
        if (accounts) {
          selfId = await connect(
            new EthereumAuthProvider(window.ethereum, accounts[0])
          );
          console.log({ selfId });
          setLoading(false);
          console.log({ connection });
        }
        // if (selfId) {
        //   const session = connection.selfID
        //     ? connection.selfID.client.session
        //     : null;
        //   session.serialize();
        // }
      }}
      label="Connect"
    />
  );
}

// A button to initiate the connection flow.
// A Provider must be preset at a higher level for the `useViewConnection` hook to work.
function SignInButton() {
  const [loading, setLoading] = useState(false);
  const [hasEthereum, setHasEthereum] = useState(false);
  const [connection, connect, disconnect] = useViewerConnection();

  useEffect(() => {
    if (window.ethereum) {
      setHasEthereum(true);
    }
  }, []);

  // need to refactor this lmao
  return connection.status === "connected" ? (
    <Button
      onClick={() => {
        disconnect();
      }}
      label="Disconnect"
    />
  ) : hasEthereum ? (
    <ConnectButton connection={connection} />
  ) : (
    <p>
      An injected Ethereum provider such as{" "}
      <a href="https://metamask.io/">MetaMask</a> is needed to authenticate.
    </p>
  );
}

export default SignInButton;
