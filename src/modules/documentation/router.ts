import {router} from "@/components/layout/DocumentationLayout";
import InstallationDoc from "./introduction/installation";
import IntroductionDoc from "./introduction";
import AccordianDoc from "./accordian";
import ButtonDoc from "./button";
import BadgeDoc from "./badge";
import BannerDoc from "./banner";
import CardDoc from "./card";
import DialogDoc from "./dialog";
import MoreDoc from "./more";
import DarkModeVite from "./dark-mode/vite";
import DarkModeHono from "./dark-mode/hono";
import DropdownMenuDoc from "./dropdown-menu";
import HoverCardDoc from "./hover-card";
import InputDoc from "./inputs";
import PopoverDoc from "./popover";
import SwitchDoc from "./switch";
import TabsDoc from "./tabs";

const component = {
  accordian: AccordianDoc(),
  banner: BannerDoc(),
  button: ButtonDoc(),
  badge: BadgeDoc(),
  card: CardDoc(),
  dialog: DialogDoc(),
  dropdown: DropdownMenuDoc(),
  "hover-card": HoverCardDoc(),
  tabs: TabsDoc(),
  introduction: IntroductionDoc(),
  installation: InstallationDoc(),
  "dark-mode-vite": DarkModeVite(),
  "dark-mode-hono": DarkModeHono(),
  switch: SwitchDoc(),
  popover: PopoverDoc(),
  inputs: InputDoc(),
  more: MoreDoc(),
};

export const docsRouter: {path: string; template: string; title: string}[] =
  router
    .flatMap(({children}) => children)
    .map(({title, path}) => ({
      template: (component as any)[path],
      title,
      path,
    }));
