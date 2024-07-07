import * as React from "react";
import { Button } from "@vkontakte/vkui";
import { Icon16Place } from "@vkontakte/icons";

export function ButtonLocation({
  ...restProps
}: React.ComponentProps<typeof Button>) {
  return (
    <Button before={<Icon16Place />} {...restProps}>
      Отправить своё местоположение
    </Button>
  );
}
