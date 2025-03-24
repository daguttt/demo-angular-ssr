import { AngularAppEngine } from '@angular/ssr';
import { AngularNodeAppEngine } from '@angular/ssr/node';

import { netlifyRequestHandler } from './netlify-request-handler';
import { nodeRequestHandler } from './node-request-handler';
import { env } from './env';

export const netlifyAppEngineHandler =
  env.RUNTIME_PROVIDER === 'netlify'
    ? netlifyRequestHandler(new AngularAppEngine())
    : null;

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler =
  env.RUNTIME_PROVIDER === 'netlify'
    ? netlifyAppEngineHandler
    : nodeRequestHandler(new AngularNodeAppEngine());
