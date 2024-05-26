import styled from "styled-components";
import photo from "../../../assets/images/photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify="space-between">
        <div>
          <Name>
            Hi👋 <br /> My name is Leonid
          </Name>
        </div>
        <Photo src={photo} alt="" />
      </FlexWrapper>
      <MainTitle>I'm a frontend developer</MainTitle>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
`;

const Photo = styled.img`
  width: 300px;
  object-fit: cover;
  border-radius: 10%;
`;

const MainTitle = styled.h1`
  font-size: 50px;
  padding: 0;
  margin: 0;
`;

const Name = styled.h2`
  font-size: 50px;
`;
