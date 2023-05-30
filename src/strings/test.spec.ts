import { describe, expect, jest, test } from '@jest/globals';
import { JSDOM } from 'jsdom';
import { $extract } from './';

// beforeEach(() => {
// });
// "braces" | "db_braces" | "bracket" | "parenthesis" | "quote" | "double_quote"
describe('Test text extractions', () => {
  test('Test braces', async () => {
    const text = "hello {t} from morocco {r} :)";
    const arr = $extract(text, "db_braces");
    console.log(arr)
    expect(arr).not.toEqual(undefined);
    expect(arr!.length).toEqual(2);
    expect(arr![0]).toEqual("t");
    expect(arr![1]).toEqual("r");
  });
});