import { InputText } from "primereact/inputtext";

interface FieldAndlLabelProps {
  id: string;
  placeHolder: string;
}

function FieldAndLabel({ id, placeHolder }: FieldAndlLabelProps) {
  return (
    <>
      <InputText id={id} name={id} placeholder={placeHolder} />
    </>
  );
}

export default FieldAndLabel;
