class Element {
    constructor(elementType, idName = null, className = null) {
        this.elementType = elementType;
        this.idName = idName;
        this.className = className
        this.element = document.createElement(this.elementType)

        if (this.idName != null) {
            this.element.setAttribute('id', this.idName);
        }
        if (this.className != null) {
            this.element.setAttribute('class', this.className);
        }
        if (typeof this.elementType !== 'string' || this.elementType == undefined) {
            throw new Error("A string input is required for parameter 1");
        }
    }
    append(id) {
        return document.getElementById(id).appendChild(this.element);
    }


}


export { Element }