import { IUser } from "./User";

export interface IComment {
  user: IUser;
  user_id: number;
  // card: Card;
  card_id: number;
  comment: string;
}
