import { EthereumAuthProvider, useViewerRecord } from "@self.id/framework";

async function UseRecord() {
  const record = useViewerRecord("basicProfile");
  const basicProfileContent = record.isLoading;

  return record ? record : null;
}

// This will change to check if did is authenticated and if session is live or expired
function isSignedIn() {
  return window.did ? true : false;
}

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
    }
  } catch (e) {
    console.error(e);
    return e;
  }
}

async function ethereumSignOut(disconnect: () => void) {
  await disconnect();
}

export { UseRecord, isSignedIn };
