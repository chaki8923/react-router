import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    chirdlen: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    chirdlen: <UrlParameter />
  }
];
