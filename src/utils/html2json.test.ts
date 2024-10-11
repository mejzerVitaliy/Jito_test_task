import { testExamples } from "../html_samples/examples"
import html2Json from "./html2json"

describe("test of html2json function", () => {
    const tests = testExamples

    for (let i = 0; i < tests.length; i++){
        test(tests[i].testMessage, () => {
            expect(html2Json(tests[i].tag)).toEqual(tests[i].result)
        })
    }
})