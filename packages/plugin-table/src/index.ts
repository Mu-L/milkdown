import { prosePluginFactory, remarkPluginFactory } from '@milkdown/core';
import { columnResizing, tableEditing } from 'prosemirror-tables';
import gfm from 'remark-gfm';
import { tableNodes } from './nodes';
import { tableOperatorPlugin } from './table-operator-plugin';

export const remarkGFMPlugin = remarkPluginFactory(gfm);
export const tableEditPlugin = prosePluginFactory([columnResizing({}), tableOperatorPlugin(), tableEditing()]);

export const tablePlugins = [remarkGFMPlugin, tableEditPlugin];
export const table = [...tablePlugins, ...tableNodes];

export * from './nodes';
export * from './utils';