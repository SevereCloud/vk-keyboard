import { ButtonCallback } from "@/logic/keyboard";
import { ButtonActionPayloadForm } from "./FormItem/ButtonActionPayloadForm";
import { ButtonColorForm } from "./FormItem/ButtonColorForm";
import { ButtonActionLabelForm } from "./FormItem/ButtonActionLabelForm";

type FormProps = Readonly<{
  children: ButtonCallback;
}>;

export function ButtonCallbackForm({ children: button }: FormProps) {
  return (
    <>
      <ButtonActionLabelForm>{button}</ButtonActionLabelForm>
      <ButtonActionPayloadForm>{button.action}</ButtonActionPayloadForm>
      <ButtonColorForm>{button}</ButtonColorForm>
    </>
  );
}
