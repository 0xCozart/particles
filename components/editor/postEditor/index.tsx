import { Editor } from "primereact/editor";
import { useState } from "react";
import EditorCard from "./EditorCard";

interface PostEditorProps {}

function PostEditor() {
  const [text1, setText1] = useState<string>("");
  return (
    // <div className="surface-border surface-card" style={{ height: "20em" }}>
    <>
      <EditorCard>
        <Editor
          style={{ height: "20em", font: "inherit" }}
          value={text1}
          onTextChange={(e) => setText1(e.textValue)}
          showHeader={true}
        />
      </EditorCard>
    </>
    // <EditorCard>
  );
}

export default PostEditor;
