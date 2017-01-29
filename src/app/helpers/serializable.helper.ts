export class SerializableHelper
{
  fillFromJson(jsonObj: any)
  {
    for (let propName in jsonObj)
      this[propName] = jsonObj[propName]
  }
}
