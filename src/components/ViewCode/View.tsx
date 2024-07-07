"use client";
import { Group, Header, Spacing, Tabs, TabsItem } from "@vkontakte/vkui";
import { JsonView } from "./Codes/JsonView";
import * as React from "react";
import { GolangView } from "./Codes/GolangView";
import { ErrorsView } from "./Codes/ErrorsView";
import * as app from "@/logic";
import { useSignal } from "use-signals";
import { VKIOView } from "./Codes/VKIOView";

const langs = ["JSON", "VK SDK (Golang)", "VK-IO (Node.js)"] as const;

type Lang = (typeof langs)[number];

const langForm: Record<Lang, React.ElementType> = {
  JSON: JsonView,
  "VK SDK (Golang)": GolangView,
  "VK-IO (Node.js)": VKIOView,
};

function CodeView() {
  const [selected, setSelected] = React.useState<Lang>(langs[0]);

  const Form = langForm[selected];

  return (
    <Group header={<Header>Код</Header>}>
      <Tabs>
        {langs.map((name) => (
          <TabsItem
            key={name}
            selected={selected === name}
            onClick={() => setSelected(name)}
          >
            {name}
          </TabsItem>
        ))}
      </Tabs>

      <Spacing />

      <Form />
    </Group>
  );
}

export function View() {
  const errors = useSignal(app.errorsView.code);

  if (errors) {
    return (
      <Group header={<Header>Ошибки</Header>}>
        <ErrorsView />
      </Group>
    );
  }

  return <CodeView />;
}
