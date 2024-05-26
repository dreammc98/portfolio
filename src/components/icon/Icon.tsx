import iconsSprite from "../../assets/images/icons-sprite.svg";

type IconsPropsType = {
  iconId: string;
  widthIcon?: string;
  heightIcon?: string;
  viewBoxIcon?: string;
};

export const Icon = (props: IconsPropsType) => {
  return (
    <svg
      width={props.widthIcon || "50px"}
      height={props.heightIcon || "50px"}
      viewBox={props.viewBoxIcon || "0 0 120 120"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};
