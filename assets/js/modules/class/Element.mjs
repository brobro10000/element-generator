class Element {
    constructor(elementType = 'div', idName = null, className = null, identifier = this.identifier) {
        this.elementType = elementType;
        this.idName = idName;
        this.className = className
        this.set = false;
        this.identifier = identifier
        this.element = document.createElement(this.elementType)
        console.log(this.identifier)
        this.element.setAttribute('data-identifier', this.identifier)
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
        this.set = true
        if (this.set == true) {
            this.randomNumber1 = getRandom(1, 1000)
            this.randomNumber2 = getRandom(1, 1000)
            this.element.setAttribute('data-identifier', `${this.elementType}${this.randomNumber1}${this.idName == null ? 'null' : this.className}${this.randomNumber2}${this.idName == null ? 'null' : this.idName}`)
            this.identifier = this.element.dataset.identifier
        }
        document.getElementById(id).appendChild(this.element);
        return new Element(this.elementType, this.idName, this.className, this.identifier)
    }
    getID() {
        return this.idName
    }
    setID(id) {
        let elArr = document.getElementsByTagName(this.elementType, 'main')
        for (var i = 0; i < elArr.length; i++) {
            if (elArr[i].dataset.identifier == this.identifier) {
                elArr[i].id = id
                this.idName = id
            }
        }
        return new Element(this.elementType, this.idName, this.className)
    }
    getClass() {
        return this.className
    }
    setClass(className) {
        let elArr = document.getElementsByTagName(this.elementType, 'main')
        for (var i = 0; i < elArr.length; i++) {
            if (elArr[i].dataset.identifier == this.identifier) {
                elArr[i].className = className
                this.className = className
            }
        }
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
        let elArr = document.getElementsByTagName(this.elementType, 'main')
        for (var i = 0; i < elArr.length; i++) {
            if (elArr[i].dataset.identifier == this.identifier) {
                elArr[i].className = this.className
                this.className = className
            }
        }
        return new Element(this.elementType, this.idName, this.className)
    }

}
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { Element }