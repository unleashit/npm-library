import mocker from "mocker-data-generator";
import * as tplImports from "./templates";
import saveToFile from "./saveToFile";

type ImportTypes = {
  [key: string]: (args?: any) => any;
};

type TemplateTypes =
  "product"
  | "article"
  | "user"
  | "order"
  | ((args?: {}) => any);

interface MultiTemplateTypes {
  template: TemplateTypes;
  total?: number;
  name?: string;
  args?: any;
  path?: string;
  hiddenFields?: string[];
}

interface MockDataArguments {
  template?: TemplateTypes;
  templates?: MultiTemplateTypes[];
  total?: number;
  name?: string;
  args?: any;
  path?: string;
  hiddenFields?: string[];
}

type MockDataType = ({  }: MockDataArguments) => Promise<any>;

const tpl: ImportTypes = tplImports;

const processTemplate = (templateType: TemplateTypes, args: any) => {
  return typeof templateType === "function"
    ? templateType(args)
    : tpl[templateType](args);
};

const mockData: MockDataType = async ({
  template = null,
  templates = null,
  total = 10,
  name = null,
  args = {},
  path = null,
  hiddenFields = []
}) => {
  const m = mocker();

  try {
    if (template) {
      // single schema
      if (
        typeof template !== "function" &&
        Object.keys(tpl).indexOf(template) === -1
      ) {
        throw new Error("That template does not exist");
      }

      if (hiddenFields.length) args.hiddenFields = hiddenFields;
      const modelName =
        name || (typeof template === "string" && template) || "data";
      const processedTemplate = processTemplate(template, args);

      m.schema(modelName, processedTemplate, total);
    } else if (templates) {
      // multiple schemas
      templates.forEach((tpl: any, i: number) => {
        const modelName =
          tpl.name ||
          (typeof tpl.template === "string" && tpl.template) ||
          i.toString();
        tpl.args = tpl.args || {};

        if (tpl.hiddenFields) tpl.args.hiddenFields = tpl.hiddenFields;

        const processedTemplate = processTemplate(tpl.template, tpl.args);

        m.schema(modelName, processedTemplate, tpl.total || 10);
      });
    } else {
      throw new Error(
        "You must provide either a template or templates argument"
      );
    }

    const fakeData = await m.build();

    if (path) {
      const fileName: string = name
        ? name
        : typeof template === "string"
          ? template
          : "mockData";
      saveToFile(fakeData, path, fileName);
    }

    return fakeData;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default mockData;
