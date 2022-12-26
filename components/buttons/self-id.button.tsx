import { EthereumAuthProvider, useViewerConnection } from "@self.id/framework";

declare let window: any;
// A button to initiate the connection flow.
// A Provider must be preset at a higher level for the `useViewConnection` hook to work.
function ConnectButton() {
  const [connection, connect, disconnect] = useViewerConnection();

  // need to refactor this lmao
  return connection.status === "connected" ? (
    <button
      onClick={() => {
        disconnect();
      }}
    >
      Disconnect ({connection.selfID.id})
    </button>
  ) : "ethereum" in window ? (
    <button
      disabled={connection.status === "connecting"}
      onClick={async () => {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await connect(new EthereumAuthProvider(window.ethereum, accounts[0]));
      }}
    >
      Connect
    </button>
  ) : (
    <p>
      An injected Ethereum provider such as{" "}
      <a href="https://metamask.io/">MetaMask</a> is needed to authenticate.
    </p>
  );
}

export default ConnectButton;
