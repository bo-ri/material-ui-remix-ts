import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./routes/_index.tsx'),
  route('/about', './routes/about.tsx'),
  route("/action", "./routes/action.tsx"),
] satisfies RouteConfig
