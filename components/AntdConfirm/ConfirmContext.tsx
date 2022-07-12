import { createContext, useContext } from "react";

export type Options = {
  title?: string;
  description?: string;
  okButtonText?: string;
  cancelButtonText?: string;
};
export type ConfirmContextType = {
  confirm: (options: Options | string) => Promise<boolean> | undefined;
};
export const ConfirmContext = createContext<ConfirmContextType>(
  {} as ConfirmContextType
);
export const useConfirm = () => {
  const { confirm } = useContext(ConfirmContext);
  return confirm;
};
