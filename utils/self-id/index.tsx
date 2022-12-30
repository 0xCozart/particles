import {
  EthereumAuthProvider,
  SelfID,
  useViewerRecord,
} from "@self.id/framework";
import { WebClientSession } from "@self.id/web";
import { useEffect, useState } from "react";

async function UseBasicProfile() {
  const record = useViewerRecord("basicProfile");
  const [basicProfile, setBasicProfile] = useState<unknown>();
  // not sure if this will properly update lmao
  async function updateBasicProfile(fieldAndKey: object) {
    if ((record.isMutable || !record.isMutating) && record.content) {
      await record.merge({ ...record.content, ...fieldAndKey });
    }
  }
  // useEffect to update context when basicProfle is updated
  useEffect(() => {
    if (!record.isLoading) {
      setBasicProfile(record.content);
    }
  }, [record.isLoading, record.content]);

  return [basicProfile, updateBasicProfile];
}

// This will change to check if did is authenticated and if session is live or expired
function isSignedIn() {
  return "did" in window ? true : false;
}

// doesnt need to return anything since useViewerConnection hook gives connection status
async function ethereumSignIn(
  connect: (provider: EthereumAuthProvider) => void
) {
  try {
    if (!isSignedIn()) {
      let accounts;
      let selfId;
      if (window.ethereum.request) {
        accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
      }

      if (accounts) {
        selfId = await connect(
          new EthereumAuthProvider(window.ethereum, accounts[0])
        );
      }

      return selfId;
    }
  } catch (e) {
    console.error(e);
  }
}

function serializeSession(selfid: SelfID) {
  // will most likely need a type check here
  const session = (selfid.client as WebClientSession).session;
  if (session) {
    session.serialize();
    return true;
  } else {
    return false;
  }
}

// async function ethereumSignOut(
//   disconnect: () => void
// ): Promise<ConnectionStatus> {
//   await disconnect();
//   return CONNECTION.idle;
// }

export { UseBasicProfile, isSignedIn, ethereumSignIn, serializeSession };
