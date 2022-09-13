import { User } from "./User";

export interface IMember {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  color?: string;
  users: User[];
  // card: Card[];
}
