/* eslint-disable import/no-extraneous-dependencies */
import '../../dist/style.css';

import { action } from '@storybook/addon-actions';
/* eslint-disable-next-line */
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import mockData from '@unleashit/mock-data';
import React from 'react';

import AsyncLoader from 'npm-library/.storybook/AsyncLoader';
import Pagination from '..';
import List from './List';

const loader = async () => (await mockData({ template: 'article', total: 20 })).article;

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
  .add('Pagination with list', () => (
    <AsyncLoader loader={loader}>
      {(data) => (
        <>
          <List data={data.slice(0, 3)} />
          <Pagination
            currentOffset={0}
            paginationHandler={action('clicked')}
            total={20}
            perPage={3}
          />
        </>
      )}
    </AsyncLoader>
  ));
