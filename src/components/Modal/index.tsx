import { Fragment, ReactElement, ReactNode, useState } from "react";
import * as S from "./styled-components";

type Props = {
  label: string;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  children: ReactNode;
};

export default function Modal(props: Props): ReactElement {
  return (
    <Fragment>
      <S.ModalContainer>
        <S.ModalTitle>
          <S.ModalLabel>{props.label}</S.ModalLabel>
          <section></section>
          <S.ModalClose onClick={() => props.setIsOpen(!props.isOpen)}>
            Close
          </S.ModalClose>
        </S.ModalTitle>
        <S.ModalContent>{props.children}</S.ModalContent>
      </S.ModalContainer>
    </Fragment>
  );
}
