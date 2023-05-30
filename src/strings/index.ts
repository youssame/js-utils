type extractionType = "braces" | "db_braces" | "bracket" | "parenthesis" | "quote" | "double_quote";

/**
 * 
 * @param text The text that contains chunks to extract 
 * @param by the type of extraction : braces, bracket, parenthesis, quote or double_quote
 * @returns Array of string or undefined
 */
export const $extract = (text: string, by: extractionType): string[] | undefined => {
    const first = getFirstAndLastExtractionChar(by)[0];
    const last = getFirstAndLastExtractionChar(by)[1];
    const regex = RegExp("/\\" + first + "(.*?)\\" + last + "/g");
    console.log("res : ", regex)
    return text.match(regex)?.map($0 => $0.toString());
}
const getFirstAndLastExtractionChar = (by: extractionType): [string, string] => {
    switch (by) {
        case "braces":
            return ["{", "}"];
        case "db_braces":
            return ["{{", "}}"];
        case "bracket":
            return ["[", "]"];
        case "parenthesis":
            return ["(", ")"];
        case "quote":
            return ["'", "'"];
        case "double_quote":
            return ["\"", "\""];
        default:
            return ["\"", "\""];
    }
}