/** @jsxImportSource use-signals */

"use client";
import * as React from "react";
import { FormItem, Input } from "@vkontakte/vkui";
import { $, useSignal } from "use-signals";
import { ButtonActionPayload } from "@/logic/keyboard";

export function ButtonActionPayloadForm({
  action,
}: {
  action: ButtonActionPayload;
}) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    action.payload.set(event.currentTarget.value);
  };

  const validatePayload = useSignal(action.validatePayload);

  return (
    <FormItem
      top="Полезная нагрузка"
      htmlFor="label"
      status={validatePayload.length ? "error" : undefined}
      bottom={validatePayload.join(", ")}
    >
      <Input
        id="label"
        type="text"
        placeholder="{...}"
        value={$(action.payload)}
        onChange={handleChange}
      />
    </FormItem>
  );
}
