import Tilt from "react-parallax-tilt";
import photo from "../../../assets/images/photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { FC } from "react";
import { S } from "./Main_Styles";

export const Main: FC = () => {
  return (
    <S.Main id="home">
      <Container>
        <FlexWrapper justify="space-around" align="center" wrap="wrap" gap="20px">
          <div>
            <S.Name>
              <span>Hi Friend👋</span> <br /> My name is Leonid
            </S.Name>
            <Tilt tiltEnable={false} scale={1.1} transitionSpeed={2500}>
              <S.MainTitle>I'm a frontend developer</S.MainTitle>
            </Tilt>
          </div>
          <S.WrapperImg>
            <S.Photo src={photo} alt="Image" />
          </S.WrapperImg>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
