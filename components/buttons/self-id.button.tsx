import { EthereumAuthProvider, useViewerConnection } from "@self.id/framework";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";

// declare let window: any;

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
    <Button
      disabled={connection.status === "connecting"}
      loading={loading}
      onClick={async () => {
        setLoading(true);
        let accounts;
        if (window.ethereum.request)
          accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
        if (accounts)
          await connect(
            new EthereumAuthProvider(window.ethereum, accounts[0])
          ).then(() => setLoading(false));
      }}
      label="Connect"
    />
  ) : (
    <p>
      An injected Ethereum provider such as{" "}
      <a href="https://metamask.io/">MetaMask</a> is needed to authenticate.
    </p>
  );
}

export default SignInButton;
