import { Toast } from "react-native-toast-notifications";

let isToastVisible = false; // Flag to track toast visibility

export const toastMessage = (
  message: string,
  type: "normal" | "success" | "warning" | "danger" | "custom"
) => {
  if (message && !isToastVisible) {
    Toast.show(message, {
      type: type,
      placement: "top",
      duration: 4000,
      animationType: "zoom-in",
    });
  }
};
