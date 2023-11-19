import {div, escHtml} from "structr-composer";
import {Tab, TabsContent, TabsList, TabsTrigger} from "@/components/Tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import Button from "@/components/Button";
import Label from "@/components/Label";
import Input from "@/components/Input";

export function TabsDemo() {
  return div(
    {"x-data": "{tabValue:'signIn'}", class: "max-w-sm h-[500px] pt-12"},
    Tab(
      {value: "tabValue"},
      TabsList(
        {},
        TabsTrigger({id: "signIn"}, escHtml`Account`),
        TabsTrigger({id: "signOut"}, escHtml`Password`)
      ),
      TabsContent(
        {id: "signIn"},
        Card(
          {},
          CardHeader(
            {},
            CardTitle({}, escHtml`Account`),
            CardDescription(
              {},
              escHtml`Make changes to your account here. Click save when you're done.`
            )
          ),
          CardContent(
            {class: "flex flex-col space-y-4"},
            div(
              {class: "flex flex-col space-y-2"},
              Label({}, escHtml`Name`),
              Input({placeholder: "Name"})
            ),
            div(
              {class: "flex flex-col space-y-2"},
              Label({}, escHtml`Username`),
              Input({placeholder: "Username"})
            )
          ),
          CardFooter({}, Button({}, escHtml`Save Changes`))
        )
      ),
      TabsContent(
        {id: "signOut"},
        Card(
          {},
          CardHeader(
            {},
            CardTitle({}, escHtml`Password`),
            CardDescription(
              {},
              escHtml`Change your password here. After saving, you'll be logged out.`
            )
          ),
          CardContent(
            {class: "flex flex-col space-y-4"},
            div(
              {class: "flex flex-col space-y-2"},
              Label({}, escHtml`Current password`),
              Input({placeholder: "P@ssw0rd", type: "password"})
            ),
            div(
              {class: "flex flex-col space-y-2"},
              Label({}, escHtml`New password`),
              Input({placeholder: "P@ssw0rd", type: "password"})
            )
          ),
          CardFooter({}, Button({}, escHtml`Save Changes`))
        )
      )
    )
  );
}
