import {
  BasicProfile,
  ImageSources,
  useViewerRecord,
} from "@self.id/framework";
import { Formik, FormikHelpers } from "formik";
import Image from "next/image";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { InputSwitch } from "primereact/inputswitch";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { setBasicProfile } from "../../../redux/selfidSlice";
import { uploadImage } from "../../../utils/self-id";
import { DefaultImageMetaData } from "../../../utils/self-id/basicProfile";

// BasicProfile Readable for form labels
// will refactor to be generated from json
const BPReadable: { [T in keyof Partial<BasicProfile>]: string } = {
  name: "name",
  description: "description",
  emoji: "profile emoji",
  url: "url",
  image: "profile image",
  background: "background image",
};

function BasicProfileCard() {
  const [profileImage, setProfileImage] = useState<File[] | null>(null);
  const [profileImageSource, setProfileImageSource] =
    useState<ImageSources | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<File[] | null>(null);
  const [backgroundImageSource, setBackgroundImageSource] =
    useState<ImageSources | null>(null);
  const record = useViewerRecord("basicProfile");
  const dispatch = useAppDispatch();

  // not sure if this will work as intended
  // meant to populate with the current basic profile
  const initialValues: BasicProfile = {
    name: "",
    image: DefaultImageMetaData,
    description: "",
    emoji: "",
    background: DefaultImageMetaData,
    birthDate: "",
    url: "",
    ...record.content,
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

  const onSubmit = async (
    values: BasicProfile,
    actions: FormikHelpers<BasicProfile>
  ) => {
    // action.validateForm((values: BasicProfile) => {
    //   console.log({ values });
    // });
    const updatedValues = formatValues(values);
    if (updatedValues && record.content) {
      await record.merge({ ...updatedValues });
      dispatch(setBasicProfile({ payload: { ...formatValues(values) } }));
    }
  };

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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => await onSubmit(values, actions)}
    >
      <div className="px-4 py-8 md:px-6 lg:px-8">
        <div className="text-900 font-medium text-900 text-xl mb-3">
          Profile
        </div>
        <p className="m-0 mb-4 p-0 text-600 line-height-3 mr-3">
          Update your
          <a href="https://self.id/"> Self.Id</a> profile on the
          <a href="https://ceramic.network/"> Ceramic Network.</a>
        </p>
        <div className="surface-card p-4 shadow-2 border-round">
          <div className="grid formgrid p-fluid">
            <div className="field mb-4 col-12">
              <label htmlFor="nickname2" className="font-medium text-900">
                Nickname
              </label>
              <InputText id="nickname2" type="text" />
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div className="field mb-4 col-12 md:col-6">
              <label htmlFor="description" className="font-medium text-900">
                Description
              </label>
              <InputTextarea id="description" rows={5} autoResize />
            </div>
            <div className="field mb-4 col-12 md:col-6">
              <label htmlFor="profile-image" className="font-medium text-900">
                Profile Avatar
              </label>
              <div className="flex align-items-center">
                <Image
                  src={initialValues.image?.original.src || ""}
                  alt="avatar-f-4"
                  className="mr-4"
                />
                <FileUpload
                  mode="basic"
                  name="profile-image"
                  id="image"
                  url="https://primefaces.org/primereact/showcase/upload.php"
                  accept="image/*"
                  maxFileSize={1000000}
                  onUpload={(event) => {
                    setProfileImage(event.files);
                  }}
                  auto
                  chooseLabel="Browse"
                />

                {/* <FileUpload
                  id="avatar2"
                  mode="basic"
                  name="avatar"
                  url="./upload.php"
                  accept="image/*"
                  maxFileSize={1000000}
                  chooseOptions={{
                    className: "p-button-plain p-button-outlined",
                  }}
                  chooseLabel="Upload Image"
                /> */}
              </div>
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div className="field mb-4 col-12 md:col-6">
              <label htmlFor="email2" className="font-medium text-900">
                Email
              </label>
              <InputText id="email2" type="text" />
            </div>
            <div className="field mb-4 col-12 md:col-6">
              <label htmlFor="country2" className="font-medium text-900">
                Country
              </label>
              {/* <Dropdown
              inputId="country2"
              options={countries}
              value={country2}
              onChange={(e) => setCountry2(e.value)}
              optionLabel="name"
              filter
              filterBy="name"
              showClear
              placeholder="Select a Country"
              itemTemplate={(country) => (
                <div className="flex align-items-center">
                  <Image
                    src="assets/images/blocks/flag/flag_placeholder.png"
                    className={`mr-2 flag flag-${country.code.toLowerCase()}`}
                    style={{ width: "18px" }}
                    alt={country.name}
                  />
                  <div>{country.name}</div>
                </div>
              )}
            /> */}
            </div>
            <div className="field mb-4 col-12 md:col-6">
              <label htmlFor="city2" className="font-medium text-900">
                City
              </label>
              <InputText id="city2" type="text" />
            </div>
            <div className="field mb-4 col-12 md:col-6">
              <label htmlFor="state2" className="font-medium text-900">
                State
              </label>
              <InputText id="state2" type="text" />
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div className="field mb-4 col-12">
              <label htmlFor="website2" className="font-medium text-900">
                Website
              </label>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">www</span>
                <InputText id="website2" type="text" />
              </div>
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div className="field mb-4 col-12">
              <label htmlFor="privacy2" className="font-medium text-900">
                Privacy
              </label>
              <div className="flex align-items-center">
                <InputSwitch
                  inputId="privacy2"
                  // checked={}
                  // onChange={(e) => setValue(e.value)}
                />
                <span className="ml-2">Share my data with contacts</span>
              </div>
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div className="col-12">
              <Button
                type="submit"
                label="Save Changes"
                className="w-auto mt-3"
              />
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
}

export default BasicProfileCard;
