import { redirect } from "next/navigation";

// /lp/share is now /kitchen-table — permanent redirect
export default function ShareRedirect() {
  redirect("/kitchen-table");
}
