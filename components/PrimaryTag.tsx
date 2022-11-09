import { FC, PropsWithChildren } from "react";

const PrimaryTag: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-uzhgorod text-dnipro font-bold rounded-lg border-doneck border py-4 flex-1 text-center max-w-[222px]">
      {children}
    </div>
  );
};

export default PrimaryTag;
