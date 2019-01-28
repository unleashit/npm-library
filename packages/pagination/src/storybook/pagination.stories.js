import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Pagination from "..";
import List from "./List";

storiesOf("Pagination", module).add("pagination", () => (
  <List data={[1, 2, 3]}>
    <Pagination />
  </List>
));
