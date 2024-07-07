"use client";

import * as app from "@/logic";
import { useSignal } from "use-signals";
import { Code } from "./Code/Code";

function PreviewCode() {
  const code = useSignal(app.errorsView.code);

  return <Code>{code}</Code>;
}

export function ErrorsView() {
  return (
    <>
      <PreviewCode />
    </>
  );
}
