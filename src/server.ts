import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { AngularNodeAppEngine } from '@angular/ssr/node';

import { buildNetlifyAppEngineHandler } from './netlify-request-handler';
import { nodeRequestHandler } from './node-request-handler';
import { env } from './env';

export const netlifyAppEngineHandler = buildNetlifyAppEngineHandler(
  new AngularAppEngine()
);

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler =
  env.RUNTIME_PROVIDER === 'netlify'
    ? createRequestHandler(netlifyAppEngineHandler!)
    : nodeRequestHandler(new AngularNodeAppEngine());
