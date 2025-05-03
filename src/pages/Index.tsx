
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import MetricsCard from "@/components/dashboard/MetricsCard";
import DataChart from "@/components/dashboard/DataChart";
import LeadsTable from "@/components/dashboard/LeadsTable";
import { Users, Mail, Calendar, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="flex h-screen bg-leadrat-gray overflow-hidden">
      <Sidebar />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              <MetricsCard 
                title="Total Leads" 
                value="2,543" 
                change={{ value: "12%", positive: true }}
                icon={<Users size={20} className="text-leadrat-blue" />}
              />
              <MetricsCard 
                title="Open Campaigns" 
                value="6" 
                change={{ value: "2", positive: true }}
                icon={<Calendar size={20} className="text-leadrat-blue" />}
              />
              <MetricsCard 
                title="Email Open Rate" 
                value="68%" 
                change={{ value: "5%", positive: true }}
                icon={<Mail size={20} className="text-leadrat-blue" />}
              />
              <MetricsCard 
                title="Responses" 
                value="348" 
                change={{ value: "8%", positive: false }}
                icon={<MessageSquare size={20} className="text-leadrat-blue" />}
              />
            </div>

            {/* Chart */}
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <DataChart />
            </div>
            
            {/* Table */}
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <LeadsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
