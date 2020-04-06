import { Keyboard, ButtonType } from "./keyboard";

const newLine = "\n"

function boolToGo(v:boolean):string {
    return v?`true`:`false`
}

function intToGo(v:number): string {
    return `${v}`
}

function stringToGo(v:string): string {
    v.replace("`","\\`")
    return `\`${v}\``
}

function comment(v:string):string {
    return `// ${v}\n`
}


function nameVariable(name:string): string {
    // TODO: camel case
    return name
}

function shortAssignment(name, value:string): string {
    return `${nameVariable(name)} := ${value}\n`   
}


function attribute(attr:Array<string>): string {
    return attr.join(", ")
}

function func(name:string, attr:Array<string>): string {
    return `${nameVariable(name)}(${attribute(attr)})`
}

export function toGolang(keyboard:Keyboard): string {
    let code: string = ""

    code += shortAssignment(
        "k", 
        keyboard.inline?
            func("object.NewMessagesKeyboardInline",[]):
            func("object.NewMessagesKeyboard", [boolToGo(keyboard.one_time)])
    )

    keyboard.buttons.forEach((row, i) => {
        code += newLine
        code += func(`k.AddRow`,[]) + newLine

        row.forEach((button, j) => {
            switch (button.action.type) {
                case ButtonType.Location:
                    code += func(
                        `k.AddLocationButton`, 
                        [
                            stringToGo(button.action.payload)
                        ]
                    )
                    break;
                case ButtonType.OpenLink:
                    code += func(
                        `k.AddOpenLinkButton`, 
                        [
                            stringToGo(button.action.link),
                            stringToGo(button.action.label),
                            stringToGo(button.action.payload)
                        ]
                    )
                    break;
                case ButtonType.Text:
                        code += func(
                            `k.AddTextButton`, 
                            [
                                stringToGo(button.action.label),
                                stringToGo(button.action.payload),
                                stringToGo(button.color)
                            ]
                        )
                        break;
                case ButtonType.VKApps:
                        code += func(
                            `k.AddVKAppsButton`, 
                            [
                                intToGo(button.action.app_id),
                                intToGo(button.action.owner_id),
                                stringToGo(button.action.payload),
                                stringToGo(button.action.label),
                                stringToGo(button.action.hash)
                            ]
                        )
                        break;
                case ButtonType.VKPay:
                        code += func(
                            `k.AddVKPayButton`, 
                            [
                                stringToGo(button.action.payload),
                                stringToGo(button.action.hash)
                            ]
                        )
                        break;
            }
            code += newLine
        });
    })
   

    return code
}