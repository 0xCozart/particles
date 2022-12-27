import { useViewerRecord } from "@self.id/framework";
import React from "react";

function ProfileButton() {
  const record = useViewerRecord("basicProfile");
  console.log({ record });

  return (
    <p>{record.content ? (record.content as unknown as string) : "null"}</p>
  );
}

export default ProfileButton;
