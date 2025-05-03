
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

// Initial data for the Kanban board
const initialColumns = {
  new: {
    id: "new",
    title: "New Leads",
    color: "bg-blue-500",
    items: [
      {
        id: "1",
        name: "John Smith",
        company: "Acme Corp",
        priority: "High",
        assignee: { name: "Alex", avatar: "" },
        date: "Today"
      },
      {
        id: "2",
        name: "Sarah Johnson",
        company: "Globex Inc",
        priority: "Medium",
        assignee: { name: "Taylor", avatar: "" },
        date: "Yesterday"
      }
    ]
  },
  contacted: {
    id: "contacted",
    title: "Contacted",
    color: "bg-yellow-500",
    items: [
      {
        id: "3",
        name: "Michael Brown",
        company: "Contoso Ltd",
        priority: "Low",
        assignee: { name: "Jordan", avatar: "" },
        date: "May 11"
      }
    ]
  },
  qualified: {
    id: "qualified",
    title: "Qualified",
    color: "bg-green-500",
    items: [
      {
        id: "5",
        name: "David Lee",
        company: "MegaCorp",
        priority: "High",
        assignee: { name: "Casey", avatar: "" },
        date: "May 9"
      }
    ]
  },
  disqualified: {
    id: "disqualified",
    title: "Disqualified",
    color: "bg-red-500",
    items: [
      {
        id: "4",
        name: "Emily Wilson",
        company: "Startup XYZ",
        priority: "Low",
        assignee: { name: "Morgan", avatar: "" },
        date: "May 10"
      }
    ]
  }
};

const LeadsKanban = () => {
  const [columns, setColumns] = useState(initialColumns);
  const { toast } = useToast();

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const { source, destination } = result;
    
    // If dropped in a different column
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId as keyof typeof columns];
      const destColumn = columns[destination.droppableId as keyof typeof columns];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
      
      toast({
        title: "Lead status updated",
        description: `${removed.name} moved to ${destColumn.title}`
      });
    } else {
      // If dropped in the same column
      const column = columns[source.droppableId as keyof typeof columns];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {Object.values(columns).map((column) => (
          <div key={column.id} className="min-w-[280px] w-[280px]">
            <div className="flex items-center gap-2 mb-3 px-1">
              <div className={`w-3 h-3 rounded-full ${column.color}`}></div>
              <h3 className="font-medium">{column.title}</h3>
              <Badge variant="outline" className="ml-auto">
                {column.items.length}
              </Badge>
            </div>
            
            <Droppable droppableId={column.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="space-y-3"
                >
                  {column.items.map((item, index) => (
                    <Draggable 
                      key={item.id} 
                      draggableId={item.id} 
                      index={index}
                    >
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="p-3 bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                        >
                          <div className="space-y-2">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium">{item.name}</h4>
                              <Badge className={`${getPriorityColor(item.priority)}`}>
                                {item.priority}
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {item.company}
                            </div>
                            <div className="flex justify-between items-center pt-2">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage src={item.assignee.avatar} />
                                  <AvatarFallback className="text-xs">
                                    {item.assignee.name.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-xs">{item.assignee.name}</span>
                              </div>
                              <span className="text-xs text-muted-foreground">
                                {item.date}
                              </span>
                            </div>
                          </div>
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default LeadsKanban;
