import { createFileRoute } from "@tanstack/react-router";
import { LibraryIndex } from "@/components/library-page";

export const Route = createFileRoute("/programming/")({
  component: () => <LibraryIndex section="programming" />,
});
