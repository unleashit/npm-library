import React from 'react';
import { ChevronLeft, ChevronRight } from './Icons';
import { ClickHandlerEvent } from './pagination';

type DirectionBtn = {
  currentOffset: number;
  perPage: number;
  clsName: (title: string) => string;
  clickHandler: (type: ClickHandlerEvent, pageNumber?: number) => void;
  prevLabel?: string;
  nextLabel?: string;
};

export const PrevBtn = ({
  currentOffset,
  perPage,
  prevLabel,
  clickHandler,
  clsName,
}: DirectionBtn) =>
  currentOffset - perPage >= 0 ? (
    <button
      type="button"
      className={clsName('prev')}
      onClick={() => clickHandler('prev')}
    >
      <ChevronLeft className={clsName('chevronLeft')} /> {prevLabel}
    </button>
  ) : null;

export const NextBtn = ({
  currentOffset,
  perPage,
  nextLabel,
  clsName,
  total,
  clickHandler,
}: DirectionBtn & { total: number }) =>
  currentOffset + perPage < total ? (
    <button
      type="button"
      className={clsName('next')}
      onClick={() => clickHandler('next')}
    >
      {nextLabel} <ChevronRight className={clsName('chevronRight')} />
    </button>
  ) : null;
