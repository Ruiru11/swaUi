import { styled } from "goober";

export const ModalContainer = styled("section")`
  padding: 16px;
  width: 90%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  background: #000;
  position: absolute;
  padding: 16px;
`;

export const ModalTitle = styled("section")`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
  color: #ffd523;
`;

export const ModalLabel = styled("h1")`
  color: #ffd523;
  font-family: "Press Start 2P", cursive;
  font-size: 20px;
`;

export const ModalClose = styled("button")`
  outline: none;
  border: none;
  font-size: 20px;
  color: #000;
  font-family: "Press Start 2P", cursive;
  height: auto;
`;

export const ModalContent = styled("section")``;
