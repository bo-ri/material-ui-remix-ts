declare module "react-router" {
  // v2 で使用される AppLoadContext
  interface AppLoadContext {
    whatever: string;
  }
 
  // TODO: ローダーで `Route.LoaderArgs` に移行したら、これを削除します
  interface LoaderFunctionArgs {
    context: AppLoadContext;
  }
 
  // TODO: アクションで `Route.ActionArgs` に移行したら、これを削除します
  interface ActionFunctionArgs {
    context: AppLoadContext;
  }
}
 
export {}; // これをモジュールとして扱うために TS に必要

