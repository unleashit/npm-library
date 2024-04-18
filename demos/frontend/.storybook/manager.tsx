import npmLibraryTheme from '../src/lib/npmLibraryTheme';
import React from 'react';
import { AddonPanel, Badge, Spaced } from '@storybook/components';
import { STORY_CHANGED } from '@storybook/core-events';
import {
  addons,
  types,
  useParameter,
  useAddonState,
  useChannel,
} from '@storybook/manager-api';
import '../src/assets/manager.css';

addons.setConfig({
  theme: npmLibraryTheme,
  panelPosition: 'right',
  sidebar: {},
});

const PARAM_KEY = 'notes';
const ADDON_ID = 'custom-panel/notes';
const PANEL_ID = `${ADDON_ID}/panel`;
const EVENT_ID = `${ADDON_ID}/notes-event`;
const CLEAR_ID = `${ADDON_ID}/notes-clear`;
const DEFAULT_NOTE = 'No notes for this story.';

function Title() {
  const [{ count }, setCount] = useAddonState(ADDON_ID, { count: 0 });

  useChannel({
    [EVENT_ID]: ({ paramCount }) => {
      setCount((c) => ({ ...c, count: paramCount }));
    },
    [STORY_CHANGED]: () => {
      setCount((c) => ({ ...c, count: 0 }));
    },
    [CLEAR_ID]: () => {
      setCount((c) => ({ ...c, count: 0 }));
    },
  });

  /* @ts-expect-error - storybook jsx config issue */
  const suffix = count === 0 ? '' : <Badge status="neutral">{count}</Badge>;

  return (
    /* @ts-expect-error - storybook jsx config issue */
    <div key={Math.random()}>
      {/* @ts-expect-error - storybook jsx config issue */}
      <Spaced col={1}>
        {/* @ts-expect-error - storybook jsx config issue */}
        <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
          Notes
        </span>
        {suffix}
      </Spaced>
    </div>
  );
}

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: Title,
    paramKey: PARAM_KEY,
    render: ({ active }) => {
      const parameters = useParameter<React.ReactNode>(PARAM_KEY, DEFAULT_NOTE);
      React.useMemo(() => {
        if (parameters !== DEFAULT_NOTE) {
          const count = Array.isArray(parameters) ? parameters.length : 1;
          addons.getChannel().emit(EVENT_ID, { paramCount: count });
        }
      }, [parameters]);

      return (
        /* @ts-expect-error - storybook jsx config issue */
        <AddonPanel active={active || false}>
          {/* @ts-expect-error - storybook jsx config issue */}
          <div className="notes-panel">{parameters}</div>
        </AddonPanel>
      );
    },
  });
});
