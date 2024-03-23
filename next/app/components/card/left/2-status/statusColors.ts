import { TodoStatus } from "@/app/api/types";

export function backgroundColor(status: TodoStatus): string {
  switch (status) {
    case "In Progress":
      return "#f4a267";
    case "Canceled":
      return "#817d7b";
    case "Done":
      return "#54d3cd";
  }
}

export function borderColor(status: TodoStatus): string {
  switch (status) {
    case "In Progress":
      return "#f3c29f";
    case "Canceled":
      return "#94908f";
    case "Done":
      return "#95dad6";
  }
}
