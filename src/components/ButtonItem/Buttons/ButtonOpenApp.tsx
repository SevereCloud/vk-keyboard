/** @jsxImportSource use-signals */

"use client";

import { Button } from "@vkontakte/vkui";
import { $ } from "use-signals";
import * as keyboard from "@/logic/keyboard";
import { Icon16Services } from "@vkontakte/icons";

export function ButtonOpenApp({
  children: button,
  ...restProps
}: {
  children: keyboard.ButtonOpenApp;
}) {
  return (
    <Button before={<Icon16Services />} mode="secondary" {...restProps}>
      {$(button.action.label)}
    </Button>
  );
}
