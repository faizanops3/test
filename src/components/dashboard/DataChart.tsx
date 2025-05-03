
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

const data = [
  { name: "Jan", leads: 65, contacts: 40 },
  { name: "Feb", leads: 59, contacts: 35 },
  { name: "Mar", leads: 80, contacts: 52 },
  { name: "Apr", leads: 81, contacts: 55 },
  { name: "May", leads: 56, contacts: 30 },
  { name: "Jun", leads: 55, contacts: 29 },
  { name: "Jul", leads: 40, contacts: 20 },
];

const timeRanges = ["7D", "30D", "3M", "6M", "1Y"];

export default function DataChart() {
  const [activeRange, setActiveRange] = useState("6M");

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-semibold">Lead Generation Overview</CardTitle>
        <div className="flex items-center gap-1.5">
          {timeRanges.map((range) => (
            <Button
              key={range}
              variant={activeRange === range ? "secondary" : "ghost"}
              size="sm"
              className="h-7 text-xs font-normal"
              onClick={() => setActiveRange(range)}
            >
              {range}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 0, bottom: 25 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                tickLine={false}
                axisLine={false}
                dy={10}
              />
              <YAxis 
                tickLine={false}
                axisLine={false}
                dx={-10}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Bar 
                dataKey="leads" 
                fill="#0A2540" 
                radius={[4, 4, 0, 0]}
                name="Leads"
              />
              <Bar 
                dataKey="contacts" 
                fill="#00A3FF" 
                radius={[4, 4, 0, 0]}
                name="Contacts"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
