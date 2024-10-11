export interface JSONTypes {
    tag: string,
    atributes?: {[key:string]:string}
    children?: (JSONTypes | { text: string })[];
}

export default function html2Json (html: string): JSONTypes | string {
    const domParsing = new DOMParser()
    const doc = domParsing.parseFromString(html, 'text/html');

    const domToJSON = (tag: Element): JSONTypes => {
        const convertedHtml: JSONTypes = {
            "tag": tag.tagName.toLowerCase()
        }

        if (tag.hasAttributes()) {
            convertedHtml.atributes = {}
            for (const atrbts of tag.attributes) {
                convertedHtml.atributes[atrbts.name] = atrbts.value
            }
        }

        const tagChilds = tag.childNodes
        if (tagChilds.length > 0) {
            convertedHtml.children = []
            tagChilds.forEach((child) => {
                if (child.nodeType === 3) {
                    const textContent = child.textContent?.trim()
                    textContent && convertedHtml.children?.push({ text: textContent })
                } else if (child.nodeType === 1) {
                    convertedHtml.children?.push(domToJSON(child as Element))
                }
            })
        }
        return convertedHtml
    }
    const firstItem = doc.body.firstElementChild

    return firstItem ? domToJSON(firstItem!) : "Invalid HTML string"
}