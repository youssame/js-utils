import {beforeEach, describe, expect, test} from '@jest/globals';
import { $ajax, defaultFetchInit } from './';

beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks();
});
// Test post methods
describe('Test ajax module', () => {
  test('Test post method', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify({
        mo: "momo",
        bo: "bobo"
    }));
    const res = await $ajax("bobo.com/api", {...defaultFetchInit, method: "POST"}) as {[k: string]: string};
    expect(res.mo).toEqual("momo");
    expect(res.bo).toEqual("bobo");
  });

  test('Test get method', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify({
        mo: "momo",
        bo: "bobo"
    }));
    const res = await $ajax("bobo.com/api", {...defaultFetchInit, method: "GET"}) as {[k: string]: string};
    expect(res.mo).toEqual("momo");
    expect(res.bo).toEqual("bobo");
  });

  test('Test default call', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify({
        mo: "momo",
        bo: "bobo"
    }));
    const res = await $ajax("bobo.com/api", defaultFetchInit) as {[k: string]: string};
    expect(res.mo).toEqual("momo");
    expect(res.bo).toEqual("bobo");
  });
});