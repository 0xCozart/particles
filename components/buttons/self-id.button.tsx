import { useViewerConnection } from "@self.id/framework";
import { Button } from "primereact/button";
import { useContext, useEffect, useState } from "react";
import { CONNECTION, ConnectionStatus } from "../../types/selfId";
import { AppContext } from "../../utils/context";
import { ethereumSignIn, UseBasicProfile } from "../../utils/self-id";
import CustomToast from "../toasts/CustomToast";

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
  const [warningMessage, setWarningMessage] = useState("");
  const [connection, connect, disconnect] = useViewerConnection();
  const { context, setContext } = useContext(AppContext);
  const [basicProfile] = UseBasicProfile();

  useEffect(() => {
    if (window.ethereum) {
      setHasEthereum(true);
    } else {
      setHasEthereum(false);
      setWarningMessage(
        "An injected Ethereum provider such as MetaMask is needed to authenticate."
      );
    }
    if (connection.status === CONNECTION.failed) {
      setWarningMessage("sign-in has failed.");
    }

    if (connection.status === CONNECTION.connected) {
      setContext(basicProfile);
    }
  }, [connection, setContext]);

  const handleConnect = async () => {
    if (!context?.basicProfile && connection.status !== CONNECTION.connected) {
      await ethereumSignIn(connect);
    }
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
    <CustomToast
      appear={!hasEthereum && connection.status !== CONNECTION.failed}
      message={warningMessage}
      severity={"warn"}
    />
    // <p>
    //   An injected Ethereum provider such as{" "}
    //   <a href="https://metamask.io/">MetaMask</a> is needed to authenticate.
    // </p>
  );
}

export default SelfIdButton;
