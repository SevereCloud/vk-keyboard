"use client";

import * as React from "react";

import { CellButton, CustomSelect, FormItem } from "@vkontakte/vkui";
import * as keyboard from "@/logic/keyboard";
import { ButtonTextForm } from "./Buttons/ButtonTextForm";
import * as app from "@/logic";
import { ButtonOpenLinkForm } from "./Buttons/ButtonOpenLinkForm";
import { ButtonLocationForm } from "./Buttons/ButtonLocationForm";
import { ButtonVKPayForm } from "./Buttons/ButtonVKPayForm";
import { ButtonOpenAppForm } from "./Buttons/ButtonOpenAppForm";
import { ButtonCallbackForm } from "./Buttons/ButtonCallbackForm";
import { useSignal } from "use-signals";

function ButtonActionType({ button }: { button: keyboard.Button }) {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    app.keyboard.changeSelectedButtonType(e.currentTarget.value as "text");
  };

  return (
    <FormItem top="Тип кнопки" htmlFor="type">
      <CustomSelect
        id="type"
        name="type"
        value={button.action.type}
        onChange={handleChange}
        options={(
          [
            "text",
            "open_link",
            "location",
            "vkpay",
            "open_app",
            "callback",
          ] as const
        ).map((type) => ({
          label: type,
          value: type,
        }))}
      />
    </FormItem>
  );
}

export function ButtonForm() {
  const button = useSignal(app.keyboard.selectedButton);
  let form: React.ReactNode = null;

  if (button instanceof keyboard.ButtonText) {
    form = <ButtonTextForm button={button} />;
  } else if (button instanceof keyboard.ButtonOpenLink) {
    form = <ButtonOpenLinkForm button={button} />;
  } else if (button instanceof keyboard.ButtonLocation) {
    form = <ButtonLocationForm button={button} />;
  } else if (button instanceof keyboard.ButtonVKPay) {
    form = <ButtonVKPayForm button={button} />;
  } else if (button instanceof keyboard.ButtonOpenApp) {
    form = <ButtonOpenAppForm button={button} />;
  } else if (button instanceof keyboard.ButtonCallback) {
    form = <ButtonCallbackForm button={button} />;
  }

  return (
    <>
      <ButtonActionType button={button} />
      {form}
      <CellButton
        centered
        onClick={() => app.keyboard.deleteSelectedButton()}
        appearance="negative"
      >
        Удалить кнопку
      </CellButton>
    </>
  );
}
