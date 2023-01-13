import { Dispatch, SetStateAction } from "react";

interface FieldAndlLabelProps {
  id: string;
  placeHolder: string;
  label: string;
  setFile: Dispatch<SetStateAction<FileList | null>>;
}

function FieldAndFileInput({
  id,
  placeHolder,
  label,
  // setFile is passed down react state hook
  setFile,
}: FieldAndlLabelProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        placeholder={placeHolder}
        type={"file"}
        onChange={(event) => setFile(event.target.files)}
        accept="image/png, image/jpeg"
      />
    </>
  );
}

export default FieldAndFileInput;
