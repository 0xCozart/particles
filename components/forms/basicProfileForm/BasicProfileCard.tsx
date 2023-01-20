import Image from "next/image";
import { Dropdown } from "primereact/dropdown";
import { FileUpload } from "primereact/fileupload";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React from "react";
function BasicProfileCard() {
  return (
    <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div className="text-900 font-medium text-900 text-xl mb-3">Profile</div>
      <p className="m-0 mb-4 p-0 text-600 line-height-3 mr-3">
        Odio euismod lacinia at quis risus sed vulputate odio. Non nisi est sit
        amet. Egestas integer eget aliquet nibh praesent tristique magna.
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
            <label htmlFor="bio2" className="font-medium text-900">
              Bio
            </label>
            <InputTextarea id="bio2" type="text" rows={5} autoResize />
          </div>
          <div className="field mb-4 col-12 md:col-6">
            <label htmlFor="avatar2" className="font-medium text-900">
              Avatar
            </label>
            <div className="flex align-items-center">
              <Image
                src="assets/images/blocks/avatars/circle/avatar-f-4.png"
                alt="avatar-f-4"
                className="mr-4"
              />
              <FileUpload
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
              />
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
            <Dropdown
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
            />
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
                checked={value}
                onChange={(e) => setValue(e.value)}
              />
              <span className="ml-2">Share my data with contacts</span>
            </div>
          </div>
          <div className="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
          <div className="col-12">
            <Button label="Save Changes" className="w-auto mt-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicProfileCard;
