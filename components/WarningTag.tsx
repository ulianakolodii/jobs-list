import { FC, PropsWithChildren } from "react";

const PrimaryTag: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-zhytomyr text-chernivtsi font-bold rounded-lg border-cherkasy border py-4 flex-1 text-center max-w-[222px]">
      {children}
    </div>
  );
};

export default PrimaryTag;
