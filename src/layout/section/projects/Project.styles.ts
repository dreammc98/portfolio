import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import photo from "../../../assets/images/project.png";

const Project = styled.div`
  max-width: 373px;
  width: 100%;
  background-color: #363636;
  border-radius: 20px;
  color: #cccc;
  font-size: 10px;
  a {
    color: white;
  }
  @media ${theme.media.mobile} {
    font-size: 9px;
  }
`;

const Image = styled.div`
  background-image: url(${photo});
  background-position: center;
  height: 260px;
  object-fit: cover;
`;

const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 0;
  margin-bottom: 20px;

  color: #ccc;
`;

const Title = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 2.8em;
  line-height: 93%;
  text-align: center;
`;

const Description = styled.p`
  margin: 17px 0 17px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 1.8em;
`;

const Stack = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.6em;
  margin-bottom: 20px;

  span {
    font-weight: 300;
    font-size: 0.9em;
  }
`;

const SeeProject = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.6em;
  color: #fff;

  span {
    position: relative;
    margin-left: 5px;

    ::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 2px;
      background-color: white;
      position: absolute;
      bottom: 0px;
      right: 0;
      transition: 0.1s;
    }
  }

  a {
    :hover {
      span {
        ::before {
          transform: translateY(5%);
          height: 0;
        }
      }
    }
  }
`;

export const S = {
  Project,
  Image,
  ProjectBody,
  Title,
  Description,
  Stack,
  SeeProject,
};
