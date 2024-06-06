import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { SocialIcon } from "../../components/IconsGroup";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { S } from "./Header_Styles";
import React, { useEffect, useState } from "react";

const menuItems = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 900;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between">
          {width > breakpoint ? (
            <DesktopMenu menuItems={menuItems} />
          ) : (
            <MobileMenu menuItems={menuItems} />
          )}

          <SocialIcon />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
