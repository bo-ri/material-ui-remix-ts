import { type RouteConfig, index, route } from '@remix-run/route-config';

export default [
  index('./routes/_index.tsx'),
  route('/about', './routes/about.tsx')
] satisfies RouteConfig