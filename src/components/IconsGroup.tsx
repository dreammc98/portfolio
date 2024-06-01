import styled from "styled-components";

import { Icon } from "./icon/Icon";

export const SocialIcon = () => {
  return (
    <StyledSocialIcon>
      <SocialIconList>
        <Icon iconId="githubSvgSI" widthIcon="38" heightIcon="35" viewBoxIcon="0 0 29 30" />
      </SocialIconList>
      <SocialIconList>
        <Icon iconId="telegramSvg" widthIcon="38" heightIcon="35" viewBoxIcon="0 0 29 30" />
      </SocialIconList>
      <SocialIconList>
        <Icon iconId="vkSvg" widthIcon="38" heightIcon="35" viewBoxIcon="0 0 29 30" />
      </SocialIconList>
      <SocialIconList>
        <Icon iconId="instaSvg" widthIcon="38" heightIcon="35" viewBoxIcon="0 0 29 30" />
      </SocialIconList>
    </StyledSocialIcon>
  );
};

const StyledSocialIcon = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialIconList = styled.a`
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;
