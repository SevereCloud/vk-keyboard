import { ButtonText } from "@/logic/keyboard";
import { ButtonActionPayloadForm } from "./FormItem/ButtonActionPayloadForm";
import { ButtonColorForm } from "./FormItem/ButtonColorForm";
import { ButtonActionLabelForm } from "./FormItem/ButtonActionLabelForm";

type FormProps = Readonly<{
  children: ButtonText;
}>;

export function ButtonTextForm({ children: button }: FormProps) {
  return (
    <>
      <ButtonActionLabelForm>{button}</ButtonActionLabelForm>
      <ButtonActionPayloadForm>{button.action}</ButtonActionPayloadForm>
      <ButtonColorForm>{button}</ButtonColorForm>
    </>
  );
}
