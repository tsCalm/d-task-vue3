import { IS3File } from "./S3File";

export interface IUser {
  id: number;
  created_at: Date;
  updated_at: Date;
  socket_id?: string;
  name: string;
  position: string;
  email: string;
  password: string;
  // projects: Project[];
  // teamTags: TeamTag[];
  // messages: Message[];
  // cards: Card[];
  // comments: Comment[];
  pf_img: IS3File;
}
