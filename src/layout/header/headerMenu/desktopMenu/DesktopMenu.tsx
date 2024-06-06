import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { Menu, MenuPropsType } from "../menu/Menu";
import React from "react";
import { S } from "../HeaderMenu_Styles";

export const DesktopMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <S.DesktopMenu>
      {" "}
      <Menu menuItems={props.menuItems} />
    </S.DesktopMenu>
  );
};
