import * as React from "react";
import type { MetaFunction } from "react-router";
import { Link as RemixLink, useFetcher } from "react-router";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

// https://remix.run/docs/en/main/route/meta
export const meta: MetaFunction = () => [
  { title: "Remix Starter" },
  { name: "description", content: "Welcome to remix!" },
];

// https://remix.run/docs/en/main/file-conventions/routes#basic-routes
export default function Index() {
  const fetcher = useFetcher();
  return (
    <React.Fragment>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Material UI Remix in TypeScript example
      </Typography>
      <Link to="/about" color="secondary" component={RemixLink}>
        Go to the about page
      </Link>
      <fetcher.Form method="POST" action="/action">
        <input type="text" name="input" />
        <button type="submit">test</button>
      </fetcher.Form>
    </React.Fragment>
  );
}
