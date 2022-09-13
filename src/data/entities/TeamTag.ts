import { IUser } from "./User";

export interface ITeamTag {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  color?: string;
  users: IUser[];
  // card: Card[];
}
