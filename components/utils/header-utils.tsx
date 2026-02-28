export const enum RouteEnum {
  Home = "/",
  AboutUs = "/about-us",
  Gallery = "/gallery",
  Contact = "/contact",
}

export type NavigationButton = {
  id: number;
  name: string;
  route: RouteEnum;
};

export const navigationButtons: NavigationButton[] = [
  { id: 1, name: "Home", route: RouteEnum.Home },
  { id: 2, name: "About us", route: RouteEnum.AboutUs },
  { id: 3, name: "Gallery", route: RouteEnum.Gallery },
  { id: 4, name: "Contact", route: RouteEnum.Contact },
];
