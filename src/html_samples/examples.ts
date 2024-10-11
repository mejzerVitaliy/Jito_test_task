import { JSONTypes } from "../utils/html2json";

export const testExamples:{testMessage:string, tag: string, result: JSONTypes | string}[] = [
    {
        testMessage: "Convert 'div' tag to json",
        tag: '<div></div>',
        result: { tag: 'div' }
    },
    {
        testMessage: "Convert tag with atributes to json",
        tag: '<span class="qwerty" id="12345"></span>',
        result: {
            tag: 'span',
            atributes: {
                class: "qwerty",
                id:"12345"
            }
        }
    },
    {
        testMessage: "Convert tag with atributes and many childs to json",
        tag:'<span class="qwerty" id="12345"><p><b><u><i>TEST</i></u></b></p></span>',
        result: {
            tag: 'span',
            atributes: {
                class: "qwerty",
                id:"12345"
            },
            "children": [
                {
                    tag: "p",
                    children: [
                        {
                            tag: "b",
                            children: [
                                {
                                    tag: "u",
                                    children: [
                                        {
                                            tag: "i",
                                            children: [
                                                {
                                                    text: "TEST"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        testMessage: "Convert empty string ' ' to json",
        tag: ' ',
        result: 'Invalid HTML string'
    },
    {
        testMessage: "Convert invalid HTML string to json",
        tag:'sdag dzhesh ser53w45q asra',
        result: 'Invalid HTML string'
    }
]