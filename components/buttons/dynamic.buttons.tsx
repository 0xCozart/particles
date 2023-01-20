import dynamic from "next/dynamic";

const DynamicSignInButton = dynamic(
  () => import("./selfidButton/self-id.button"),
  {
    ssr: false,
  }
);

export { DynamicSignInButton };
