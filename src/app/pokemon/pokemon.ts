export class Pokemon
{
  base:
  {
    Attack: number,
    Defense: number,
    HP: number,
    "Sp.Atk": number,
    "Sp.Def": number,
    Speed: number
  };
  cname: string;
  ename: string;
  id: number;
  jname: string;
  skills:
  {
    egg: number[],
    level_up: number[],
    tm: number[],
    transfer: number[],
    tutor: number[]
  };
  type: string[];
}
