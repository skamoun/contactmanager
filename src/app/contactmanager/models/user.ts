import { Note } from "./note";

export class User {
  id:number | undefined;
  birthday:Date | undefined;
  name:string | undefined;
  avatar:string | undefined;
  bio:string | undefined;
  notes:Note[]=[];
  
}
