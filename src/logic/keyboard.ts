import { Signal } from "signal-polyfill";
import { SignalArray } from "signal-utils/array";
import { v4 as uuidv4 } from "uuid";

/**
 * Строка с кнопками
 */
export class KeyboardRow {
  /**
   * id строки. Требуется для правильной работы React
   */
  readonly id = uuidv4();

  /**
   * Массив кнопок
   */
  readonly buttons = new SignalArray<Button>([new ButtonText()]);

  /**
   * Возможно ли добавить кнопку
   */
  readonly isPossibleToAddButton = new Signal.Computed(
    () => this.buttons.length < 5
  );

  /**
   * Добавляет кнопку в конец строки
   */
  addButton() {
    if (!this.isPossibleToAddButton) return;

    this.buttons.push(new ButtonText());
  }
}

export class Keyboard {
  /**
   * Скрывать ли клавиатуру после нажатия на клавишу, отправляющую сообщение.
   * Например: text или location. Работает только для "inline": false.
   */
  readonly oneTime = new Signal.State<boolean>(false);

  /**
   * `true` — клавиатура отображается внутри сообщения.
   * `false` — показывает клавиатуру в диалоге, под полем ввода сообщения.
   */
  readonly inline = new Signal.State<boolean>(false);

  /**
   * Массив строк с массивом клавиш.
   */
  readonly buttons = new SignalArray<KeyboardRow>([new KeyboardRow()]);

  /**
   * Добавляет новую строку
   */
  addRow() {
    if (this.buttons.length >= 10) return;

    this.buttons.push(new KeyboardRow());
  }

  readonly selectedButton = new Signal.State<Button>(
    this.buttons[0].buttons[0]
  );

  readonly #selectedButtonIndex = new Signal.Computed<[number, number]>(() => {
    const selectedButton = this.selectedButton.get();

    for (let rowIndex = 0; rowIndex < this.buttons.length; rowIndex++) {
      const row = this.buttons[rowIndex];
      for (
        let buttonIndex = 0;
        buttonIndex < row.buttons.length;
        buttonIndex++
      ) {
        if (row.buttons[buttonIndex] === selectedButton) {
          return [rowIndex, buttonIndex];
        }
      }
    }

    throw new Error("selectedButton not found");
  });

  /**
   * Удаляет текущую кнопку
   */
  deleteSelectedButton() {
    const [rowIndex, buttonIndex] = this.#selectedButtonIndex.get();

    if (this.buttons[rowIndex].buttons.length === 1) {
      this.buttons.splice(rowIndex, 1);

      console.log("deleted row", rowIndex);
      this.selectedButton.set(
        this.buttons[Math.max(0, rowIndex - 1)].buttons[0]
      );
      console.log(Math.max(0, rowIndex - 1));
      console.log(this.buttons[Math.max(0, rowIndex - 1)].buttons[0]);
      return;
    }

    this.buttons[rowIndex].buttons.splice(buttonIndex, 1);
    this.selectedButton.set(
      this.buttons[rowIndex].buttons[Math.max(0, buttonIndex - 1)]
    );
  }

  /**
   * Изменяет тип текущей кнопки
   */
  changeSelectedButtonType(type: ButtonType) {
    const ButtonConstructor = {
      text: ButtonText,
      open_link: ButtonOpenLink,
      location: ButtonLocation,
      vkpay: ButtonVKPay,
      open_app: ButtonOpenApp,
      callback: ButtonCallback,
    }[type];

    const [rowIndex, buttonIndex] = this.#selectedButtonIndex.get();

    const button = new ButtonConstructor();

    this.buttons[rowIndex].buttons[buttonIndex] = button;

    this.selectedButton.set(button);
  }
}

/**
 * Проверяет валидность поля label
 */
export function checkLabel(label: string): Array<string> {
  const error: Array<string> = [];

  if (label === undefined) {
    error.push("label is required");
    return error;
  }

  if (label.length < 1) {
    error.push("label should be at least 1 letters length");
  }

  if (label.length > 40) {
    error.push("label should be not more than 40 letters length");
  }

  return error;
}

/**
 * Проверяет валидность поля payload
 */
export function checkPayload(payload: string | undefined): Array<string> {
  const error: Array<string> = [];

  if (payload === undefined || payload === "") {
    return error;
  }

  if (payload.length > 255) {
    error.push("payload should be not more than 255 letters length");
  }

  try {
    JSON.parse(payload);
  } catch (e) {
    error.push("payload contains incorrect JSON");
  }

  return error;
}

