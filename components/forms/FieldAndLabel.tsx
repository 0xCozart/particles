import { Field } from "formik";
import { HTMLInputTypeAttribute } from "react";

interface FieldAndlLabelProps {
  id: string;
  placeHolder: string;
  label: string;
  type: HTMLInputTypeAttribute;
}

function FieldAndLabel({ id, placeHolder, label, type }: FieldAndlLabelProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Field id={id} name={id} placeholder={placeHolder} type={type} />
    </>
  );
}

export default FieldAndLabel;
