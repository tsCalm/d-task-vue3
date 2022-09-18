import { CardTypeEnum } from "@/common/enum.type";
import { IComment } from "./Comment";
import { IProject } from "./Project";
import { IS3File } from "./S3File";
import { ITeamTag } from "./TeamTag";
import { IUser } from "./User";

export interface ICard {
  id: number;
  card_type: CardTypeEnum;
  end_date: Date;
  title: string;
  sub_title?: string;
  content: string;
  user: IUser;
  user_id: number;
  project: IProject;
  project_id?: number;
  files: IS3File[];
  comments: IComment[];
  teamTags: ITeamTag[];
}

export type CardType = Partial<ICard>;

export class Card implements CardType {
  constructor(card: CardType) {
    const keys = Object.keys(card);
    keys.forEach((key) => console.log(key));
  }
}
