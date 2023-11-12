import {router} from "@/components/layout/DocumentationLayout";
import InstallationDoc from "./introduction/installation";
import IntroductionDoc from "./introduction";
import AccordianDoc from "./accordian";
import ButtonDoc from "./button";
import BadgeDoc from "./badge";
import BannerDoc from "./banner";
import CardDoc from "./card";

const component = {
  accordian: AccordianDoc(),
  banner: BannerDoc(),
  button: ButtonDoc(),
  badge: BadgeDoc(),
  card: CardDoc(),
  introduction: IntroductionDoc(),
  installation: InstallationDoc(),
};

export const docsRouter: {path: string; template: string; title: string}[] =
  router
    .flatMap(({children}) => children)
    .map(({title, path}) => ({
      template: (component as any)[path],
      title,
      path,
    }));
