import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./Skill";

export const Skills = () => {
  return (
    <FlexWrapper wrap="wrap" justify="center" align="center" gap="100px">
      <Skill iconId="htmlSvg" width="120" height="120" />
      <Skill iconId="cssSvg" width="120" height="120" />
      <Skill iconId="sassSvg" width="120" height="120" />
      <Skill iconId="jsSvg" width="120" height="120" />
      <Skill iconId="tsSvg" viewBoxIcon="0 0 640 640" width="120" height="120" />
      <Skill iconId="reactSvg" width="120" height="120" />
      <Skill iconId="vueSvg" viewBoxIcon="0 100 440 440" width="120" height="120" />
      <Skill iconId="bootstrapSvg" viewBoxIcon="0 0 100 100" width="120" height="120" />
      <Skill iconId="gitSvg" viewBoxIcon="0 0 105 105" width="120" height="120" />

      <Skill iconId="tailwindSvg" viewBoxIcon="15 20 100 120" width="120" height="120" />
      <Skill iconId="vscodeSvg" width="120" height="120" />
      <Skill iconId="githubSvg" viewBoxIcon="-10 40 100 10" width="120" height="120" />
    </FlexWrapper>
  );
};
