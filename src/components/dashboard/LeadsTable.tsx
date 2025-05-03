
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const leads = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@email.com",
    company: "Acme Corp",
    status: "Qualified",
    score: 86,
    date: "2023-05-12",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    company: "Globex Inc",
    status: "New",
    score: 72,
    date: "2023-05-12",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "mbrown@contoso.com",
    company: "Contoso Ltd",
    status: "Contacted",
    score: 64,
    date: "2023-05-11",
  },
  {
    id: "4",
    name: "Emily Wilson",
    email: "e.wilson@startupxyz.co",
    company: "Startup XYZ",
    status: "Disqualified",
    score: 31,
    date: "2023-05-10",
  },
  {
    id: "5",
    name: "David Lee",
    email: "david.lee@megacorp.com",
    company: "MegaCorp",
    status: "Qualified",
    score: 92,
    date: "2023-05-09",
  },
];

export default function LeadsTable() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Qualified":
        return "bg-green-100 text-green-800";
      case "New":
        return "bg-blue-100 text-blue-800";
      case "Contacted":
        return "bg-yellow-100 text-yellow-800";
      case "Disqualified":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Leads</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Name</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Lead Score</TableHead>
              <TableHead className="text-center">Subscribe</TableHead>
              <TableHead>Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="font-medium">
                  <div>{lead.name}</div>
                  <div className="text-xs text-muted-foreground">{lead.email}</div>
                </TableCell>
                <TableCell>{lead.company}</TableCell>
                <TableCell>
                  <Badge className={`${getStatusColor(lead.status)} hover:${getStatusColor(lead.status)} font-normal`}>
                    {lead.status}
                  </Badge>
                </TableCell>
                <TableCell className={`text-right font-medium ${getScoreColor(lead.score)}`}>
                  {lead.score}
                </TableCell>
                <TableCell className="text-center">
                  {lead.score > 50 ? (
                    <Check size={16} className="mx-auto text-green-500" />
                  ) : (
                    <X size={16} className="mx-auto text-red-500" />
                  )}
                </TableCell>
                <TableCell className="text-muted-foreground">{lead.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
