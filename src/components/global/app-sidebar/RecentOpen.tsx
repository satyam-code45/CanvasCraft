"use client";
import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSlideStore } from "@/store/useSlideStore";
import { Project } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

type Props = {
  recentProjects: Project[];
};

const RecentOpen = ({ recentProjects }: Props) => {
  const router = useRouter();
  const { setSlides } = useSlideStore();

  const handleClick = (projectId: string, slides: JsonValue) => {
    if (!projectId || !slides) {
      toast.error("Project Not Found", {
        description: "Please try again",
      });
      return;
    }
    setSlides(JSON.parse(JSON.stringify(slides)));

    router.push(`/presentation/${projectId}`);
  };

  return recentProjects.length > 0 ? (
    <SidebarGroup>
      <SidebarGroupLabel>Recently Open</SidebarGroupLabel>
      <SidebarMenu>
        {recentProjects.length > 0
          ? recentProjects.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={"hover:bg-muted"}
                >
                  <Button
                    variant={"link"}
                    className={"text-xs items-center justify-start"}
                    onClick={() => handleClick(item.id, item.slides)}
                  >
                    <span>{item.title}</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))
          : ""}
      </SidebarMenu>
    </SidebarGroup>
  ) : (
    ""
  );
};

export default RecentOpen;
