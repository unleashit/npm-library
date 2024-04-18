import { action } from '@storybook/addon-actions';

type anyObj = Record<string, unknown>;

type StoryBookHandler<TFormValues = anyObj> = {
  route: string | ((values: TFormValues) => string);
  actionName?: string;
};

export const backendDemoHandler = <
  TFormValues extends anyObj = anyObj,
  TServerResponse extends anyObj = anyObj,
>({
  route,
  actionName = 'handler',
}: StoryBookHandler) => {
  return async (values: TFormValues): Promise<TServerResponse> => {
    const calculatedRoute = typeof route === 'string' ? route : route(values);

    return await fetch(
      `${import.meta.env.STORYBOOK_DEMO_URL}${calculatedRoute}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      },
    ).then(async (resp) => {
      const json = await resp.json();
      action(actionName)(json);
      return json;
    });
  };
};
