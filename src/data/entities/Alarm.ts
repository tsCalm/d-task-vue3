import { AlarmType } from "@/common/enum.type";
import { IUser } from "./User";

export interface IAlarm {
  id: number;
  event_type: AlarmType;
  user: IUser;
  user_id: number;
  target_user_id: number;
  event_id: number;
  event_title: string;
  event_sub_title: string;
  check: boolean;
  created_at: Date;
  updated_at: Date;
}
