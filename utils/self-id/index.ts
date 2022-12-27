import { useViewerRecord } from "@self.id/framework";

declare let window: any;

async function UseRecord() {
  const record = useViewerRecord("basicProfile");
  const basicProfileContent = record.isLoading;

  return record ? record : null;
}

// This will change to check if did is authenticated and if session is live or expired
function isSignedIn() {
  return window.did ? true : false;
}

export { UseRecord, isSignedIn };
