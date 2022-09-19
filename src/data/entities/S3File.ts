import { IUser } from "./User";

export interface IS3File {
  id: number;
  created_at: Date;
  updated_at: Date;
  title: string;
  color?: string;
  users: IUser[];
  // card: Card[];
}
