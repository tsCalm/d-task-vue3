export interface IUser {
  id: number;
  createdAt: Date;
  updatedAt: Date;
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
  // pf_img: S3File;
}
