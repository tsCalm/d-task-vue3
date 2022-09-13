import { IUser } from "./User";

export interface IProject {
  owner_id: number;
  start_date: Date;
  end_date: Date;
  project_name: string;
  // cards: Card[];
  users: IUser[];
}
