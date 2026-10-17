import type { ApkError } from "@/lib/apk-errors-types";
import b1 from "@/lib/apk-errors-1";
import b2 from "@/lib/apk-errors-2";
import b3 from "@/lib/apk-errors-3";
import b4 from "@/lib/apk-errors-4";

/** Lazy chunk: full text of every extra APK / Android error page. */
export const APK_ERRORS: readonly ApkError[] = [...b1, ...b2, ...b3, ...b4];
