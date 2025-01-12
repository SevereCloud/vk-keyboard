/** @jsxImportSource use-signals */
"use client";
import * as React from "react";
import { FormItem, Input } from "@vkontakte/vkui";
import { $, Signal, useSignal } from "use-signals";

interface ButtonWithActionLabelProps {
  action: {
    label: Signal.State<string>;
    validateLabel: Signal.Computed<Array<string>>;
  };
}

export function ButtonActionLabelForm({
  button,
}: {
  button: ButtonWithActionLabelProps;
}) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    button.action.label.set(event.currentTarget.value);
  };

  const validateLabel = useSignal(button.action.validateLabel);

  return (
    <FormItem
      top="Текст кнопки"
      htmlFor="label"
      status={validateLabel.length ? "error" : undefined}
      bottom={validateLabel.join(", ")}
    >
      <Input
        id="label"
        type="text"
        placeholder="Label"
        value={$(button.action.label)}
        onChange={handleChange}
      />
    </FormItem>
  );
}
