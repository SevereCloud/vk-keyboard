import { Signal } from "signal-polyfill";
import {
  ButtonCallback,
  ButtonLocation,
  ButtonOpenApp,
  ButtonOpenLink,
  ButtonText,
  ButtonType,
  ButtonVKPay,
  Keyboard,
} from "../keyboard";

class Stat<T extends string = string> {
  readonly #dict: Map<T, number> = new Map();

  get(key: T): number {
    return this.#dict.get(key) || 0;
  }

  add(key: T): void {
    const value = this.#dict.get(key) || 0;
    this.#dict.set(key, value + 1);
  }
}

export class ErrorView {
  readonly #keyboard: Keyboard;

  constructor(keyboard: Keyboard) {
    this.#keyboard = keyboard;
  }

  readonly code = new Signal.Computed(() => {
    const errors: string[] = [];

    if (this.#keyboard.oneTime.get() && this.#keyboard.inline.get()) {
      errors.push("one_time field is not available for inline keyboard\n");
    }

    let counter = 0;

    this.#keyboard.buttons.forEach((buttonRow, index) => {
      if (buttonRow.buttons.length < 1) {
        errors.push(`the row ${index} empty\n`);
      }
      const typeStat = new Stat<ButtonType>();

      buttonRow.buttons.forEach((button, j) => {
        counter++;
        typeStat.add(button.action.type);

        const addError = (err: string) => {
          errors.push(`button [${index}][${j}]: ${err}\n`);
        };

        if (button instanceof ButtonText) {
          button.action.validateLabel.get().forEach(addError);
          button.action.validatePayload.get().forEach(addError);
        } else if (button instanceof ButtonOpenLink) {
          button.action.validateLabel.get().forEach(addError);
          button.action.validatePayload.get().forEach(addError);
          button.action.validateLink.get().forEach(addError);
        } else if (button instanceof ButtonLocation) {
          button.action.validatePayload.get().forEach(addError);
        } else if (button instanceof ButtonVKPay) {
          button.action.validateHash.get().forEach(addError);
          button.action.validatePayload.get().forEach(addError);
        } else if (button instanceof ButtonOpenApp) {
          button.action.validateLabel.get().forEach(addError);
          button.action.validatePayload.get().forEach(addError);
        } else if (button instanceof ButtonCallback) {
          button.action.validateLabel.get().forEach(addError);
          button.action.validatePayload.get().forEach(addError);
        }
      });

      // лимит количества кнопок на строку
      // of type open_link can contain only 2 button(s)
      // VKPAY => 1,
      // LOCATION => 2,
      // OPEN_APP => 2,
      // OPEN_LINK => 2

      if (typeStat.get("vkpay") && buttonRow.buttons.length > 1) {
        errors.push(
          `the row ${index} with button of type vkpay can contain only 1 button(s)\n`
        );
      }

      if (typeStat.get("location") && buttonRow.buttons.length > 2) {
        errors.push(
          `the row ${index} with button of type location can contain only 2 button(s)\n`
        );
      }

      if (typeStat.get("open_app") && buttonRow.buttons.length > 2) {
        errors.push(
          `the row ${index} with button of type open_app can contain only 2 button(s)\n`
        );
      }

      if (typeStat.get("open_link") && buttonRow.buttons.length > 2) {
        errors.push(
          `the row ${index} with button of type open_link can contain only 2 button(s)\n`
        );
      }

      if (this.#keyboard.inline.get()) {
        // Максимум в строке: 5
        if (buttonRow.buttons.length > 5) {
          errors.push(`the row ${index} contains too much columns (max 5)\n`);
        }
      } else {
        // Максимум в строке: 5
        if (buttonRow.buttons.length > 5) {
          errors.push(`the row ${index} contains too much columns (max 5)\n`);
        }
      }
    });

    // Обычные клавиатуры:
    // Максимум строк: 10
    // Максимум в строке: 5
    // Максимум всего: 40

    // inline клавиатуры:
    // Максимум строк: 6
    // Максимум в строке: 5 (было 3)
    // Максимум всего: 10 (раньше 9, так как 3х3)

    if (this.#keyboard.inline.get()) {
      // Максимум строк: 6
      if (this.#keyboard.buttons.length > 6) {
        errors.push(`buttons contain too much rows (max 6)\n`);
      }

      if (counter > 10) {
        errors.push(`keyboard contains too much buttons (max 10)\n`);
      }
    } else {
      // Максимум строк: 10
      if (this.#keyboard.buttons.length > 10) {
        errors.push(`buttons contain too much rows (max 10)\n`);
      }

      if (counter > 40) {
        errors.push(`keyboard contains too much buttons (max 40)\n`);
      }
    }

    return errors.join("\n");
  });
}
