import React, { useState } from "react";
import { Menu, MenuPropsType } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

type mobileMenuPropsType = {
  menuItems: Array<{ title: string; href: string }>;
  headerSizeChanges: boolean;
};

export const MobileMenu: React.FC<mobileMenuPropsType> = (props: mobileMenuPropsType) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const changeMenuState = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <S.MobileMenu>
      <S.BurgerButton
        isOpen={menuIsOpen}
        onClick={changeMenuState}
        headerSizeChanges={props.headerSizeChanges}
      >
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={menuIsOpen}>
        <Menu menuItems={props.menuItems} changeMenuState={changeMenuState} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
