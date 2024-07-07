"use client";

import * as app from "@/logic";
import * as keyboard from "@/logic/keyboard";
import {
  Text,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Div,
  FormItem,
  Group,
  Header,
  PanelHeader,
  PanelHeaderButton,
  SegmentedControl,
  SegmentedControlValue,
  Spacing,
  SplitCol,
  SplitLayout,
  Link,
} from "@vkontakte/vkui";
import { useSignal } from "use-signals";
import { Icon24Add } from "@vkontakte/icons";
import { useComputed } from "@/utils/useReactive";
import { ButtonForm } from "@/components/ButtonForm/ButtonForm";
import * as React from "react";
import { ButtonItem } from "../components/ButtonItem/ButtonItem";
import { View } from "../components/ViewCode/View";
import { Icon20GitHub } from "@/components/icons/Icon20GitHub";

function KeyboardInlineForm({
  children: keyboard,
}: {
  children: keyboard.Keyboard;
}) {
  const inline = useSignal(keyboard.inline);
  const segmentValue = inline ? "true" : "false";

  const handleChange = (value: SegmentedControlValue) => {
    keyboard.inline.set(value === "true" ? true : false);
  };

  return (
    <FormItem top="Вид клавиатуры" htmlFor="inline">
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
    </FormItem>
  );
}

function KeyboardOneTimeForm({
  children: keyboard,
}: {
  children: keyboard.Keyboard;
}) {
  const oneTime = useSignal(keyboard.oneTime);
  const inline = useSignal(keyboard.inline);

  if (inline) {
    return null;
  }

  return (
    <FormItem>
      <Checkbox
        checked={oneTime}
        onChange={(e) => keyboard.oneTime.set(e.target.checked)}
      >
        Скрывать клавиатуру сразу
      </Checkbox>
    </FormItem>
  );
}

function Buttons() {
  const buttons = useComputed(() => [...app.keyboard.buttons]);

  console.log("buttons render");

  return (
    <Card>
      <Div>
        <ButtonGroup mode="vertical" stretched>
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
        </ButtonGroup>
      </Div>
    </Card>
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

export default function Home() {
  const selectedButton = useSignal(app.keyboard.selectedButton);

  return (
    <main>
      <SplitLayout
        header={<PanelHeader fixed={false} delimiter="none" />}
        center
      >
        <SplitCol autoSpaced maxWidth={784}>
          <PanelHeader
            fixed={false}
            delimiter="spacing"
            after={
              <PanelHeaderButton
                href="https://github.com/SevereCloud/vk-keyboard"
                target="_blank"
                aria-label="GitHub"
                title="GitHub"
              >
                <Icon20GitHub
                  width={28}
                  height={28}
                  style={{ lineHeight: 0 }}
                  className="vkuiIcon--28"
                />
              </PanelHeaderButton>
            }
          >
            Генератор клавиатуры
          </PanelHeader>
          <Group header={<Header multiline>Клавиатура</Header>}>
            <Div>
              <Text>
                Генерирует{" "}
                <Link href="https://vk.com/dev/bots_docs_3" target="_blank">
                  клавиатуру
                </Link>{" "}
                для ботов. Проверить клавиатуру можно отправив JSON{" "}
                <Link href="https://vk.com/write-174472256" target="_blank">
                  боту
                </Link>
              </Text>
            </Div>

            <Spacing size={16} />

            <Buttons />

            <ButtonForm>{selectedButton}</ButtonForm>
          </Group>
          <Group>
            <KeyboardInlineForm>{app.keyboard}</KeyboardInlineForm>
            <KeyboardOneTimeForm>{app.keyboard}</KeyboardOneTimeForm>
          </Group>
          <View />
        </SplitCol>
      </SplitLayout>
    </main>
  );
}
