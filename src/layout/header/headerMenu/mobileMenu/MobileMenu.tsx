import React from "react";
import { Menu, MenuPropsType } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

export const MobileMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={false}>
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
