# Want the convenience of JQuery's 1 line element creator, but hate dollar signs and CDNs?!

This basic element creator allows you to create elements with a class without the need of external tools.

Import the class into your javascript module, and create elements to your hearts content!

You can declare elements and append them to elements with an ID reference, and continue to use javascripts built in element manipulation functionality

Each element is given a data-identifier , so now we can easily add and remove id's and elements, even after its been placed on the DOM!

# Instructions

new Element(String: elementType (default is div), String: id (default is null), String: class (default is null))

## Example: 
let main = new Element(main).append(document.body)
main.setID('mainContainer')
let div = new Element().append(main.getID())

## Methods of new Element()
.append(String: idName) - appends to an id, and assigns an identifer dataset
.getID() - returns the id of the element
.setID(String: id) - sets the id of the element, best if done before you append to DOM elements
.getClass() - returns the classes of the element
.setClass(String: className) - sets the classes of the element, best if done before you append to DOM elements
.removeClass(String: className) - removes the class specified in the parameter, CURRENTLY REMOVES ONE CLASS AT A TIME!

**WARNING** 
DO NOT TRY TO APPEND AN ELEMENT TO ITSELF! (WIP)
!!! UPDATE !!!
YOU CAN NOW APPEND AN ELEMENT TO ITSELF

# Future

Its still a work in progress, so its a simple tool that allows you to save a bit of time 
Development will continue to take into account unique attributes of form elements, images etc.
