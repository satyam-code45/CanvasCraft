"use client"
import { Project, User } from "@prisma/client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import NavMain from "./NavMain";
import { data } from "@/lib/constanst";
import RecentOpen from "./RecentOpen";
import NavFooter from "./NavFooter";

const AppSidebar = ({
  recentProjects,
  user,
  ...props
}: {
  recentProjects: Project[];
  user: User;
} & React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar
      collapsible="icon"
      className="max-w-[212px] bg-background-90"
      {...props}
    >
      <SidebarHeader className="pt-6 px-3 pb-0">
        <SidebarMenuButton className="data-[state=open]:text-sidebar-accent-foreground">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
            <Avatar className="h-60 w-80 rounded-full flex items-center justify-center">
              <AvatarImage
                src="/logo.png"
                alt="canvascraft"
                className="h-60 w-80"
              />
              <AvatarFallback className="rounded-lg">C</AvatarFallback>
            </Avatar>
          </div>
          <span className="truncate text-primary text-xl font-semibold">CanvasCraft</span>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent className="px-3 mt-10 gap-y-6">
        <NavMain items={data.navMain} />
        <RecentOpen recentProjects={recentProjects}/>
      </SidebarContent>
      <SidebarFooter>
        <NavFooter prismaUser={user} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
