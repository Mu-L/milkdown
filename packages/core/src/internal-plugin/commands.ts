/* Copyright 2021, Milkdown by Mirone. */
import { createContainer, createSlice, createTimer, Ctx, MilkdownPlugin, Slice, Timer } from '@milkdown/ctx';
import { callCommandBeforeEditorView } from '@milkdown/exception';
import type { Command } from '@milkdown/prose';

import { editorViewCtx, EditorViewReady } from './editor-view';
import { SchemaReady } from './schema';

export type Cmd<T = undefined> = (info?: T) => Command;
export type CmdKey<T = undefined> = Slice<Cmd<T>>;

export type CommandManager = {
    create: <T>(meta: CmdKey<T>, value: Cmd<T>) => void;
    get: <T>(meta: CmdKey<T>) => Cmd<T>;
    call: <T>(meta: CmdKey<T>, info?: T) => boolean;
};

export type CmdTuple<T = unknown> = [key: CmdKey<T>, value: Cmd<T>];

export const createCmd = <T>(key: CmdKey<T>, value: Cmd<T>): CmdTuple => [key, value] as CmdTuple;

export const commandsCtx = createSlice<CommandManager>({} as CommandManager, 'commands');

export const createCmdKey = <T = undefined>(): CmdKey<T> => createSlice((() => () => false) as Cmd<T>, 'cmdKey');

export const commandsTimerCtx = createSlice<Timer[]>([], 'commandsTimer');
export const CommandsReady = createTimer('CommandsReady');

export const commandsFactory =
    (getCommands: (ctx: Ctx) => CmdTuple[]): MilkdownPlugin =>
    () => {
        return (ctx) => {
            const commands = getCommands(ctx);
            const manager = ctx.get(commandsCtx);
            commands.forEach(([key, value]) => {
                manager.create(key, value);
            });
        };
    };

export const commands: MilkdownPlugin = (pre) => {
    const container = createContainer();
    const commandManager: CommandManager = {
        create: (slice, value) => slice(container.sliceMap, value),
        get: (slice) => container.getSlice(slice).get(),
        call: () => {
            throw callCommandBeforeEditorView();
        },
    };
    pre.inject(commandsCtx, commandManager).inject(commandsTimerCtx, [SchemaReady]).record(CommandsReady);
    return async (ctx) => {
        await ctx.waitTimers(commandsTimerCtx);

        ctx.done(CommandsReady);
        await ctx.wait(EditorViewReady);

        ctx.update(commandsCtx, (prev) => ({
            ...prev,
            call: (meta, info) => {
                const cmd = commandManager.get(meta);
                const command = cmd(info);
                const view = ctx.get(editorViewCtx);
                return command(view.state, view.dispatch, view);
            },
        }));
    };
};
