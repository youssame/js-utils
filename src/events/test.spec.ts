import {describe, expect, test} from '@jest/globals';
import {JSDOM} from 'jsdom';
import { $when } from './';
import { $1, $n } from '../selections';
import { NOT_FOUND_ELEMENT_MESSAGE } from './events';

// beforeEach(() => {
// });

describe('Test events module', () => {
  test('Attach an event to an element (By Element)', async () => {
    const dom = new JSDOM(`<!DOCTYPE html><button id="btn">Hello world</button>`);
    global.document = dom.window.document;
    const el = $1("#btn");
    expect(el).not.toBeNull();
    let check = false;
    $when("click", el!, (e: Event) => {
      check = true;
    })
    // @ts-ignore
    el!.click()
    expect(check).toBeTruthy();
  });

  test('Attach an event to an element (By Selector)', async () => {
    const dom = new JSDOM(`<!DOCTYPE html><button id="btn">Hello world</button>`);
    global.document = dom.window.document;
    const el = $1("#btn");
    expect(el).not.toBeNull();
    let check = false;
    $when("click", "#btn", (e: Event) => {
      check = true;
    })
    // @ts-ignore
    el!.click()
    expect(check).toBeTruthy();
  });

  test('Attach an event to a list of elements (By Element)', async () => {
    const dom = new JSDOM(`<!DOCTYPE html>
      <button class="btn btn1">Hello world</button>
      <button class="btn btn2">Hello world</button>
      <button class="btn btn3">Hello world</button>
    `);
    global.document = dom.window.document;
    
    const elements = $n(".btn");
    expect(elements.length).not.toEqual(0);
    
    let check = false;
    $when("click", elements, (e: Event) => {
      check = !check;
    });
    // @ts-ignore
    elements[0].click();
    expect(check).toBeTruthy();

    // @ts-ignore
    elements[1].click();
    expect(check).toBeFalsy();

    // @ts-ignore
    elements[2].click();
    expect(check).toBeTruthy();
  });

  test('Attach an event to a list of elements (By Selector)', async () => {
    const dom = new JSDOM(`<!DOCTYPE html>
      <button class="btn btn1">Hello world</button>
      <button class="btn btn2">Hello world</button>
      <button class="btn btn3">Hello world</button>
    `);
    global.document = dom.window.document;
    
    const elements = $n(".btn");
    expect(elements.length).not.toEqual(0);
    
    let check = false;
    $when("click", ".btn", (e: Event) => {
      check = !check;
    });
    // @ts-ignore
    elements[0].click();
    expect(check).toBeTruthy();

    // @ts-ignore
    elements[1].click();
    expect(check).toBeFalsy();

    // @ts-ignore
    elements[2].click();
    expect(check).toBeTruthy();
  });

  test('Attach an event to an undefined (By Selector)', async () => {
    const dom = new JSDOM(`<!DOCTYPE html><button id="btn">Hello world</button>`);
    global.document = dom.window.document;
    const el = $1("#btn__");
    expect(el).toBeNull();
    let check = false;
    
    expect(() => {
      $when("click", "#btn__", (e: Event) => {
        check = true;
      })
    }).toThrow(NOT_FOUND_ELEMENT_MESSAGE);
  });
});