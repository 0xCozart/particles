import dynamic from "next/dynamic";

const DynamicSignInButton = dynamic(() => import("./self-id.button"), {
  ssr: false,
});

export { DynamicSignInButton };
