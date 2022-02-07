import { Element } from "./modules/class/Element.mjs";

new Element('p', 'userInput', 'row p-4').append('body');

function main() {
    let main = new Element('main', 'mainContainer', 'container').append('body')
    return main
}
let mainEl = main()
let testEl = new Element()
console.log(testEl.getID())
console.log(testEl.setID('mainDiv'))
console.log(testEl.getID())

console.log(testEl.getClass())
console.log(testEl.setClass('container p-4 m-2'))
console.log(testEl.getClass())
console.log(testEl.removeClass('p-4'))
console.log(testEl.getClass())

console.log(testEl.removeClass('m-2'))
console.log(testEl.getClass())
console.log(mainEl.append('mainContainer').append('body'))
testEl.append(mainEl.getID())