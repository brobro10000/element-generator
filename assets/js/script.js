import { Element } from "./modules/class/Element.mjs";

new Element('p', 'userInput', 'row p-4').append('body');

let main = new Element('main', 'cool', 'container p-4').append('body')
main.removeClass('p-4')
let main1 = new Element('main').append('body')
let main2 = new Element('main').append('body')
let main3 = new Element('main').append('body')
console.log(main3)
main3.setID('test')
main3.setClass('container p-4')
main3.setID('test2')
main3.removeClass('p-4')
let div = new Element().append(main3.getID())
// let div = new Element().append(main.getID())