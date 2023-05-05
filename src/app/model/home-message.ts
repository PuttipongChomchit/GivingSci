export class Message {
    key!: string;
    name!: string;
    url!: string;
  
    note: string;
  
    constructor(note: string) {
      this.note = note;
    }

}