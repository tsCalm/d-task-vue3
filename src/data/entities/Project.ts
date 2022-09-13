import { User } from "./User";

export interface Project {
  owner_id: number;
  start_date: Date;
  end_date: Date;
  project_name: string;
  // cards: Card[];
  users: User[];
}
