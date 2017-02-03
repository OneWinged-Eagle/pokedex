import { SerializableHelper } from "../helpers/serializable.helper";

export class Skill extends SerializableHelper
{
  accuracy: number;
  category: string;
  cname: string;
  ename: string;
  id: number;
  jname: string;
  power: number;
  pp: number;
  type: string;

  constructor(skillJson: any)
  {
    super();

    this.fillFromJson(skillJson);
  }

  getDescription(): string
  {
    return this.type + ", " + (this.power === null ? "no" : this.power) + " power, " + (this.accuracy === null ? "no" : this.accuracy + "%") + " accuracy, " + this.pp + " PP";
  }
}
