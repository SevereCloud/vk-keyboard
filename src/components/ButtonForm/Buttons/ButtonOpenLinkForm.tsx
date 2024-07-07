/** @jsxImportSource use-signals */

"use client";

import * as React from "react";
import { ButtonOpenLink } from "@/logic/keyboard";
import { ButtonActionPayloadForm } from "./FormItem/ButtonActionPayloadForm";
import { ButtonActionLabelForm } from "./FormItem/ButtonActionLabelForm";
import { FormItem, Input } from "@vkontakte/vkui";
import { useSignal, $ } from "use-signals";

type FormProps = Readonly<{
  children: ButtonOpenLink;
}>;

function ButtonActionLinkForm({ children: button }: FormProps) {
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

export function ButtonOpenLinkForm({ children: button }: FormProps) {
  return (
    <>
      <ButtonActionLabelForm>{button}</ButtonActionLabelForm>
      <ButtonActionLinkForm>{button}</ButtonActionLinkForm>
      <ButtonActionPayloadForm>{button.action}</ButtonActionPayloadForm>
    </>
  );
}
