import React from 'react';

import { PureTaskList } from './TaskList';
import { taskData, actionsData } from './Task.stories';
import { withKnobs, object } from '@storybook/addon-knobs/react';

export default {
  component: PureTaskList,
  title: 'TaskList',
  decorators: [withKnobs, story => <div style={{ padding: '3rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const defaultTasksData = [
  { ...taskData, id: '1', title: 'Task 1' },
  { ...taskData, id: '2', title: 'Task 2' },
  { ...taskData, id: '3', title: 'Task 3' },
  { ...taskData, id: '4', title: 'Task 4' },
  { ...taskData, id: '5', title: 'Task 5' },
  { ...taskData, id: '6', title: 'Task 6' },
];

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];

export const Default = () => <PureTaskList tasks={object('PureTaskList', defaultTasksData)} {...actionsData} />;

export const WithPinnedTasks = () => <PureTaskList tasks={object('PureTaskList', withPinnedTasksData)} {...actionsData} />;

export const Loading = () => <PureTaskList loading tasks={object('PureTaskList', [])} {...actionsData} />;

export const Empty = () => <PureTaskList tasks={object('PureTaskList', [])} {...actionsData} />;