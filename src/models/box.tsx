

export interface Box {
  type: string;
  dir: string;
  color?: string
  image: {
    mobile: string;
    desktop: string;
  };
  title: string;
  description: string;
}