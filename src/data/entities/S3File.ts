import { IUser } from "./User";

export interface IS3File {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  color?: string;
  users: IUser[];
  // card: Card[];
}
