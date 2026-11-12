import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { CustomFields, type CustomField } from '../..';
import { utils } from '../..';

const { clsName } = utils.genClassNames('test', {});

const inputField: CustomField = {
  element: 'input',
  type: 'text',
  name: 'email',
  label: 'Email',
};

type HarnessProps = {
  fields: CustomField[];
  errors?: Record<string, any>;
  onSubmit?: (values: Record<string, unknown>) => void;
};

/** CustomFields needs react-hook-form's `register`, so render it in a real form */
function Harness({ fields, errors = {}, onSubmit }: HarnessProps) {
  // CustomFields is generic over the schema, so use the loose form values type
  const { register, handleSubmit } = useForm<Record<string, any>>({
    defaultValues: { email: '', message: '', color: '', terms: false },
  });

  return (
    <form onSubmit={handleSubmit((values) => onSubmit?.(values))}>
      <CustomFields
        componentName="test"
        fields={fields}
        register={register}
        errors={errors}
        clsName={clsName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

describe('<CustomFields />', () => {
  it('renders an input wired to the field name and label', () => {
    render(<Harness fields={[inputField]} />);

    const input = screen.getByLabelText('Email');

    expect(input).toHaveAttribute('name', 'email');
    expect(input).toHaveAttribute('id', 'test-form-email');
    expect(input).toHaveClass('unl-test__input');
  });

  it('renders textarea and select elements', () => {
    render(
      <Harness
        fields={[
          {
            element: 'textarea',
            type: 'text',
            name: 'message',
            label: 'Message',
          },
          {
            element: 'select',
            type: 'text',
            name: 'color',
            label: 'Color',
            options: [
              ['Red', 'red'],
              ['Blue', 'blue', { disabled: true }],
            ],
          },
        ]}
      />,
    );

    expect(screen.getByLabelText('Message').tagName).toEqual('TEXTAREA');
    expect(screen.getByLabelText('Message')).toHaveClass('unl-test__textarea');

    const select = screen.getByLabelText('Color') as HTMLSelectElement;
    expect(select.tagName).toEqual('SELECT');
    expect(select.options).toHaveLength(2);
    expect(select.options[1]).toBeDisabled();
  });

  it('uses the checkbox class for checkbox inputs', () => {
    render(
      <Harness
        fields={[
          { element: 'input', type: 'checkbox', name: 'terms', label: 'Terms' },
        ]}
      />,
    );

    expect(screen.getByLabelText('Terms')).toHaveClass('unl-test__checkbox');
  });

  it('spreads extra html attributes onto the field', () => {
    render(
      <Harness
        fields={[{ ...inputField, attrs: { placeholder: 'you@example.com' } }]}
      />,
    );

    expect(screen.getByLabelText('Email')).toHaveAttribute(
      'placeholder',
      'you@example.com',
    );
  });

  it('renders field values submitted through react-hook-form', async () => {
    const onSubmit = jest.fn();
    const user = userEvent.setup();
    render(<Harness fields={[inputField]} onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText('Email'), 'test@test.com');
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({ email: 'test@test.com' }),
      ),
    );
  });

  it('renders an error message and error class when the field has one', () => {
    render(
      <Harness
        fields={[inputField]}
        errors={{ email: { message: 'Email is required' } }}
      />,
    );

    expect(screen.getByText('Email is required')).toHaveClass(
      'unl-test__error-message',
    );
    expect(screen.getByLabelText('Email')).toHaveClass('unl-test__input-error');
  });

  it('omits the label when none is supplied', () => {
    const { container } = render(
      <Harness fields={[{ ...inputField, label: undefined }]} />,
    );

    expect(container.querySelector('label')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('throws for a select without options', () => {
    const errorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);

    expect(() =>
      render(
        <Harness
          fields={[
            { element: 'select', type: 'text', name: 'color', label: 'C' },
          ]}
        />,
      ),
    ).toThrow('Must provide an options prop for a select field');

    errorSpy.mockRestore();
  });

  it('throws for an unsupported element', () => {
    const errorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);

    expect(() =>
      render(
        <Harness
          fields={[
            {
              element: 'fieldset',
              type: 'text',
              name: 'x',
              label: 'X',
            } as unknown as CustomField,
          ]}
        />,
      ),
    ).toThrow('Unsupported custom field element `fieldset`');

    errorSpy.mockRestore();
  });
});
