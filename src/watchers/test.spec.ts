import { describe, expect, jest, test } from '@jest/globals';
import { JSDOM } from 'jsdom';
import { $waitUntil } from './';
import { $1 } from '../selections';

// beforeEach(() => {
// });

describe('Test watchers', () => {
  test('Test $waitUntil', async () => {
    const dom = new JSDOM(`<!DOCTYPE html><div id="container"></div>`);
    global.document = dom.window.document;
    const callback = jest.fn();
    $waitUntil(() => { return $1("#btn") !== null }, callback);
    $1("#container")!.innerHTML = "<btn id='btn'>Button</btn>"
    setTimeout(() => {
      expect(callback.mock.calls.length).toEqual(1);
    }, 2000);
  });
});