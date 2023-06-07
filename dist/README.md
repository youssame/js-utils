# Description
This project is a collection of useful and versatile JavaScript utilities designed to make web development easier and more efficient. It includes functions for handling common tasks such as string manipulation, array sorting, and object validation, among others. With these utilities, developers can save time and streamline their code, allowing them to focus on building great applications.

# installation
* npm
```sh
npm i @youssame0/js-utils
```
# Documentation 
- Make an ajax call `$ajax<T>(url: string, fetchInit: fetchInit = defaultFetchInit): Promise<T>`
- Attach an event to an element `export const $when = (_event: keyof HTMLMediaElementEventMap, _onEl: Element | Element[] | string, _do (e: Event) => void ): void`
- When the document is ready event : `$whenDocumentReady = (_do: (e: Event) => void)`
- Select one element from the DOM : `$1(selector: string): Element | null`
- Select many elements from the DOM : `export function $n(selector: string)`
- Extract list of strings from a text by pattern : `$extract = (text: string, by: "braces" | "db_braces" | "brackets" | "parenthesis" | "quote" | "double_quote"): string[]`
- Event that waits until a condition : `$waitUntil = (fnCondition: (...args: any[]) => boolean, callback: (...args: any[]) => any, maxWaitingTime: number = 5000)`
# Testing
* npm
```sh
npm test
```
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact
Youssef AMEACHAQ - [@youssame0](https://twitter.com/youssame0) - youssefameachaq@gmail.com