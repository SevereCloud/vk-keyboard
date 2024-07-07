/** @jsxImportSource use-signals */

"use client";

import { Button } from "@vkontakte/vkui";
import { $, useSignal } from "use-signals";
import * as keyboard from "@/logic/keyboard";
import { colorToButtonProps } from "./colorToButtonProps";

export function ButtonCallback({
  children: button,
  ...restProps
}: {
  children: keyboard.ButtonCallback;
}) {
  const color = useSignal(button.color);

  return (
    <Button {...colorToButtonProps[color]} {...restProps}>
      {$(button.action.label)}
    </Button>
  );
}
