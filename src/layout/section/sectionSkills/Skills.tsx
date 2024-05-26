import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./Skill";

export const Skills = () => {
  return (
    <FlexWrapper wrap="wrap" justify="center" align="center">
      <Skill iconId="htmlSvg" />
      <Skill iconId="cssSvg" />
      <Skill iconId="sassSvg" />
      <Skill iconId="jsSvg" />
      <Skill iconId="tsSvg" viewBoxIcon="0 0 640 640" />
      <Skill iconId="reactSvg" />
      <Skill iconId="bootstrapSvg" />
      <Skill iconId="tailwindSvg" />
      <Skill iconId="vscodeSvg" />
      <Skill iconId="githubSvg" />
    </FlexWrapper>
  );
};
