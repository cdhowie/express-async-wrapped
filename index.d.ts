import type { Handler } from 'express';

declare function wrap(fn: Handler): Handler;

export = wrap;
