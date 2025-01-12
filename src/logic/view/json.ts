import { Signal } from "signal-polyfill";
import {
  ButtonCallback,
  ButtonLocation,
  ButtonOpenApp,
  ButtonOpenLink,
  ButtonText,
  ButtonVKPay,
  Keyboard,
} from "../keyboard";

export class JSONView {
  readonly #keyboard: Keyboard;

  constructor(keyboard: Keyboard) {
    this.#keyboard = keyboard;
  }

  /**
   * Минификация json
   */
  readonly minify = new Signal.State(false);

  readonly code = new Signal.Computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = {};

    const inline = this.#keyboard.inline.get();

    if (this.#keyboard.oneTime.get() && !inline) {
      data["one_time"] = true;
    }

    if (inline) {
      data["inline"] = true;
    }

    data["buttons"] = [];

    this.#keyboard.buttons.forEach((buttonRow, index) => {
      data["buttons"].push([]);

      buttonRow.buttons.forEach((button) => {
        if (button instanceof ButtonText)
          data["buttons"][index].push({
            action: {
              type: button.action.type,
              label: button.action.label.get(),
              payload: button.action.payload.get(),
            },
            color: button.color.get(),
          });
        else if (button instanceof ButtonOpenLink)
          data["buttons"][index].push({
            action: {
              type: button.action.type,
              label: button.action.label.get(),
              link: button.action.link.get(),
              payload: button.action.payload.get(),
            },
          });
        else if (button instanceof ButtonLocation)
          data["buttons"][index].push({
            action: {
              type: button.action.type,
              payload: button.action.payload.get(),
            },
          });
        else if (button instanceof ButtonVKPay)
          data["buttons"][index].push({
            action: {
              type: button.action.type,
              hash: button.action.hash.get(),
              payload: button.action.payload.get(),
            },
          });
        else if (button instanceof ButtonOpenApp)
          data["buttons"][index].push({
            action: {
              type: button.action.type,
              label: button.action.label.get(),
              app_id: button.action.appId.get(),
              owner_id: button.action.ownerId.get(),
              hash: button.action.hash.get(),
              payload: button.action.payload.get(),
            },
          });
        else if (button instanceof ButtonCallback)
          data["buttons"][index].push({
            action: {
              type: button.action.type,
              label: button.action.label.get(),
              payload: button.action.payload.get(),
            },
            color: button.color.get(),
          });
      });
    });

    return JSON.stringify(data, null, this.minify.get() ? 0 : 2);
  });
}
