import styled from "styled-components";
import { primaryColor } from "../colors/colors";

// faltaria el disabled pero como el login inicia con eso
// no te estoy muy seguro de como hacerlo

const Button = styled.button`
  font-family: inherit;
  /* El width es el que lleva el boton del formulario, si necesitas ponerle auto cambialo */
  width: 341px;
  height: 55px;
  background-color: ${primaryColor.primary500};
  color: #fff;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  border: none;

  &:hover {
    background-color: ${primaryColor.primary400};
  }

  &:focus {
    background-color: ${primaryColor.primary700};
  }
`;

export { Button };