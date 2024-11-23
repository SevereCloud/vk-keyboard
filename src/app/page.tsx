import * as React from "react";
import {
  Text,
  ButtonGroup,
  Card,
  Div,
  FormItem,
  Group,
  Header,
  PanelHeader,
  PanelHeaderButton,
  Spacing,
  SplitCol,
  SplitLayout,
  Link,
} from "@vkontakte/vkui";
import { ButtonForm } from "@/components/ButtonForm/ButtonForm";
import { View } from "@/components/ViewCode/View";
import { Icon20GitHub } from "@/components/icons/Icon20GitHub";
import {
  Buttons,
  KeyboardInlineForm,
  KeyboardOneTimeForm,
} from "@/components/Home/Home";

export default function Home() {
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

            <Card>
              <Div>
                <ButtonGroup mode="vertical" stretched>
                  <Buttons />
                </ButtonGroup>
              </Div>
            </Card>

            <ButtonForm />
          </Group>
          <Group>
            <FormItem top="Вид клавиатуры" htmlFor="inline">
              <KeyboardInlineForm />
            </FormItem>
            <FormItem>
              <KeyboardOneTimeForm />
            </FormItem>
          </Group>
          <View />
        </SplitCol>
      </SplitLayout>
    </main>
  );
}
