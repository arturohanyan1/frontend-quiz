import { useCallback } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const useErrorHandler = () => {
  const { t } = useTranslation();

  const handleError = useCallback((errorMessage: string) => {
    console.log(errorMessage);
    toast.error(t(errorMessage), { className: "error-toast-message" });
  }, []);

  return handleError;
};

export default useErrorHandler;
