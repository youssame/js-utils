type extractionTypes = "braces" | "db_braces" | "brackets" | "parenthesis" | "quote" | "double_quote";
const extractionTypeRegEx : {
    [k: string]: RegExp
} = {
    braces: new RegExp(/\{.*?\}/g),
    db_braces: new RegExp(/\{\{(.*?)\}\}/g),
    brackets: new RegExp(/\((.*?)\)/g),
    parenthesis: new RegExp(/\((.*?)\)/g),
    quote: new RegExp(/'.*?'/g),
    double_quote: new RegExp(/\"(.*?)\"/g)
}

/**
 * 
 * @param text The text that contains chunks to extract 
 * @param by the type of extraction : braces, bracket, parenthesis, quote or double_quote
 * @returns Array of string or undefined
 */
export const $extract = (text: string, by: extractionTypes): string[] => {
    console.log(extractionTypeRegEx[by])
    const matchRes = text.match(extractionTypeRegEx[by]);
    if (!matchRes) return [];
    return matchRes.map($0 => {
        const match = $0.toString();
        const spliceIndex = by.startsWith('db_') ? 2 : 1; 
        return `${match.slice(spliceIndex, match.length - spliceIndex)}`;
    });
}