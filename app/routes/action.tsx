import { ActionFunctionArgs } from "react-router";

export function action({ request }: ActionFunctionArgs) {
  console.log("ACTION_REQUESTED");
  return null;
}
