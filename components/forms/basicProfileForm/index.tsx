import { BasicProfile, useViewerRecord } from "@self.id/framework";
import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import type { Entries } from "type-fest";
import { DefaultImageMetaData } from "../../../utils/self-id/basicProfile";
import FieldAndLabel from "../FieldAndLabel";

interface InnerFormProps {
  formData: Partial<BasicProfile>;
}

// BasicProfile Human Readable for form labels
// will refactor to be generated from json
const BPHumanReadable: { [T in keyof Partial<BasicProfile>]: string } = {
  name: "name",
  image: "profile image",
  description: "description",
  emoji: "profile emoji",
  background: "background image",
  url: "url",
};

function BasicProfileInnerForm({ formData }: InnerFormProps) {
  // jumping through hoops to get entries method on object
  const formDataEntries = Object.entries(formData) as Entries<typeof formData>;

  return (
    <>
      {formDataEntries.map((value, index) => {
        const label = value[0].toString();
        const inputType =
          "image" === label || "background" === label ? "image" : "text";

        return (
          <FieldAndLabel
            key={index}
            id={label}
            placeHolder={BPHumanReadable[label]}
            label={BPHumanReadable[label]}
            type={inputType}
          />
        );
      })}
    </>
  );
}

function BasicProfileForm() {
  const [formData, setFormData] = useState<BasicProfile>({});
  const record = useViewerRecord("basicProfile");

  useEffect(() => {
    if (record.isLoadable && record.content !== null) {
      setFormData({ ...record.content });
    }
  }, [record]);

  const onSubmit = () => {};

  const initialValues: BasicProfile = {
    name: "",
    image: DefaultImageMetaData,
    description: "",
    emoji: "",
    background: DefaultImageMetaData,
    birthDate: "",
    url: "",
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <BasicProfileInnerForm formData={initialValues} />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BasicProfileForm;
