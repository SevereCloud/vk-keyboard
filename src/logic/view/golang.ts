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

function boolToGo(v: boolean): string {
  return v ? `true` : `false`;
}

function stringToGo(v: string | undefined): string {
  if (v === undefined) return "``";

  v.replace("`", "\\`");
  return `\`${v}\``;
}

export class VKSDKGolangView {
  readonly #keyboard: Keyboard;

  constructor(keyboard: Keyboard) {
    this.#keyboard = keyboard;
  }

  readonly code = new Signal.Computed(() => {
    let code: string = "";

    code += `import "github.com/SevereCloud/vksdk/object"\n`;
    code += `\n`;

    code += `k := object.`;

    const inline = this.#keyboard.inline.get();

    if (inline) {
      code += `NewMessagesKeyboardInline()\n`;
    } else {
      code += `NewMessagesKeyboard(${boolToGo(
        this.#keyboard.oneTime.get()
      )})\n`;
    }

    this.#keyboard.buttons.forEach((buttonRow) => {
      code += `\n`;
      code += `k.AddRow()\n`;

      buttonRow.buttons.forEach((button) => {
        if (button instanceof ButtonText) {
          code += `k.AddTextButton(`;
          code += `${stringToGo(button.action.label.get())}, `;
          code += `${stringToGo(button.action.payload.get())}, `;
          code += `${stringToGo(button.color.get())}`;
          code += `)\n`;
        } else if (button instanceof ButtonOpenLink) {
          code += `k.AddOpenLinkButton(`;
          code += `${stringToGo(button.action.link.get())}, `;
          code += `${stringToGo(button.action.label.get())}, `;
          code += `${stringToGo(button.action.payload.get())}`;
          code += `)\n`;
        } else if (button instanceof ButtonLocation) {
          code += `k.AddLocationButton(`;
          code += `${stringToGo(button.action.payload.get())}`;
          code += `)\n`;
        } else if (button instanceof ButtonVKPay) {
          code += `k.AddVKPayButton(`;
          code += `${stringToGo(button.action.payload.get())}, `;
          code += `${stringToGo(button.action.hash.get())}`;
          code += `)\n`;
        } else if (button instanceof ButtonOpenApp) {
          code += `k.AddVKAppsButton(`;
          code += `${button.action.appId.get()}, `;
          code += `${button.action.ownerId.get()}, `;
          code += `${stringToGo(button.action.payload.get())}, `;
          code += `${stringToGo(button.action.label.get())}, `;
          code += `${stringToGo(button.action.hash.get())}`;
          code += `)\n`;
        } else if (button instanceof ButtonCallback) {
          code += `k.AddCallbackButton(`;
          code += `${stringToGo(button.action.label.get())}, `;
          code += `${stringToGo(button.action.payload.get())}, `;
          code += `${stringToGo(button.color.get())}`;
          code += `)\n`;
        }
      });
    });

    return code;
  });
}
