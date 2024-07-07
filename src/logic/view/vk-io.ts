import { Signal } from "signal-polyfill";
import {
  ButtonCallback,
  ButtonLocation,
  ButtonOpenApp,
  ButtonOpenLink,
  ButtonText,
  ButtonVKPay,
  Color,
  Keyboard,
} from "../keyboard";

function stringToJS(v: string | undefined): string {
  if (v === undefined) return "``";

  v = v.replace("`", "\\`");
  return `\`${v}\``;
}

const colorList: Record<Color, string> = {
  secondary: "Keyboard.SECONDARY_COLOR",
  primary: "Keyboard.PRIMARY_COLOR",
  negative: "Keyboard.NEGATIVE_COLOR",
  positive: "Keyboard.POSITIVE_COLOR",
};

export class VKIOView {
  readonly #keyboard: Keyboard;

  constructor(keyboard: Keyboard) {
    this.#keyboard = keyboard;
  }

  readonly code = new Signal.Computed(() => {
    let code: string = "";

    code += `import { Keyboard } from 'vk-io';\n`;
    code += `\n`;
    code += `const builder = Keyboard.builder();\n`;
    code += `\n`;
    code += `builder\n`;
    code += this.#keyboard.inline.get() ? `\t.inline()\n` : "";
    code += this.#keyboard.oneTime.get() ? `\t.oneTime()\n` : "";

    this.#keyboard.buttons.forEach((buttonRow, index) => {
      if (index > 0) {
        code += `\t.row()\n`;
      }

      buttonRow.buttons.forEach((button) => {
        if (button instanceof ButtonText) {
          code += `\t.textButton({\n`;
          code += `\t\tlabel: ${stringToJS(button.action.label.get())}\n`;
          code += `\t\tpayload: ${stringToJS(button.action.payload.get())}\n`;
          code += `\t\tcolor: ${colorList[button.color.get()]}\n`;
          code += `\t})\n`;
        } else if (button instanceof ButtonOpenLink) {
          code += `\t.urlButton({\n`;
          code += `\t\tlabel: ${stringToJS(button.action.label.get())}\n`;
          code += `\t\tlink: ${stringToJS(button.action.link.get())}\n`;
          code += `\t})\n`;
        } else if (button instanceof ButtonLocation) {
          code += `\t.locationRequestButton({\n`;
          code += `\t\tpayload: ${stringToJS(button.action.payload.get())}\n`;
          code += `\t})\n`;
        } else if (button instanceof ButtonVKPay) {
          code += `\t.payButton({\n`;
          code += `\t\thash: ${stringToJS(button.action.hash.get())}\n`;
          code += `\t})\n`;
        } else if (button instanceof ButtonOpenApp) {
          code += `\t.applicationButton({\n`;
          code += `\t\tlabel: ${stringToJS(button.action.label.get())}\n`;
          code += `\t\tappId: ${button.action.appId.get()}\n`;
          code += `\t\townerId: ${button.action.ownerId.get()}\n`;
          code += `\t\thash: ${stringToJS(button.action.hash.get())}\n`;
          code += `\t})\n`;
        } else if (button instanceof ButtonCallback) {
          code += `\t.callbackButton({\n`;
          code += `\t\tlabel: ${stringToJS(button.action.label.get())}\n`;
          code += `\t\tpayload: ${stringToJS(button.action.payload.get())}\n`;
          code += `\t\tcolor: ${colorList[button.color.get()]}\n`;
          code += `\t})\n`;
        }
      });
    });

    return code;
  });
}