export class ButtonActionPayload {
  readonly payload = new Signal.State<string | undefined>(undefined);

  readonly validatePayload = new Signal.Computed(() =>
    checkPayload(this.payload.get())
  );
}

export type Color = "primary" | "secondary" | "positive" | "negative";

export class ButtonColor {
  /**
   * Цвет кнопки
   */
  readonly color = new Signal.State<Color>("primary");
}

/**
 * Текстовая кнопка. Отправляет сообщение с текстом, указанным в label.
 */
export class ButtonText extends ButtonColor {
  /**
   * id строки. Требуется для правильной работы React
   */
  readonly id = uuidv4();

  /**
   * Объект, описывающий тип действия и его параметры
   */
  readonly action = new ButtonTextAction();
}

class ButtonTextAction extends ButtonActionPayload {
  readonly type = "text" as const;

  /**
   * Текст кнопки. Будет отправлен пользователем в диалог с сообществом или
   * беседу при нажатии. Максимальная длина — 40 символов.
   */
  readonly label = new Signal.State("Label");

  readonly validateLabel = new Signal.Computed(() =>
    checkLabel(this.label.get())
  );
}

export class ButtonOpenLink {
  /**
   * id строки. Требуется для правильной работы React
   */
  readonly id = uuidv4();

  /**
   * Объект, описывающий тип действия и его параметры
   */
  readonly action = new ButtonOpenLinkAction();
}

class ButtonOpenLinkAction extends ButtonActionPayload {
  readonly type = "open_link" as const;

  readonly label = new Signal.State("Label");

  readonly validateLabel = new Signal.Computed(() =>
    checkLabel(this.label.get())
  );

  readonly link = new Signal.State("https://vk.com");

  readonly validateLink = new Signal.Computed(() => {
    // TODO: validate link
    const payload = this.payload.get();

    const errors: Array<string> = [];

    if (payload === undefined || payload === "") {
      return errors;
    }

    if (payload.length > 255) {
      errors.push("payload should be not more than 255 letters length");
    }

    try {
      JSON.parse(payload);
    } catch (e) {
      errors.push("payload contains incorrect JSON");
    }

    return errors;
  });
}

export class ButtonLocation {
  /**
   * id строки. Требуется для правильной работы React
   */
  readonly id = uuidv4();

  /**
   * Объект, описывающий тип действия и его параметры
   */
  readonly action = new ButtonLocationAction();
}

class ButtonLocationAction extends ButtonActionPayload {
  readonly type = "location" as const;
}

export class ButtonVKPay {
  /**
   * id строки. Требуется для правильной работы React
   */
  readonly id = uuidv4();

  /**
   * Объект, описывающий тип действия и его параметры
   */
  readonly action = new ButtonVKPayAction();
}

class ButtonVKPayAction extends ButtonActionPayload {
  readonly type = "vkpay" as const;
  readonly hash = new Signal.State("");

  readonly validateHash = new Signal.Computed(() => {
    const hash = this.hash.get();

    const errors: Array<string> = [];

    if (hash.length == 0)
      errors.push("hash should be at least 1 letters length");

    if (hash.length > 500)
      errors.push("hash should be not more than 500 letters length");

    return errors;
  });
}

export class ButtonOpenApp {
  /**
   * id строки. Требуется для правильной работы React
   */
  readonly id = uuidv4();

  /**
   * Объект, описывающий тип действия и его параметры
   */
  readonly action = new ButtonOpenAppAction();
}

class ButtonOpenAppAction extends ButtonActionPayload {
  readonly type = "open_app" as const;
  readonly label = new Signal.State("Label");
  readonly appId = new Signal.State(0);
  readonly ownerId = new Signal.State(0);
  readonly hash = new Signal.State("");

  readonly validateLabel = new Signal.Computed(() =>
    checkLabel(this.label.get())
  );
}

export class ButtonCallback extends ButtonColor {
  /**
   * id строки. Требуется для правильной работы React
   */
  readonly id = uuidv4();

  /**
   * Объект, описывающий тип действия и его параметры
   */
  readonly action = new ButtonCallbackAction();
}

class ButtonCallbackAction extends ButtonActionPayload {
  readonly type = "callback" as const;
  readonly label = new Signal.State("Label");

  readonly validateLabel = new Signal.Computed(() =>
    checkLabel(this.label.get())
  );
}

export type Button =
  | ButtonText
  | ButtonOpenLink
  | ButtonLocation
  | ButtonVKPay
  | ButtonOpenApp
  | ButtonCallback;

export type ButtonType = Button["action"]["type"];
