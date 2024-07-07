"use client";

import * as app from "@/logic";
import { useSignal } from "use-signals";
import { Text, Div, Link } from "@vkontakte/vkui";
import { Code } from "./Code/Code";

function PreviewCode() {
  const code = useSignal(app.vkioView.code);

  return <Code language="javascript">{code}</Code>;
}

function Description() {
  return (
    <Div>
      <Text>
        Для модуля{" "}
        <Link
          href="https://negezor.github.io/vk-io/ru/guide/keyboard.html"
          target="_blank"
        >
          vk-io
        </Link>
      </Text>
    </Div>
  );
}

export function VKIOView() {
  return (
    <>
      <Description />
      <PreviewCode />
    </>
  );
}
