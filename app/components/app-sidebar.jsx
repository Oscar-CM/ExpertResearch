import { Calendar, Home, Inbox, Search, CircleDollarSign } from "lucide-react"
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Training",
    url: "/training",
    icon: Inbox,
  },
  {
    title: "Writing Tasks",
    url: "/tasks",
    icon: Calendar,
  },
  {
    title: "Writing Accounts",
    url: "/accounts",
    icon: Calendar,
  },
  {
    title: "Awarded Tasks",
    url: "/awarded",
    icon: Search,
  },
  {
    title: "Withdrawal History",
    url: "/withdrawal",
    icon: CircleDollarSign,
  },
  {
    title: "Telegram Channel",
    url: "/telegram",
    icon: FaTelegram,
  },
  {
    title: "Whatsapp Group",
    url: "/whatsapp",
    icon: FaWhatsapp,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="p-4 text-white">
      <SidebarContent className="bg-slate-700 border rounded-md ">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white text-2xl mb-3">Expert Research</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-3">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-white">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
