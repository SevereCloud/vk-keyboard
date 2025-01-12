/** @jsxImportSource use-signals */

"use client";

import * as React from "react";
import { ButtonOpenLink } from "@/logic/keyboard";
import { ButtonActionPayloadForm } from "./FormItem/ButtonActionPayloadForm";
import { ButtonActionLabelForm } from "./FormItem/ButtonActionLabelForm";
import { FormItem, Input } from "@vkontakte/vkui";
import { useSignal, $ } from "use-signals";

type FormProps = Readonly<{
  button: ButtonOpenLink;
}>;

function ButtonActionLinkForm({ button }: FormProps) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    button.action.link.set(event.currentTarget.value);
  };

  const validateLink = useSignal(button.action.validateLink);

  return (
    <FormItem
      top="Ссылка"
      htmlFor="link"
      status={validateLink.length ? "error" : undefined}
      bottom={validateLink.join(", ")}
    >
      <Input
        id="link"
        type="text"
        placeholder="https://vk.com"
        value={$(button.action.link)}
        onChange={handleChange}
      />
    </FormItem>
  );
}

export function ButtonOpenLinkForm({ button }: FormProps) {
  return (
    <>
      <ButtonActionLabelForm button={button}/>
      <ButtonActionLinkForm button={button}/>
      <ButtonActionPayloadForm action={button.action} />
    </>
  );
}
