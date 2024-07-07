import * as React from "react";
import { Button } from "@vkontakte/vkui";
import { Icon72VkPayLogo } from "../../icons/Icon72VkPayLogo";

export function ButtonVKPay({
  ...restProps
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      after={<Icon72VkPayLogo width={55} height={16} />}
      style={{ lineHeight: 0 }}
      {...restProps}
    >
      Оплатить через
    </Button>
  );
}
