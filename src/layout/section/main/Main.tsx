import styled from "styled-components";
import photo from "../../../assets/images/photo1.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { FC } from "react";
import { S } from "./Main_Styles";

export const Main: FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper justify="space-around" align="center" wrap="wrap" gap="20px">
          <div>
            <S.Name>
              <span>Hi Friend👋</span> <br /> My name is Leonid
            </S.Name>
            <S.MainTitle>I'm a frontend developer</S.MainTitle>
          </div>
          <S.Photo src={photo} alt="Image" />
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
