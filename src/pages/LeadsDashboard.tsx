
import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import { Card } from "@/components/ui/card";
import LeadsKanban from "@/components/leads/LeadsKanban";
import LeadsStats from "@/components/leads/LeadsStats";
import { Button } from "@/components/ui/button";
import { Plus, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadsDashboard = () => {
  const { toast } = useToast();
  
  const handleNewLead = () => {
    toast({
      title: "Create Lead",
      description: "New lead creation functionality will be implemented soon.",
    });
  };

  const handleUpload = () => {
    toast({
      title: "Upload Leads",
      description: "Self-upload feature will be implemented soon.",
    });
  };

  return (
    <div className="flex h-screen bg-leadrat-gray overflow-hidden">
      <Sidebar />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <h1 className="text-2xl font-bold">Leads Dashboard</h1>
              <div className="flex items-center space-x-3">
                <Button onClick={handleNewLead} className="flex items-center gap-2">
                  <Plus size={16} /> Add Lead
                </Button>
                <Button onClick={handleUpload} variant="outline" className="flex items-center gap-2">
                  <Upload size={16} /> Upload CSV
                </Button>
              </div>
            </div>

            <LeadsStats />
            
            <Card className="animate-fade-in p-4">
              <h2 className="text-lg font-semibold mb-4 px-2">Lead Activity Board</h2>
              <LeadsKanban />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsDashboard;
