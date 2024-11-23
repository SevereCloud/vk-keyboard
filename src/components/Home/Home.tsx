"use client";

import * as app from "@/logic";
import * as keyboard from "@/logic/keyboard";
import {
  Button,
  ButtonGroup,
  Checkbox,
  SegmentedControl,
  SegmentedControlValue,
} from "@vkontakte/vkui";
import { useSignal } from "use-signals";
import { Icon24Add } from "@vkontakte/icons";
import { useComputed } from "@/utils/useReactive";
import * as React from "react";
import { ButtonItem } from "../ButtonItem/ButtonItem";

export function KeyboardInlineForm() {
  const keyboard = app.keyboard;
  const inline = useSignal(keyboard.inline);
  const segmentValue = inline ? "true" : "false";

  const handleChange = (value: SegmentedControlValue) => {
    keyboard.inline.set(value === "true" ? true : false);
  };

  return (
    <SegmentedControl
      id="inline"
      name="inline"
      value={segmentValue}
      onChange={handleChange}
      options={[
        { value: "false", label: "Клавиатура" },
        { value: "true", label: "Инлайн клавиатура" },
      ]}
    />
  );
}

export function KeyboardOneTimeForm() {
  const keyboard = app.keyboard;
  const oneTime = useSignal(keyboard.oneTime);
  const inline = useSignal(keyboard.inline);

  if (inline) {
    return null;
  }

  return (
    <Checkbox
      checked={oneTime}
      onChange={(e) => keyboard.oneTime.set(e.target.checked)}
    >
      Скрывать клавиатуру сразу
    </Checkbox>
  );
}

export function Buttons() {
  const buttons = useComputed(() => [...app.keyboard.buttons]);

  return (
    <>
      {buttons.map((buttonRow) => (
        <ButtonsRow key={buttonRow.id}>{buttonRow}</ButtonsRow>
      ))}

      <Button
        size="m"
        onClick={() => app.keyboard.addRow()}
        appearance="accent-invariable"
        mode="tertiary"
        stretched
      >
        Добавить строку
      </Button>
    </>
  );
}

function ButtonsRow({
  children: buttonRow,
}: {
  children: keyboard.KeyboardRow;
}) {
  const buttons = useComputed(() => [...buttonRow.buttons]);

  const isPossibleToAddButton = useSignal(buttonRow.isPossibleToAddButton);

  return (
    <ButtonGroup mode="horizontal" stretched>
      {buttons.map((buttonItem) => (
        <ButtonItem key={buttonItem.id}>{buttonItem}</ButtonItem>
      ))}
      <Button
        size="m"
        onClick={() => buttonRow.addButton()}
        disabled={!isPossibleToAddButton}
        appearance="accent-invariable"
        mode="tertiary"
        before={<Icon24Add />}
        aria-label="Добавить кнопку"
        title="Добавить кнопку"
      />
    </ButtonGroup>
  );
}
