import type { Opening } from "@/models/opening.model";

export interface Family {
  name: string;
  fen: string;
  link: string;
  variants: Opening[];
}
