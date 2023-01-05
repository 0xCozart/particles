import { BasicProfile, useViewerRecord } from "@self.id/framework";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { defaultImageMetaData } from "../../../utils/self-id/basicProfile";

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
    image: defaultImageMetaData,
    description: "",
    emoji: "",
    background: defaultImageMetaData,
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
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default BasicProfileForm;
