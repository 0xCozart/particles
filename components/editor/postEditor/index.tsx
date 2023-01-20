import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Editor } from "primereact/editor";

import { useState } from "react";

interface PostEditorProps {}

function PostEditor() {
  const [text1, setText1] = useState<string>("");
  const [showHeader, setShowHeader] = useState<boolean>(false);

  const footer = (
    <span>
      <Button label="Publish" icon="pi pi-cloud-upload" />
    </span>
  );

  return (
    // <div className="surface-border surface-card" style={{ height: "20em" }}>
    <div className="flex">
      <Card footer={footer}>
        <Editor
          style={{ height: "20em", width: "20em", font: "inherit" }}
          value={text1}
          onTextChange={(e) => setText1(e.textValue)}
          showHeader={showHeader}
        />
      </Card>
    </div>
    // <EditorCard>
  );
}

export default PostEditor;
