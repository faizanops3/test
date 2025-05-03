
import { cn } from "@/lib/utils";

interface MetricsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string | number;
    positive: boolean;
  };
  icon: React.ReactNode;
  className?: string;
}

export default function MetricsCard({ title, value, change, icon, className }: MetricsCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-xl p-6 leadrat-card-shadow", 
      className
    )}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-leadrat-dark-gray mb-1">{title}</p>
          <h3 className="text-2xl font-semibold mb-1">{value}</h3>
          
          {change && (
            <div className="flex items-center">
              <span className={cn(
                "text-xs font-medium",
                change.positive ? "text-green-600" : "text-red-600"
              )}>
                {change.positive ? "+" : "-"}{change.value}
              </span>
              <span className="text-xs text-leadrat-dark-gray ml-1">vs last period</span>
            </div>
          )}
        </div>
        
        <div className="bg-leadrat-gray p-2 rounded-lg">
          {icon}
        </div>
      </div>
    </div>
  );
}
