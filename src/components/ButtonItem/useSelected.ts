import { useSignal } from "use-signals";
import * as app from "@/logic";
import * as keyboard from "@/logic/keyboard";
import * as React from "react";

export function useSelected(button: keyboard.Button) {
  const selectedButton = useSignal(app.keyboard.selectedButton);

  const setSelected = React.useCallback(() => {
    app.keyboard.selectedButton.set(button);
  }, [button]);

  return [selectedButton === button, setSelected] as const;
}
