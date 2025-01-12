/** @jsxImportSource use-signals */

"use client";

import * as React from "react";
import { ButtonVKPay } from "@/logic/keyboard";
import { ButtonActionPayloadForm } from "./FormItem/ButtonActionPayloadForm";
import { FormItem, Input } from "@vkontakte/vkui";
import { useSignal, $ } from "use-signals";

type FormProps = Readonly<{
  button: ButtonVKPay;
}>;

function ButtonActionHashForm({ button }: FormProps) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    button.action.hash.set(event.currentTarget.value);
  };

  const validateHash = useSignal(button.action.validateHash);

  return (
    <FormItem
      top="Параметры платежа VK Pay"
      htmlFor="hash"
      status={validateHash.length ? "error" : undefined}
      bottom={validateHash.join(", ")}
    >
      <Input
        id="hash"
        type="text"
        placeholder="action=transfer-to-group&group_id=1&aid=10"
        value={$(button.action.hash)}
        onChange={handleChange}
      />
    </FormItem>
  );
}

export function ButtonVKPayForm({ button }: FormProps) {
  return (
    <>
      <ButtonActionHashForm button={button} />
      <ButtonActionPayloadForm action={button.action} />
    </>
  );
}
