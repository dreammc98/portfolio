import styled from "styled-components";
import photo from "../../../assets/images/photo1.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-around" align="center" wrap="wrap" gap="20px">
          <div>
            <Name>
              <span>Hi Friend👋</span> <br /> My name is Leonid
            </Name>
            <MainTitle>I'm a frontend developer</MainTitle>
          </div>
          <Photo src={photo} alt="Image" />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  padding: 250px 0 200px 0;
  color: #d9d9d9;
  font-size: 10px;
  font-weight: 700;
  @media screen and (max-width: 1103px) {
    font-size: 9px;
  }
  @media screen and (max-width: 1043px) {
    padding: 150px 0 100px;
  }
  @media ${theme.media.mobile} {
    font-size: 7px;
  }
`;

const Photo = styled.img`
  max-width: 450px;
  width: 100%;
  object-fit: cover;
  border-radius: 10%;
  -webkit-box-shadow: 0px 0px 300px -23px rgba(0, 192, 253, 0.6);
  -moz-box-shadow: 0px 0px 300px -23px rgba(0, 192, 253, 0.6);
  box-shadow: 0px 0px 300px -23px rgba(0, 192, 253, 0.6);
`;

const MainTitle = styled.h1`
  font-size: 4.8em;
`;

export const Name = styled.h2`
  font-size: 4.8em;
  span {
    font-size: 20px;
  }
`;
