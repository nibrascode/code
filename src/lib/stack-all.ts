import { STACK_ADD } from "@/lib/stack-add";
import { STACK_BIT } from "@/lib/stack-bit";
import { STACK_EXTRA } from "@/lib/stack-extra";
import { STACK_FEW } from "@/lib/stack-few";
import { STACK_MORE } from "@/lib/stack-more";
import { STACK_NET } from "@/lib/stack-net";
import { STACK_NEXT } from "@/lib/stack-next";
import { STACK_OPS } from "@/lib/stack-ops";
import { STACK_PAGES } from "@/lib/stack-pages";
import { STACK_REST } from "@/lib/stack-rest";
import { STACK_TOOLS } from "@/lib/stack-tools";

export const ALL_STACK = [...STACK_PAGES, ...STACK_REST, ...STACK_EXTRA, ...STACK_TOOLS, ...STACK_OPS, ...STACK_NET, ...STACK_MORE, ...STACK_NEXT, ...STACK_BIT, ...STACK_ADD, ...STACK_FEW];
