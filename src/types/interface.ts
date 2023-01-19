export interface EachList {
  id: number;
  title: string;
  desc: string;
  isDone: boolean;
}

export interface Request {
  id: number;
  edit: EachList;
}

export interface IsActive {
  isActive: boolean;
}
