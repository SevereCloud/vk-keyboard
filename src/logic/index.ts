import { ErrorView } from "./view/errors";
import { VKSDKGolangView } from "./view/golang";
import { JSONView } from "./view/json";
import { Keyboard } from "./keyboard";
import { VKIOView } from "./view/vk-io";

export const keyboard = new Keyboard();

export const jsonView = new JSONView(keyboard);
export const golangView = new VKSDKGolangView(keyboard);
export const vkioView = new VKIOView(keyboard);

export const errorsView = new ErrorView(keyboard);
