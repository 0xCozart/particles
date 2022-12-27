import { useViewerRecord } from "@self.id/framework";

function UseRecord() {
  const record = useViewerRecord("basicProfile");

  return record ? record : null;
}

export { UseRecord };
