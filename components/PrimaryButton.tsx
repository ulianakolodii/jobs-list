import { FC, PropsWithChildren } from "react";

const PrimaryButton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button
      type="button"
      className="bg-ternopil text-white rounded-lg py-4 px-7"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
