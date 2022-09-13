import { User } from "./User";

export interface Message {
  user: User;
  user_id: number;
  text: string;
}
