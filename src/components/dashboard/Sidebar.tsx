
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Search, 
  Users,
  Calendar,
  MessageSquare,
  Settings,
  Menu,
  X
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Leads Dashboard", icon: Users, href: "/leads" },
  { name: "Lead Search", icon: Search, href: "#" },
  { name: "Campaigns", icon: Calendar, href: "#" },
  { name: "Messages", icon: MessageSquare, href: "#" },
  { name: "Settings", icon: Settings, href: "#" },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={cn(
        "leadrat-gradient-bg text-white h-screen flex flex-col transition-all duration-300",
        expanded ? "w-64" : "w-20"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <div className={cn("flex items-center", expanded ? "justify-between w-full" : "justify-center")}>
          {expanded && (
            <div className="font-bold text-xl">LeadRat</div>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
          >
            {expanded ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-4 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-sidebar-accent transition-colors",
              expanded ? "" : "justify-center"
            )}
          >
            <item.icon size={20} className="text-sidebar-primary" />
            {expanded && <span>{item.name}</span>}
          </Link>
        ))}
      </div>

      <div className="p-4 border-t border-sidebar-border">
        {expanded ? (
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-sidebar-accent"></div>
            <div>
              <div className="text-sm font-medium">John Doe</div>
              <div className="text-xs text-gray-300">john@example.com</div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="h-8 w-8 rounded-full bg-sidebar-accent"></div>
          </div>
        )}
      </div>
    </div>
  );
}
