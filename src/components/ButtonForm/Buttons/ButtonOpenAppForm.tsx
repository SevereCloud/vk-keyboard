/** @jsxImportSource use-signals */

"use client";

import * as React from "react";
import { ButtonOpenApp } from "@/logic/keyboard";
import { ButtonActionPayloadForm } from "./FormItem/ButtonActionPayloadForm";
import { ButtonActionLabelForm } from "./FormItem/ButtonActionLabelForm";
import { FormItem, Input } from "@vkontakte/vkui";
import { $ } from "use-signals";

type FormProps = Readonly<{
  children: ButtonOpenApp;
}>;

function ButtonActionAppIDForm({ children: button }: FormProps) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    button.action.appId.set(event.currentTarget.valueAsNumber);
  };

  return (
    <FormItem top="Приложение" htmlFor="appId">
      <Input
        id="appId"
        type="number"
        value={$(button.action.appId)}
        onChange={handleChange}
      />
    </FormItem>
  );
}

function ButtonActionOwnerIDForm({ children: button }: FormProps) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    button.action.ownerId.set(event.currentTarget.valueAsNumber);
  };

  return (
    <FormItem top="Идентификатор сообщества" htmlFor="ownerId">
      <Input
        id="ownerId"
        type="number"
        value={$(button.action.ownerId)}
        onChange={handleChange}
      />
    </FormItem>
  );
}

function ButtonActionHashForm({ children: button }: FormProps) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    button.action.hash.set(event.currentTarget.value);
  };

  return (
    <FormItem top="Хэш" htmlFor="hash">
      <Input
        id="hash"
        type="text"
        value={$(button.action.hash)}
        onChange={handleChange}
      />
    </FormItem>
  );
}

export function ButtonOpenAppForm({ children: button }: FormProps) {
  return (
    <>
      <ButtonActionLabelForm>{button}</ButtonActionLabelForm>
      <ButtonActionAppIDForm>{button}</ButtonActionAppIDForm>
      <ButtonActionOwnerIDForm>{button}</ButtonActionOwnerIDForm>
      <ButtonActionHashForm>{button}</ButtonActionHashForm>
      <ButtonActionPayloadForm>{button.action}</ButtonActionPayloadForm>
    </>
  );
}
