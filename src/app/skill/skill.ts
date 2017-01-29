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
    return this.id + " - " + this.ename + ": " + this.type + " move with " + (this.power === null ? "no" : this.power) + " power and " + (this.accuracy === null ? "no" : this.accuracy + "%") + " accuracy (" + this.pp + " uses)";
  }
}
