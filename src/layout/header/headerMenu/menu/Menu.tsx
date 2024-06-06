import React from "react";
import styled from "styled-components";

export type MenuPropsType = {
  menuItems: Array<string>; // Array<string> или string[];
};

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <ul>
      {props.menuItems.map((item, index) => {
        return (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        );
      })}
    </ul>
  );
};
