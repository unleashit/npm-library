import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { linkTo } from "@storybook/addon-links";

import Pagination from "..";
import List from "./List";
import AsyncLoader from "../../../../.storybook/AsyncLoader";
import mockData from "@unleashit/mock-data";

import "@unleashit/pagination/dist/style.css";

const loader = async () =>
  (await mockData({ template: "article", total: 20 })).article;

storiesOf("Pagination", module)
  .addDecorator(withKnobs)
  .add("Pagination with list", () => (
  <AsyncLoader loader={loader}>
    {data => (
      <React.Fragment>
        <List data={data.slice(0, 3)} />
        <Pagination
          currentOffset={0}
          paginationHandler={action('clicked')}
          total={20}
          perPage={3}
        />
      </React.Fragment>
    )}
  </AsyncLoader>
));
