import {
  BasicProfile,
  EthereumAuthProvider,
  SelfID,
  ViewerRecord,
} from "@self.id/framework";
import { uploadImage as ipfsImageUpload } from "@self.id/image-utils";
import { WebClientSession } from "@self.id/web";

async function updateBasicProfile(
  record: ViewerRecord<BasicProfile | null>,
  fieldAndKey: object
) {
  if ((record.isMutable || !record.isMutating) && record.content) {
    await record.merge({ ...record.content, ...fieldAndKey });
  }
}

// This will change to check if did is authenticated and if session is live or expired
function isSignedIn() {
  return "did" in window ? true : false;
}

function serializeSession(selfid: SelfID): string | null {
  // will most likely need a type check here
  const session = (selfid.client as WebClientSession).session;
  if (session) {
    return session.serialize();
  } else {
    return null;
  }
}

// doesnt need to return anything since useViewerConnection hook gives connection status
async function evmSignIn(connect: (provider: EthereumAuthProvider) => void) {
  let sessionString: string | null = null;
  try {
    if (!isSignedIn()) {
      let accounts;
      if (window.ethereum.request) {
        accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
      }
      if (accounts) {
        const selfid: unknown = await connect(
          new EthereumAuthProvider(window.ethereum, accounts[0])
        );
        sessionString = serializeSession(selfid as SelfID);
      }
    }
  } catch (e) {
    console.error(e);
  }
  return sessionString;
}

async function uploadImage(file: File) {
  return ipfsImageUpload("https://ipfs.infura.io:5001/api/v0", file, [
    { width: 60, height: 60 },
    { width: 200, height: 200 },
  ]);
}

export { updateBasicProfile, isSignedIn, evmSignIn, uploadImage };
