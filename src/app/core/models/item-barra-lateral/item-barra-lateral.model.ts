import { IItem } from "../item/item.model";

export interface IItemBarraLateral {
  id?: string;
  items?: IItem[];
  position?: 'left' | 'right';
}
