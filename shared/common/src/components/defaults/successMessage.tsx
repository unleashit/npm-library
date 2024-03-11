import React, { ComponentType } from 'react';
import { ClsName } from '../../types';

export type BaseSuccessMessageProps = {
  clsName: ClsName;
};

type DefaultSuccessMessageProps = BaseSuccessMessageProps & {
  message: string;
};

export type ShowSuccessProps = BaseSuccessMessageProps & {
  successMessage: ComponentType<any> | string;
};

export const DefaultSuccessMessage = ({
  message,
  clsName,
}: DefaultSuccessMessageProps) => (
  <div className={clsName('success')}>
    <p>{message}</p>
  </div>
);

export const ShowSuccess = ({
  successMessage: SuccessMessage,
  clsName,
}: ShowSuccessProps) =>
  typeof SuccessMessage === 'string' ? (
    <DefaultSuccessMessage message={SuccessMessage} clsName={clsName} />
  ) : (
    <SuccessMessage clsName={clsName} />
  );
