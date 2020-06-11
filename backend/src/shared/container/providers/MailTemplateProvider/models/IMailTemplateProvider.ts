import IParseMailTemplateDTO from '../dtos/IParseTemplateParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
