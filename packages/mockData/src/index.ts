import mocker from 'mocker-data-generator';

import saveToFile from './saveToFile';
import * as tplImports from './templates';

interface ImportTypes {
  [key: string]: (args?: any) => any;
}

type TemplateTypes =
  | 'product'
  | 'article'
  | 'user'
  | 'order'
  | ((args?: Record<string, unknown>) => any);

interface MultiTemplateTypes {
  template: TemplateTypes;
  total?: number;
  name?: string;
  args?: any;
  path?: string;
  hiddenFields?: string[];
}

interface MockDataArguments {
  template?: TemplateTypes | null;
  templates?: MultiTemplateTypes[] | null;
  total?: number;
  name?: string | null;
  args?: any;
  path?: string | null;
  hiddenFields?: string[];
}

const tpl: ImportTypes = tplImports;

const processTemplate = (templateType: TemplateTypes, args: any): string =>
  typeof templateType === 'function'
    ? templateType(args)
    : tpl[templateType](args);

const mockData = async ({
  template = null,
  templates = null,
  total = 10,
  name = null,
  args = {},
  path = null,
  hiddenFields = [],
}: MockDataArguments): Promise<any> => {
  /* eslint-disable no-param-reassign */
  const m = mocker();

  try {
    if (template) {
      // single schema
      if (
        typeof template !== 'function' &&
        Object.keys(tpl).indexOf(template) === -1
      ) {
        throw new Error('That template does not exist');
      }

      if (hiddenFields.length) args.hiddenFields = hiddenFields;
      const modelName =
        name || (typeof template === 'string' && template) || 'data';
      const processedTemplate = processTemplate(template, args);

      m.schema(modelName, processedTemplate, total);
    } else if (templates) {
      // multiple schemas
      templates.forEach((tmpl: any, i: number): void => {
        const modelName =
          tmpl.name ||
          (typeof tmpl.template === 'string' && tmpl.template) ||
          i.toString();
        tmpl.args = tmpl.args || {};

        if (tmpl.hiddenFields) tmpl.args.hiddenFields = tmpl.hiddenFields;

        const processedTemplate = processTemplate(tmpl.template, tmpl.args);

        m.schema(modelName, processedTemplate, tmpl.total || 10);
      });
    } else {
      throw new Error(
        'You must provide either a template or templates argument',
      );
    }

    const fakeData = await m.build();

    if (path) {
      const fileName: string =
        name || (typeof template === 'string' ? template : 'mockData');
      saveToFile(fakeData, path, fileName);
    }

    return fakeData;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default mockData;
