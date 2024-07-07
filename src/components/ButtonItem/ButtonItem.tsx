"use client";

import * as keyboard from "@/logic/keyboard";
import * as React from "react";
import { ButtonOpenLink } from "./Buttons/ButtonOpenLink";
import { useSelected } from "./useSelected";
import styles from "./ButtonItem.module.css";
import { ButtonLocation } from "./Buttons/ButtonLocation";
import { ButtonVKPay } from "./Buttons/ButtonVKPay";
import { ButtonOpenApp } from "./Buttons/ButtonOpenApp";
import { ButtonText } from "./Buttons/ButtonText";
import { ButtonCallback } from "./Buttons/ButtonCallback";
import { Button } from "@vkontakte/vkui";

export function ButtonItem({
  children: button,
}: {
  children: keyboard.Button;
}) {
  const [selected, setSelected] = useSelected(button);

  const buttonProps: React.ComponentProps<typeof Button> = {
    className: selected ? styles.selected : undefined,
    stretched: true,
    size: selected ? "s" : "m",
    onClick: () => setSelected(),
  };

  if (button instanceof keyboard.ButtonText) {
    return <ButtonText {...buttonProps}>{button}</ButtonText>;
  }

  if (button instanceof keyboard.ButtonOpenLink) {
    return <ButtonOpenLink {...buttonProps}>{button}</ButtonOpenLink>;
  }

  if (button instanceof keyboard.ButtonLocation) {
    return <ButtonLocation {...buttonProps} />;
  }

  if (button instanceof keyboard.ButtonVKPay) {
    return <ButtonVKPay {...buttonProps} />;
  }

  if (button instanceof keyboard.ButtonOpenApp) {
    return <ButtonOpenApp {...buttonProps}>{button}</ButtonOpenApp>;
  }

  if (button instanceof keyboard.ButtonCallback) {
    return <ButtonCallback {...buttonProps}>{button}</ButtonCallback>;
  }

  return null;
}
