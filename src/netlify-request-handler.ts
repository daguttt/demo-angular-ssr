import { AngularAppEngine } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context';

export function buildNetlifyAppEngineHandler(
  angularAppEngine: AngularAppEngine
) {
  return async function netlifyAppEngineHandler(
    request: Request
  ): Promise<Response> {
    const context = getContext();

    // Example API endpoints can be defined here.
    // Uncomment and define endpoints as necessary.
    // const pathname = new URL(request.url).pathname;
    // if (pathname === '/api/hello') {
    //   return Response.json({ message: 'Hello from the API' });
    // }

    const result = await angularAppEngine.handle(request, context);
    return result || new Response('Not found', { status: 404 });
  };
}

