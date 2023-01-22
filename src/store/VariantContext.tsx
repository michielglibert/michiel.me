import { createContext, PropsWithChildren, useContext } from "react";
import { Variant } from "../types/Variant";

const VariantContext = createContext<Variant>("black");

interface Props {
  variant: Variant;
}

const VariantContextProvider: React.FC<PropsWithChildren<Props>> = ({
  variant,
  children,
}) => {
  return (
    <VariantContext.Provider value={variant}>
      {children}
    </VariantContext.Provider>
  );
};

export default VariantContextProvider;

export const useVariant = () => {
  return useContext(VariantContext);
};
