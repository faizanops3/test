
import { Users, Flag, ArrowUp, ArrowDown } from "lucide-react";
import MetricsCard from "@/components/dashboard/MetricsCard";

const LeadsStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
      <MetricsCard 
        title="Total Active Leads" 
        value="384" 
        change={{ value: "12%", positive: true }}
        icon={<Users size={20} className="text-leadrat-blue" />}
      />
      <MetricsCard 
        title="New Leads (Today)" 
        value="24" 
        change={{ value: "8%", positive: true }}
        icon={<ArrowUp size={20} className="text-leadrat-blue" />}
      />
      <MetricsCard 
        title="Converted Leads" 
        value="186" 
        change={{ value: "5%", positive: false }}
        icon={<ArrowDown size={20} className="text-leadrat-blue" />}
      />
      <MetricsCard 
        title="Priority Leads" 
        value="47" 
        change={{ value: "3%", positive: true }}
        icon={<Flag size={20} className="text-leadrat-blue" />}
      />
    </div>
  );
};

export default LeadsStats;
