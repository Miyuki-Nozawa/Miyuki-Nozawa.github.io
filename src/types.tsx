export type DiamondColor =
  | "green"
  | "brown"
  | "light-pink"
  | "light-brown"
  | "green3"
  | "brown9"
  | "dark-green";

export type KeyCardT = {
  icon?: string;
  label: string;
  sublabel?: string;
  centered?: boolean;
}[];

export type ImageT = {
  default: [number, number];
  desktop: {
    src: string;
    className: string;
  };
  mobile: {
    src: string;
    className: string;
  };
};
