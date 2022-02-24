# Want the convenience of JQuery's 1 line element creator, but hate dollar signs and CDNs?!

This basic element creator allows you to create elements with a class without the need of external tools.

Import the class into your javascript module, and create elements to your hearts content!

You can declare elements and append them to elements with an ID reference, and continue to use javascripts built in element manipulation functionality

Each element is given a data-identifier , so now we can easily add and remove id's and elements, even after its been placed on the DOM!

# Instructions

new Element(
1. String: elementType (default is div), 
2. String: id (default is null), 
3. String: class (default is null), 
4. String: identifier (default is identifier)
)

## Example: 
```
let main = new Element(main).append('idName')
main.setID('mainContainer')
let div = new Element().append(main.getID())

main.element.textContent = 'This is a novel idea'
main.update()
```
## Methods of new Element()
###### 1. **.append(String: idName)** - appends to an id, and assigns an identifer dataset
###### returns 
```
new Element(this.elementType,this.idName,this.className, this.identifier)
```
###### 2. **.getID()** - returns the id of the element
###### returns 
```
String: this.idName
```
###### 3. **.setID(String: id)** - sets the id of the element, best if done before you append to DOM elements
###### returns 
```
new Element(this.elementType,this.idName,this.className, this.identifier)
```
###### 4. **.getClass()** - returns the classes of the element
###### returns 
```
String: this.className
```
###### 5. .**setClass(String: className)** - sets the classes of the element, best if done before you append to DOM elements
###### returns 
```
new Element(this.elementType,this.idName,this.className, this.identifier)
```
###### 6. **.removeClass(String: className)** - removes the class specified in the parameter, CURRENTLY REMOVES ONE CLASS AT A TIME!
###### returns 
```
new Element(this.elementType,this.idName,this.className, this.identifier)
``` 
###### 7. **.update()** - update elements on the DOM that has been been set but not appended yet. Recommend calling this at the very end of updating all values 
###### Example 
```
new Element()setID('mainDiv').setClass('row p-4').append('someID').update()
```
###### returns 
```
new Element(this.elementType,this.idName,this.className, this.identifier)
```

**WARNING** 
DO NOT TRY TO APPEND AN ELEMENT TO ITSELF! (WIP)
**!!! UPDATE !!!**
YOU CAN NOW APPEND AN ELEMENT TO ITSELF

# Future

Its still a work in progress, so its a simple tool that allows you to save a bit of time 
Development will continue to take into account unique attributes of form elements, images etc.
