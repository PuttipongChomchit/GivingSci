export class BaseCharacter {
    key!: string;
    name!: string;

    base_hp: number;
    base_atk: number;
    base_def: number;
    base_em:number;
    base_cr:number;
    base_cd:number;
    base_heal:number;
    base_er:number;
    pyro_bonus :number;
    hydro_bonus:number;
    dendro_bonus:number;
    electro_bonus:number;
    anemo_bonus:number;
    cryo_bonus:number;
    geo_bonus:number;
    physical_bonus:number;
  
    constructor(base_hp: number,base_atk: number,  base_def:number,base_em: number,base_cr: number,
        base_cd: number,base_heal: number,base_er: number,pyro_bonus: number,hydro_bonus: number,dendro_bonus: number,
        electro_bonus: number,anemo_bonus: number,cryo_bonus: number,geo_bonus: number,physical_bonus: number) {
      this.base_hp = base_hp;
      this.base_atk = base_atk;
      this.base_def = base_def;
      this.base_em = base_em;
      this.base_cr = base_cr;
      this.base_cd = base_cd;
      this.base_heal = base_heal;
      this.base_er = base_er;
      this.pyro_bonus = pyro_bonus;
      this.hydro_bonus = hydro_bonus;
      this.dendro_bonus = dendro_bonus;
      this.electro_bonus= electro_bonus,
      this.anemo_bonus= anemo_bonus,
      this.cryo_bonus= cryo_bonus,
      this.geo_bonus= geo_bonus,
      this.physical_bonus= physical_bonus

    }
}