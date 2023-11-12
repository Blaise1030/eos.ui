import DefaultBadge from "./example/DefaultBadge";
import SecondaryBadge from "./example/SecondaryBadge";
import DestructiveBadge from "./example/DestructiveBadge";
import OutlineBadge from "./example/OutlineBadge";

import DefaultBadgeRaw from "./example/DefaultBadge?raw";
import SecondaryBadgeRaw from "./example/SecondaryBadge?raw";
import DestructiveBadgeRaw from "./example/DestructiveBadge?raw";
import OutlineBadgeRaw from "./example/OutlineBadge?raw";

export const badges = [
  {
    title: "Default",
    id: "default",
    preview: DefaultBadge(),
    code: DefaultBadgeRaw,
  },
  {
    title: "Secondary",
    id: "secondary",
    preview: SecondaryBadge(),
    code: SecondaryBadgeRaw,
  },
  {
    title: "Destructive",
    id: "destructive",
    preview: DestructiveBadge(),
    code: DestructiveBadgeRaw,
  },
  {
    title: "Outline",
    id: "outline",
    preview: OutlineBadge(),
    code: OutlineBadgeRaw,
  },
];
