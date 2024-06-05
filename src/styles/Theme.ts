export const theme = {
  media: {
    tablet: "screen and (max-width: 768px)",
    mobile: "screen and (max-width: 576px)",
  },
};

type FontPropsType = {
  family?: string;
  weight?: number;
  color?: string;
  Fmin?: number;
  Fmax?: number;
};

export const font = ({ family, weight, color, Fmin, Fmax }: FontPropsType) => `
 font-family: ${family || "Poppins"} ;
 font-weight: ${weight || 400} ;
 color: ${color || "black"} ;
  font-size: calc( (100vw - 360px)/(1200 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;
