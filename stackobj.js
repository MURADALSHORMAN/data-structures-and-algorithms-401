'use strict';

class Value {
    constructor(value) {
        this.value = value;
    }

    peek() {
        if (null || undefined) {
            return null;
        }
        return this.value;
    }
    push(item) {

        if (!item) {
            throw new Error('NO THING');
        }
        this.value = new Value(item);
        return this.value;
    }
    pop(item) {

        const newitem=item.shift();
        return newitem;

    }
}

module.exports=Value;