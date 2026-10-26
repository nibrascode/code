import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { localeRewrite } from "@/lib/locale-rewrite";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({ routeTree, defaultErrorComponent: AppErrorComponent, rewrite: localeRewrite });
}
