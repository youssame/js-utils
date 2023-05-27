import {beforeEach, describe, expect, test} from '@jest/globals';
import {JSDOM} from 'jsdom';
import { $1, $n } from './';

// beforeEach(() => {
// });

describe('Test ajax module', () => {
  test('Test $1', async () => {
    const dom = new JSDOM(`<!DOCTYPE html><p class="p">Hello world</p>`);
    global.document = dom.window.document;
    const res = $1(".p")
    expect(res).not.toBeNull();
  });


  test('Test $n', async () => {
    const dom = new JSDOM(`<!DOCTYPE html><p class="p">Hello world</p><p class="p">Hello world</p>`);
    global.document = dom.window.document;
    const res = $n(".p")
    expect(res.length).toEqual(2);
  });
});