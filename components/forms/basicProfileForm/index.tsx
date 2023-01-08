import { BasicProfile, useViewerRecord } from "@self.id/framework";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
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
  // jump through hoops to get entries method on object
  const formDataEntries = Object.entries(formData) as Entries<typeof formData>;

  return (
    <>
      {formDataEntries.map((value, index) => {
        const label = value[0].toString();

        return (
          <FieldAndLabel
            key={index}
            id={label}
            placeHolder={BPHumanReadable[label]}
            label={BPHumanReadable[label]}
            type={"image"}
          />
        );
      })}
    </>
  );
}

function BasicProfileForm() {
  const [forData, setFormData] = useState<BasicProfile>({});
  const record = useViewerRecord("basicProfile");

  //   useEffect(() => {
  //     if (record.isLoadable && record.content !== null) {
  //       setFormData({ ...record.content });
  //     }
  //   });
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
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="First Name" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BasicProfileForm;
