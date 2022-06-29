import { IOccupation } from "./occupation";

export interface ICharacter {
  char_id: number;
  name: string;
  nickname: string;
  img: string;
  status: string;
  occupation: IOccupation[];
}
