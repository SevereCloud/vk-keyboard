"use client";

import * as app from "@/logic";
import { useSignal } from "use-signals";
import { Text, Div, Link } from "@vkontakte/vkui";
import { Code } from "./Code/Code";

function PreviewCode() {
  const code = useSignal(app.golangView.code);

  return <Code language="go">{code}</Code>;
}

function Description() {
  return (
    <Div>
      <Text>
        Для модуля{" "}
        <Link href="https://github.com/SevereCloud/vksdk" target="_blank">
          github.com/SevereCloud/vksdk
        </Link>
      </Text>
    </Div>
  );
}

export function GolangView() {
  return (
    <>
      <Description />
      <PreviewCode />
    </>
  );
}
