import { Stat, WritableClass } from "./helper";


/**
 * проверяет валидость поля label
 * @param label  текст кнопки
 */
export function checkLabel(label: string): Array<string> {
  const error: Array<string> = [];

  if (label === undefined) {
    error.push('label is required');
    return error;
  }

  if (label.length < 1) {
    error.push('label should be at least 1 letters length');
  }

  if (label.length > 40) {
    error.push('label should be not more than 40 letters length');
  }

  return error;
}

/**
 * проверяет валидость поля payload
 * @param payload дополнительная информация.
 */
export function checkPayload(payload: string): Array<string> {
  const error: Array<string> = [];

  if (payload === undefined || payload === "") {
    return error;
  }

  if (payload.length > 255) {
    error.push('payload should be not more than 255 letters length');
  }

  try {
    JSON.parse(payload);
  } catch (e) {
    error.push('payload contains incorrect JSON');
  }

  return error;
}


interface KeyboardJSON {
  one_time?: boolean;
  buttons: Button[][];
  inline?: boolean;
}

interface ButtonJSON  {
  action: ButtonAction;
  color?: Color;
}

export enum ButtonType {
  Text = 'text',
  OpenLink = 'open_link',
  Location = 'location',
  VKPay = 'vkpay',
  VKApps = 'open_app'
}


/** цвет кнопки. Параметр используется только для кнопок с **type**: _text_ */
export enum Color {
  /** primary — синяя кнопка, обозначает основное действие. #5181B8 */
  Primary = 'primary',
  /** secondary — обычная белая кнопка. #FFFFFF */
  Secondary = 'secondary',
  /** negative — опасное действие, или отрицательное действие (отклонить, удалить и тд). #E64646 */
  Negative = 'negative',
  /** positive — согласиться, подтвердить. #4BB34B */
  Positive = 'positive'
}


export interface ButtonAction {
  type: ButtonType;
  check(): Array<string>;

  label?: string;
  payload?: string;
  link?: string;
  hash?: string;
  app_id?: number;
  owner_id?: number;
}

export class ButtonActionText implements ButtonAction {
  readonly type = ButtonType.Text;
  label: string;
  payload: string;

  constructor() {
    this.label = "label";
    this.payload = "";
  }

  /** проверка структуры */
  check(): Array<string> {
    const error: Array<string> = [];

    error.push(...checkLabel(this.label))
    error.push(...checkPayload(this.payload))

    return error
  }
}

export class ButtonActionOpenLink implements ButtonAction {
  readonly type = ButtonType.OpenLink;
  link: string;
  label: string;
  payload: string;

  constructor() {
    this.link = "https://vk.com";
    this.label = "label";
    this.payload = "";
  }

  /** проверка структуры */
  check(): Array<string> {
    const error: Array<string> = [];

    error.push(...checkLabel(this.label))
    error.push(...checkPayload(this.payload))
    if (this.link === undefined) {
      error.push('link is required');
    } else {
      const regexpUrl =
        new RegExp(`^(http(s)?:\\/\\/)([^/?#]+)([^?#]*)(\\?([^#]*))?(#(.*))?`);

      if (!regexpUrl.test(this.link)) {
        error.push('has invalid link');
      }
    }

    return error
  }
}

export class ButtonActionLocation implements ButtonAction {
  readonly type = ButtonType.Location;
  payload: string;

  constructor() {
    this.payload = "";
  }

  /** проверка структуры */
  check(): Array<string> {
    const error: Array<string> = [];

    error.push(...checkPayload(this.payload))

    return error
  }
}


export class ButtonActionVKPay implements ButtonAction {
  readonly type = ButtonType.VKPay;
  payload: string;
  hash: string;

  constructor() {
    this.payload = "";
    this.hash = "";
  }

  /** проверка структуры */
  check(): Array<string> {
    const error: Array<string> = [];

    error.push(...checkPayload(this.payload))
    // TODO: valid hash

    return error
  }
}

export class ButtonActionVKApps implements ButtonAction {
  readonly type = ButtonType.VKApps;
  app_id: number;
  owner_id: number;
  payload: string;
  label: string;
  hash: string;

  constructor() {
    // eslint-disable-next-line @typescript-eslint/camelcase
    this.app_id = 0;
    // eslint-disable-next-line @typescript-eslint/camelcase
    this.owner_id = 0;
    this.payload = "";
    this.label = "label";
    this.hash = "";
  }

  /** проверка структуры */
  check(): Array<string> {
    const error: Array<string> = [];

    error.push(...checkLabel(this.label))
    error.push(...checkPayload(this.payload))

    if (this.hash !== undefined) {
      if (this.hash.length > 500) {
        error.push('hash should be not more than 500 letters length');
      }
    }

    if (this.app_id === undefined) {
      error.push('app_id is required');
    }
    // TODO: https://vk.com/bug194951
    // TODO: https://vk.com/bug194950

    return error
  }
}

/**
 * Класс объекта cтруктуры buttons
 */
export class Button extends WritableClass {
  /** объект, описывающий тип действия и его параметры. Поля объекта зависят от значения параметра **type** */
  action: ButtonAction;
  /** цвет кнопки. Параметр используется только для кнопок с **type**: _text_ */
  color?: Color;

  constructor() {
    super()
    this.action = new ButtonActionText();
    this.color = Color.Primary;
  }

  toText(): void {
    this.action = new ButtonActionText();
    this.color = Color.Primary;
    this._notifyAll()
  }

