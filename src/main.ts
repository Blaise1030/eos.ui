import {DocumentationLayout} from "./components/layout/DocumentationLayout";
import SiteLayout from "./components/layout/SiteLayout";
import {docsRouter} from "./modules/documentation/router";
import Landing from "./modules/landing";
import Router from "alpine-router";

const routes = [
  {
    path: "",
    template: SiteLayout(Landing()),
  },
  {
    path: "example",
    template: SiteLayout(Landing()),
  },
  {
    template: SiteLayout(DocumentationLayout()),
    children: docsRouter,
    path: "docs",
  },
];

new Router(routes);
