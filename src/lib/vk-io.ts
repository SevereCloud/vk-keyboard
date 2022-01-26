import { Keyboard, ButtonType, Color } from "./keyboard";

function stringToJS(v: string): string {
    v = v.replace("`", "\\`")
    return `\`${v}\``
}

const colorList: Record<Color, string> = {
    [Color.Secondary]: "Keyboard.SECONDARY_COLOR",
    [Color.Primary]: "Keyboard.PRIMARY_COLOR",
    [Color.Negative]: "Keyboard.NEGATIVE_COLOR",
    [Color.Positive]: "Keyboard.POSITIVE_COLOR"
}

export function Generate(keyboard: Keyboard): string {
    let code: string = ""

    code += `import { Keyboard } from 'vk-io';\n`
    code += `\n`
    code += `const builder = Keyboard.builder();\n`
    code += `\n`
    code += `builder\n`
    code += keyboard.inline ? `\t.inline()\n` : ""
    code += keyboard.one_time ? `\t.oneTime()\n` : ""

    keyboard.buttons.forEach((row, i) => {
        if (i > 0) {
            code += `\t.row()\n`
        }
        row.forEach((button, j) => {
            switch (button.action.type) {
                case ButtonType.Location:
                    code += `\t.locationRequestButton({\n`
                    code += `\t\tpayload: ${stringToJS(button.action.payload)}\n`
                    code += `\t})\n`
                    break;
                case ButtonType.OpenLink:
                    code += `\t.urlButton({\n`
                    code += `\t\tlabel: ${stringToJS(button.action.label)}\n`
                    code += `\t\link: ${stringToJS(button.action.link)}\n`
                    code += `\t})\n`
                    break;
                case ButtonType.Text:
                    code += `\t.textButton({\n`
                    code += `\t\tlabel: ${stringToJS(button.action.label)}\n`
                    code += `\t\tpayload: ${stringToJS(button.action.payload)}\n`
                    code += `\t\tcolor: ${colorList[button.color]}\n`
                    code += `\t})\n`
                    break;
                case ButtonType.VKApps:
                    code += `\t.applicationButton({\n`
                    code += `\t\tlabel: ${stringToJS(button.action.label)}\n`
                    code += `\t\tappId: ${button.action.app_id}\n`
                    code += `\t\townerId: ${button.action.owner_id}\n`
                    code += `\t\thash: ${stringToJS(button.action.hash)}\n`
                    code += `\t})\n`
                    break;
                case ButtonType.VKPay:
                    code += `\t.payButton({\n`
                    code += `\t\thash: ${stringToJS(button.action.hash)}\n`
                    code += `\t})\n`
                    break;
            }
        });
    })
    code += `\t.row();\n`

    return code
}