  toOpenLink(): void {
    this.action = new ButtonActionOpenLink();
    this.color = undefined;
    this._notifyAll()
  }

  toLocation(): void {
    this.action = new ButtonActionLocation();
    this.color = undefined;
    this._notifyAll()
  }

  toVKPay(): void {
    this.action = new ButtonActionVKPay();
    this.color = undefined;
    this._notifyAll()
  }

  toVKApps(): void {
    this.action = new ButtonActionVKApps();
    this.color = undefined;
    this._notifyAll()
  }

  changeColor(color: Color): void {
    if (this.action.type === ButtonType.Text) {
      this.color = color;
      this._notifyAll()
    }
  }

  toJSON(): ButtonJSON {
    return {
      action: this.action,
      color: this.color
    }
  }

  /** проверка структуры */
  check(): Array<string> {
    const error: Array<string> = [];

    if (this.action === undefined) {
      error.push('has invalid action');
    } else {
      error.push(...this.action.check())
    }

    return error
  }
}


/**
 * Класс объекта keyboard
 */
export class Keyboard extends WritableClass {
  /**
   * скрывать ли клавиатуру после первого использования. Параметр срабатывает 
   * только для кнопок, отправляющих сообщение (поле **type** - _text_, _location_) 
   * Для **type** равных _open_app_, _vk_pay_ параметр игнорируется. 
   * Возможные значения:
   * - `true` — клавиатура будет скрыта при нажатии на кнопку с типом _text_ или _location_;
   * - `false` — клавиатура не скрывается;
   */
  one_time?: boolean;
  /** массив массивов с кнопками */
  buttons: Array<Array<Button>>;
  /** 
   * Должна ли клавиатура отображаться внутри сообщения. 
   * Возможные значения:
   * - `true` — клавиатура отображается внутри сообщения. 
   * Параметр _one_time_ при этом не поддерживается;
   * - `false` — стандартное отображение клавиатуры. */
  inline?: boolean;

  /** костыль */
  crutch: boolean;

  constructor() {
    super()
    this.buttons = [];
    this.crutch = false;
    this.toKeyboard();
  }

  toKeyboard(): void {
    this.inline = undefined;
    this._notifyAll();
  }

  toInlineKeyboard(): void {
    // eslint-disable-next-line @typescript-eslint/camelcase
    this.one_time = undefined;
    this.inline = true;
    this._notifyAll();
  }

  toJSON(): KeyboardJSON {
    return {
      // eslint-disable-next-line @typescript-eslint/camelcase
      one_time: this.one_time,
      buttons: this.buttons,
      inline: this.inline
    }
  }

  // TODO: fromJSON

  addLastRow(): void {
    this.buttons.push([]);
    this.addColumn(this.buttons.length - 1)
  }

  addColumn(row: number): void {
    const button = new Button()
    this.buttons[row].push(button);

    button.subscribe(() => {
      this._notifyAll();
    })
    this._notifyAll();
  }

  removeButton(row: number, column: number): void {
    this.buttons[row].splice(column, 1)
    if (this.buttons[row].length < 1) {
      this.buttons.splice(row, 1)
    }
    this._notifyAll();
  }

  /**
   * полная проверка структуры
   * @return возвращает текст ошибки
   */
  check(): string {
    let error = "";

    if (this.one_time && this.inline) {
      error += "one_time field is not available for inline keyboard\n"
    }

    if (this.buttons === undefined) {
      error += "buttons property should be array\n"
    } else {
      let counter = 0;
      this.buttons.forEach((row, i) => {
        if (row.length < 1) {
          error += `the row ${i} empty\n`
        }

        const typeStat = new Stat();

        row.forEach((button, j) => {
          counter++;
          typeStat.add(button.action.type)

          button.check().forEach(err => {
            error += `button [${i}][${j}]: ${err}\n`;
          });
        });

        // лимит количества кнопок на строку
        // of type open_link can contain only 2 button(s)
        // VKPAY => 1,
        // LOCATION => 2,
        // OPEN_APP => 2,
        // OPEN_LINK => 2

        if (typeStat.dict[ButtonType.VKPay] > 1) {
          error += `the row ${i} with button of type vkpay can contain only 1 button(s)\n`
        }

        if (typeStat.dict[ButtonType.Location] > 2) {
          error += `the row ${i} with button of type location can contain only 2 button(s)\n`
        }

        if (typeStat.dict[ButtonType.VKApps] > 2) {
          error += `the row ${i} with button of type open_app can contain only 2 button(s)\n`
        }

        if (typeStat.dict[ButtonType.OpenLink] > 2) {
          error += `the row ${i} with button of type open_link can contain only 2 button(s)\n`
        }

        if (this.inline) {
          // Максимум в строке: 5
          if (row.length > 5) {
            error += `the row ${i} contains too much columns (max 5)\n`
          }
        } else {
          // Максимум в строке: 5
          if (row.length > 5) {
            error += `the row ${i} contains too much columns (max 5)\n`
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

      if (this.inline) {
        // Максимум строк: 6
        if (this.buttons.length > 6) {
          error += `buttons contain too much rows (max 6)\n`
        }

        if (counter > 10) {
          error += `keyboard contains too much buttons (max 10)\n`
        }

      } else {
        // Максимум строк: 10
        if (this.buttons.length > 10) {
          error += `buttons contain too much rows (max 10)\n`
        }

        if (counter > 40) {
          error += `keyboard contains too much buttons (max 40)\n`
        }
      }
    }

    return error
  }
}



