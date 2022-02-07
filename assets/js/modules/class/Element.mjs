class Element {
    constructor(elementType = 'div', idName = null, className = null) {
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
        document.getElementById(id).appendChild(this.element);
        return new Element(this.elementType, this.idName, this.className)
    }
    getID() {
        return this.idName
    }
    setID(id) {
        this.idName = id
        return new Element(this.elementType, this.idName, this.className)
    }
    getClass() {
        return this.className
    }
    setClass(className) {
        this.className = className
        return new Element(this.elementType, this.idName, this.className)
    }
    removeClass(className) {
        let splitClass = this.className.split(' ');
        if (splitClass.indexOf(className) == -1) {
            throw new Error(`Class of ${className} not found`)
        } else {
            delete splitClass[splitClass.indexOf(className)]
        }
        this.className = splitClass.filter(() => true).join(' ');
        return new Element(this.elementType, this.idName, this.className)
    }

}


export { Element }