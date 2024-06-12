import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Main = styled.section`
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

const WrapperImg = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: -webkit-linear-gradient(#e70faa, #00c0fd);
  background: linear-gradient(#e70faa, #00c0fd);
  border-radius: 100%;
  ::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100%;
    background: url("../../../assets/images/abstract.png");
  }
`;

const Photo = styled.img`
  padding: 8px;
  max-width: 350px;
  width: 100%;
  object-fit: cover;
  border-radius: 100%;
  -webkit-box-shadow: 0px 0px 300px -23px rgba(0, 192, 253, 0.6);
  -moz-box-shadow: 0px 0px 300px -23px rgba(0, 192, 253, 0.6);
  box-shadow: 0px 0px 300px -23px rgba(0, 192, 253, 0.6);
`;

const MainTitle = styled.h1`
  font-size: 4.8em;
`;

const Name = styled.h2`
  font-size: 4.8em;
  color: #d9d9d9;
  span {
    font-size: 20px;
  }
`;

export const S = {
  Main,
  WrapperImg,
  Photo,
  MainTitle,
  Name,
};
