import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { SocialIcon } from "../../components/IconsGroup";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { S } from "./Header_Styles";
import React, { useEffect, useState } from "react";

const menuItems = [
  { title: "Home", href: "home" },
  { title: "Tech Stack", href: "stack" },
  { title: "Projects", href: "projects" },
];

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 900;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const [headerSizeChanges, setHeaderSizeChanges] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setHeaderSizeChanges(true) : setHeaderSizeChanges(false);
    });
  });

  return (
    <S.Header headerSizeChanges={headerSizeChanges}>
      <Container>
        <FlexWrapper justify="space-between">
          {width > breakpoint ? (
            <DesktopMenu menuItems={menuItems} />
          ) : (
            <MobileMenu menuItems={menuItems} headerSizeChanges={headerSizeChanges} />
          )}

          <SocialIcon />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
