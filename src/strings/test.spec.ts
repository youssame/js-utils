import { describe, expect, test } from '@jest/globals';
import { $extract } from './';

// beforeEach(() => {
// });
// "" | "" | "" | "" | "double_quote"
describe('Test text extractions', () => {
  test('Test braces', async () => {
    const text = "hello {t} from morocco {r} :)";
    const arr = $extract(text, "braces");
    expect(arr).not.toEqual(undefined);
    expect(arr!.length).toEqual(2);
    expect(arr![0]).toEqual("t");
    expect(arr![1]).toEqual("r");
  });
  
  test('Test db_braces', async () => {
    const text = "hello {{t}} from morocco {{r}} :)";
    const arr = $extract(text, "db_braces");
    expect(arr).not.toEqual(undefined);
    expect(arr!.length).toEqual(2);
    expect(arr![0]).toEqual("t");
    expect(arr![1]).toEqual("r");
  });
  
  test('Test parenthesis', async () => {
    const text = "hello (t) from morocco (r) :)";
    const arr = $extract(text, "parenthesis");
    expect(arr).not.toEqual(undefined);
    expect(arr!.length).toEqual(2);
    expect(arr![0]).toEqual("t");
    expect(arr![1]).toEqual("r");
  });
  
  test('Test brackets', async () => {
    const text = "hello [t] from morocco [r] :)";
    const arr = $extract(text, "brackets");
    expect(arr).not.toEqual(undefined);
    expect(arr!.length).toEqual(2);
    expect(arr![0]).toEqual("t");
    expect(arr![1]).toEqual("r");
  });
  
  test('Test quote', async () => {
    const text = "hello 't' from morocco 'r' :)";
    const arr = $extract(text, "quote");
    expect(arr).not.toEqual(undefined);
    expect(arr!.length).toEqual(2);
    expect(arr![0]).toEqual("t");
    expect(arr![1]).toEqual("r");
  });
  
  test('Test double quote', async () => {
    const text = 'hello "t" from morocco "r" :)';
    const arr = $extract(text, "double_quote");
    expect(arr).not.toEqual(undefined);
    expect(arr!.length).toEqual(2);
    expect(arr![0]).toEqual("t");
    expect(arr![1]).toEqual("r");
  });
});