import { useViewerConnection, useViewerRecord } from "@self.id/framework";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { setBasicProfile, setSessionSerial } from "../../../redux/selfidSlice";
import { CONNECTION, ConnectionStatus } from "../../../types/selfId";
import { evmSignIn } from "../../../utils/self-id";
import CustomToast from "../../toasts/CustomToast";

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
function SelfIdButton() {
  const [hasEthereum, setHasEthereum] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [connection, connect, disconnect] = useViewerConnection();
  const basicProfileRecord = useViewerRecord("basicProfile");
  const dispatch = useAppDispatch();

  useEffect(() => {
    // evm wallet check
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
      // set basic profile content to state
      dispatch(setBasicProfile({ payload: basicProfileRecord.content }));
      console.log({ basicProfileRecord });
    }
  }, [connection, basicProfileRecord, dispatch]);

  const handleConnect = async () => {
    if (!basicProfileRecord && connection.status !== CONNECTION.connected) {
      let sessionString = await evmSignIn(connect);
      dispatch(setSessionSerial(sessionString));
      console.log({ sessionString });
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
