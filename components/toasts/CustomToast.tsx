import { Toast } from "primereact/toast";
import { useEffect, useRef } from "react";

interface ToastProps {
  appear: boolean;
  message: string;
  severity: "success" | "info" | "warn" | "error";
}

function CustomToast(props: ToastProps) {
  const { appear, message, severity } = props;
  const toast = useRef<any>(null);

  useEffect(() => {
    toast.current.show({
      severity,
      summary: `${severity} message`,
      detail: message,
      life: 3000,
    });
  }, [appear, message, severity]);

  return appear ? <Toast ref={toast} /> : null;
}

export default CustomToast;
