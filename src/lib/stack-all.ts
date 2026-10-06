import { STACK_EXTRA } from "@/lib/stack-extra";
import { STACK_MORE } from "@/lib/stack-more";
import { STACK_NET } from "@/lib/stack-net";
import { STACK_OPS } from "@/lib/stack-ops";
import { STACK_PAGES } from "@/lib/stack-pages";
import { STACK_REST } from "@/lib/stack-rest";
import { STACK_TOOLS } from "@/lib/stack-tools";

export const ALL_STACK = [...STACK_PAGES, ...STACK_REST, ...STACK_EXTRA, ...STACK_TOOLS, ...STACK_OPS, ...STACK_NET, ...STACK_MORE];
