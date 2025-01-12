import { ButtonText } from "@/logic/keyboard";
import { ButtonActionPayloadForm } from "./FormItem/ButtonActionPayloadForm";
import { ButtonColorForm } from "./FormItem/ButtonColorForm";
import { ButtonActionLabelForm } from "./FormItem/ButtonActionLabelForm";

type FormProps = Readonly<{
  button: ButtonText;
}>;

export function ButtonTextForm({ button }: FormProps) {
  return (
    <>
      <ButtonActionLabelForm button={button} />
      <ButtonActionPayloadForm action={button.action} />
      <ButtonColorForm button={button} />
    </>
  );
}
