import { Keyboard, ButtonType } from "./keyboard";

function boolToGo(v:boolean):string {
    return v?`true`:`false`
}


function stringToGo(v:string): string {
    v.replace("`","\\`")
    return `\`${v}\``
}

export function Generate(keyboard:Keyboard): string {
    let code: string = ""

    code += `import "github.com/SevereCloud/vksdk/object"\n`
    code += `\n`

    code += `k := object.`
    code += keyboard.inline?
        `NewMessagesKeyboardInline()\n`:
        `NewMessagesKeyboard(${boolToGo(keyboard.one_time)})\n`

    keyboard.buttons.forEach((row, i) => {
        code += `\n`
        code += `k.AddRow()\n`

        row.forEach((button, j) => {
            switch (button.action.type) {
                case ButtonType.Location:
                    code += `k.AddLocationButton(`
                    code += `${stringToGo(button.action.payload)}`
                    code += `)\n`
                    break;
                case ButtonType.OpenLink:
                    code += `k.AddOpenLinkButton(`
                    code += `${stringToGo(button.action.link)}, `
                    code += `${stringToGo(button.action.label)}, `
                    code += `${stringToGo(button.action.payload)}`
                    code += `)\n`
                    break;
                case ButtonType.Text:
                    code += `k.AddTextButton(`
                    code += `${stringToGo(button.action.label)}, `
                    code += `${stringToGo(button.action.payload)}, `
                    code += `${stringToGo(button.color)}`
                    code += `)\n`
                    break;
                case ButtonType.VKApps:
                    code += `k.AddVKAppsButton(`
                    code += `${button.action.app_id}, `
                    code += `${button.action.owner_id}, `
                    code += `${stringToGo(button.action.payload)}, `
                    code += `${stringToGo(button.action.label)}, `
                    code += `${stringToGo(button.action.hash)}`
                    code += `)\n`
                    break;
                case ButtonType.VKPay:
                    code += `k.AddVKPayButton(`
                    code += `${stringToGo(button.action.payload)}, `
                    code += `${stringToGo(button.action.hash)}`
                    code += `)\n`
                    break;
            }
        });
    })

    return code
}