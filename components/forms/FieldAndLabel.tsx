import { Field } from "formik";

interface FieldAndlLabelProps {
  id: string;
  placeHolder: string;
  label: string;
}

function FieldAndLabel({ id, placeHolder, label }: FieldAndlLabelProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Field id={id} name={id} placeholder={placeHolder} type={"text"} />
    </>
  );
}

export default FieldAndLabel;
