/** @jsxImportSource use-signals */

"use client";

import * as app from "@/logic";
import { $, useSignal } from "use-signals";
import { Checkbox } from "@vkontakte/vkui";
import { Code } from "./Code/Code";

function PreviewCode() {
  const code = useSignal(app.jsonView.code);

  return <Code language="json">{code}</Code>;
}

function MinifityForm() {
  return (
    <Checkbox
      checked={$(app.jsonView.minify)}
      onChange={(e) => app.jsonView.minify.set(e.target.checked)}
    >
      Минифицировать
    </Checkbox>
  );
}

export function JsonView() {
  return (
    <>
      <MinifityForm />
      <PreviewCode />
    </>
  );
}
