import onAuthenticateUser from "@/actions/user";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = { children: React.ReactNode };
async function Layout(props: Props) {
  const auth = await onAuthenticateUser();
  if (!auth.user) {
    redirect("/sign-in");
  }

  return <div className="w-full min-h-screen">{props.children}</div>;
}

export default Layout;
