import { useViewerConnection } from "@self.id/framework";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { CONNECTION, ConnectionStatus } from "../../types/selfId";
import { ethereumSignIn } from "../../utils/self-id";

// declare let window: any;

interface ConnectButtonProps {
  connection: ConnectionStatus;
  handleClick: () => void;
}

function ConnectButton(props: ConnectButtonProps) {
  const { connection, handleClick } = props;
  return (
    <Button
      disabled={connection === CONNECTION.connecting}
      loading={connection === CONNECTION.connecting}
      onClick={async () => {
        await handleClick();
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

interface DisconnectButtonProps {
  handleClick: () => void;
}

function DisconnectButton(props: DisconnectButtonProps) {
  return <Button onClick={() => props.handleClick()} label="Disconnect" />;
}

// Initiates signature through ethereum provider
// A Provider must be preset at a higher level for the `useViewConnection` hook to work.
function SelfIdButton() {
  // const [status, setStatus] = useState<ConnectionStatus>("idle");
  const [hasEthereum, setHasEthereum] = useState(false);
  const [connection, connect, disconnect] = useViewerConnection();

  useEffect(() => {
    if (window.ethereum) {
      setHasEthereum(true);
    }
  }, []);

  const handleConnect = async () => {
    await ethereumSignIn(connect);
  };

  const handleDisconnect = () => {
    disconnect();
  };

  // need to refactor this lmao
  return connection.status === CONNECTION.connected ? (
    <DisconnectButton handleClick={handleDisconnect} />
  ) : hasEthereum ? (
    <ConnectButton connection={connection.status} handleClick={handleConnect} />
  ) : (
    <p>
      An injected Ethereum provider such as{" "}
      <a href="https://metamask.io/">MetaMask</a> is needed to authenticate.
    </p>
  );
}

export default SelfIdButton;
