import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isdisabled }: IButtonProps) => {
  return <ButtonContainer disabled={isdisabled} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
