import styled from "styled-components";
import photo from "../../../assets/images/photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <div>
            <Name>
              Hi👋 <br /> My name is Leonid
            </Name>
            <MainTitle>I'm a frontend developer</MainTitle>
          </div>
          <Photo src={photo} alt="" />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  padding-top: 200px;
  min-height: 100vh;
  background-color: black;
  color: #d9d9d9;
`;

const Photo = styled.img`
  max-width: 340px;
  object-fit: cover;
  border-radius: 10%;
  -webkit-box-shadow: 0px 0px 300px -23px rgba(0, 192, 253, 0.6);
  -moz-box-shadow: 0px 0px 300px -23px rgba(0, 192, 253, 0.6);
  box-shadow: 0px 0px 300px -23px rgba(0, 192, 253, 0.6);
`;

const MainTitle = styled.h1`
  font-size: 58px;
  font-weight: 700;
`;

const Name = styled.h2`
  font-size: 58px;
  font-weight: 700;
`;
