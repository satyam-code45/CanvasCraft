import { getRecentProjects } from "@/actions/project"
import onAuthenticateUser from "@/actions/user"
import AppSidebar from "@/components/global/app-sidebar/AppSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { redirect } from "next/navigation"

type Props = {
    children: React.ReactNode
}

async function Layout({children}: Props) {

    const recentProjects = await getRecentProjects();
    const checkUser = await onAuthenticateUser()
    if (!checkUser.user) {
        redirect ("/sign-in")
    }
  return (
    <div>
        <SidebarProvider>
            <AppSidebar user={checkUser.user} recentProjects={recentProjects.data || []}>

            </AppSidebar>
        </SidebarProvider>
    </div>
  )
}

export default Layout