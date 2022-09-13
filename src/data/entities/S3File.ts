import { User } from "./User";

export interface S3File {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  color?: string;
  users: User[];
  // card: Card[];
}
