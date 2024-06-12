import React, { MouseEventHandler } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

export type MenuPropsType = {
  menuItems: Array<{ title: string; href: string }>;
  changeMenuState?: () => void;
};

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <ul>
      {props.menuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link
              activeClass="active"
              to={item.href}
              smooth="true"
              spy={true}
              offset={-50}
              onClick={props.changeMenuState}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
