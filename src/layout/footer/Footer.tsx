import { SocialIcon } from "../../components/IconsGroup";
import { Container } from "../../components/Container";
import { S } from "./Footer_styles";

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <S.FooterBody>
          <S.FooterName>Leonid</S.FooterName>
          <S.IconsWrapper>
            <SocialIcon />
          </S.IconsWrapper>
          <S.Copyright>© 2024 Leonid Talaev, all rights reserved.</S.Copyright>
        </S.FooterBody>
      </Container>
    </S.Footer>
  );
};
