import type { ReactNode } from "react";
import BootstrapButton from "react-bootstrap/Button";
import { FaRegThumbsUp } from "react-icons/fa";


interface ButtonProps {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
}

function Button({
  children,
  isLoading = false,
  onClick,
}: ButtonProps) {
  return (
    <BootstrapButton
      onClick={onClick}
      disabled={isLoading}
      type="button"
      variant="primary"
    >
      {isLoading ? "Cargando..." : children}

      <FaRegThumbsUp color="red" size={20}/>

    </BootstrapButton>
  );
}

export default Button;