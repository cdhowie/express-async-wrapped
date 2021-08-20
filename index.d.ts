import type { Handler } from 'express';

declare function wrap<T extends Handler | Handler[]>(fn: T): T;

export = wrap;
