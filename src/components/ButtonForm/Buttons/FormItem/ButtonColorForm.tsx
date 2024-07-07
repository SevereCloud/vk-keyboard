/** @jsxImportSource use-signals */

"use client";

import {
  FormItem,
  SegmentedControl,
  SegmentedControlValue,
} from "@vkontakte/vkui";
import { $ } from "use-signals";
import { ButtonColor } from "@/logic/keyboard";
import { Icon24SquareFilled } from "@vkontakte/icons";

const colors = {
  primary: "var(--vkui--color_background_accent_themed)",
  secondary: "var(--vkui--color_background_secondary_alpha)",
  positive: "var(--vkui--color_background_positive)",
  negative: "var(--vkui--color_background_negative)",
};

export function ButtonColorForm({
  children: button,
}: {
  children: ButtonColor;
}) {
  const handleChange = (value: SegmentedControlValue) => {
    button.color.set(value as "primary");
  };

  return (
    <FormItem top="Цвет" htmlFor="color">
      <SegmentedControl
        id="color"
        name="color"
        value={$(button.color)}
        onChange={handleChange}
        options={(
          ["primary", "secondary", "positive", "negative"] as const
        ).map((color) => ({
          label: (
            <Icon24SquareFilled
              fill={colors[color]}
              aria-hidden={false}
              aria-label={color}
            />
          ),
          value: color,
        }))}
      />
    </FormItem>
  );
}
