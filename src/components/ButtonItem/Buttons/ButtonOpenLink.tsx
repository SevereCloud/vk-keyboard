/** @jsxImportSource use-signals */

"use client";

import { Button } from "@vkontakte/vkui";
import { $ } from "use-signals";
import * as keyboard from "@/logic/keyboard";
import { Icon12ArrowUpRight } from "@vkontakte/icons";

export function ButtonOpenLink({
  children: button,
  ...restProps
}: {
  children: keyboard.ButtonOpenLink;
}) {
  return (
    <Button before={<Icon12ArrowUpRight />} mode="secondary" {...restProps}>
      {$(button.action.label)}
    </Button>
  );
}
