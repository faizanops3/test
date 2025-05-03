
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <div className="h-16 border-b border-border flex items-center justify-between px-6">
      <div className="flex-1">
        <h1 className="text-xl font-semibold text-leadrat-blue">Dashboard</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search..." 
            className="pl-10 w-64 bg-background border-muted" 
          />
        </div>
        
        <div className="relative">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
              3
            </span>
          </Button>
        </div>
        
        <div className="h-8 w-8 rounded-full bg-leadrat-blue flex items-center justify-center text-white text-sm font-medium">
          JD
        </div>
      </div>
    </div>
  );
}
