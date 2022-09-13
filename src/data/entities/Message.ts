import { IUser } from "./User";

export interface IMessage {
  user: IUser;
  user_id: number;
  text: string;
}
