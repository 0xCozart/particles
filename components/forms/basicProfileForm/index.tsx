import {
  BasicProfile,
  ImageSources,
  useViewerRecord,
} from "@self.id/framework";
import { Form, Formik, FormikHelpers } from "formik";
import { Button } from "primereact/button";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import type { Entries } from "type-fest";
import { useAppDispatch } from "../../../redux/hooks";
import { setBasicProfile } from "../../../redux/selfidSlice";
import { uploadImage } from "../../../utils/self-id";
import { DefaultImageMetaData } from "../../../utils/self-id/basicProfile";
import FieldAndFileInput from "../FieldAndFileInput";
import FieldAndLabel from "../FieldAndLabel";
import "./form.module.css";

// BasicProfile Human Readable for form labels
// will refactor to be generated from json
const BPHumanReadable: { [T in keyof Partial<BasicProfile>]: string } = {
  name: "name",
  description: "description",
  emoji: "profile emoji",
  url: "url",
  image: "profile image",
  background: "background image",
};

interface InnerFormProps {
  formData: Partial<BasicProfile>;
  setProfileImage: Dispatch<SetStateAction<FileList | null>>;
  setBackgroundImage: Dispatch<SetStateAction<FileList | null>>;
}

function BasicProfileInnerForm({
  formData,
  setProfileImage,
  setBackgroundImage,
}: InnerFormProps) {
  // jumping through hoops to get entries method on object
  const formDataEntries = Object.entries(formData) as Entries<typeof formData>;

  return (
    <>
      {formDataEntries.map((value, index) => {
        const label: string = value[0].toString();

        return "image" === label || "background" === label ? (
          <FieldAndFileInput
            key={label}
            id={label}
            placeHolder={BPHumanReadable[label]!}
            label={BPHumanReadable[label]!}
            setFile={"image" === label ? setProfileImage : setBackgroundImage}
          />
        ) : (
          <FieldAndLabel
            key={label}
            id={label}
            placeHolder={BPHumanReadable[label]}
            label={BPHumanReadable[label]}
          />
        );
      })}
    </>
  );
}

function BasicProfileForm() {
  // const [formData, setFormData] = useState<BasicProfile>({});
  const [profileImage, setProfileImage] = useState<FileList | null>(null);
  const [profileImageSource, setProfileImageSource] =
    useState<ImageSources | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<FileList | null>(null);
  const [backgroundImageSource, setBackgroundImageSource] =
    useState<ImageSources | null>(null);
  const record = useViewerRecord("basicProfile");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (record.isLoadable && record.content !== null) {
      // setFormData({ ...record.content });
    }

    if (profileImage) {
      (async () => {
        setProfileImageSource(await uploadImage(profileImage[0]));
      })();
    }

    if (backgroundImage) {
      (async () => {
        setBackgroundImageSource(await uploadImage(backgroundImage[0]));
      })();
    }
  }, [record.isLoadable, record.content, profileImage, backgroundImage]);

  // not sure if this will work as intended
  const initialValues: BasicProfile = {
    name: "",
    image: DefaultImageMetaData,
    description: "",
    emoji: "",
    background: DefaultImageMetaData,
    birthDate: "",
    url: "",
    // ...record.content,
  };

  const formatValues = (values: BasicProfile): BasicProfile => {
    let output: BasicProfile = {};
    for (const key in values) {
      if (key === "image" && profileImageSource) {
        output[key] = profileImageSource;
      } else if (key === "background" && backgroundImageSource) {
        output[key] = backgroundImageSource;
      } else {
        output[key] = values[key];
      }
    }
    return output;
  };

  const onSubmit = (
    values: BasicProfile,
    action: FormikHelpers<BasicProfile>
  ) => {
    // action.validateForm((values: BasicProfile) => {
    //   console.log({ values });
    // });
    dispatch(setBasicProfile({ payload: { ...formatValues(values) } }));
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
            <BasicProfileInnerForm
              formData={initialValues}
              setProfileImage={setProfileImage}
              setBackgroundImage={setBackgroundImage}
            />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BasicProfileForm;
