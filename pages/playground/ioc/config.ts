import { Container } from 'inversify';
import { TYPES } from './types';
import type { Playground } from './interfaces';
import { PlaygroundService } from '../PlaygroundService';

const container = new Container();

/** bind class to interface */
container
  .bind<Playground>(TYPES.Playground)
  .to(PlaygroundService)
  .inSingletonScope();

export { container };
