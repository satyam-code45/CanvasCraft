import { House, LayoutTemplateIcon, Settings, Trash2, User } from "lucide-react";


export const data = {
  user: {
    name: "Satyam",
    email: "test@example.com",
    avatar: User as React.FC<React.SVGProps<SVGSVGElement>>, 
  },
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: House as React.FC<React.SVGProps<SVGSVGElement>>, 
    },
    {
      title: "Templates",
      url: "/templates",
      icon: LayoutTemplateIcon as React.FC<React.SVGProps<SVGSVGElement>>,
    },
    {
      title: "Trash",
      url: "/trash",
      icon: Trash2 as React.FC<React.SVGProps<SVGSVGElement>>,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings as React.FC<React.SVGProps<SVGSVGElement>>,
    },
  ],
};
