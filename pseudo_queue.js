'use strict';
const value = require('./stackobj');

let array=[];
class PseudoQueue {
    constructor(stack) {
        this.stack = [ ];

    }
    enqueue(item) {
        if (!item) {
            throw new Error('NO THING');
        }
        this.stack.push(new value(item))
        
        return this.stack;
    }

    dequeue() {
       
        if (!this.stack) {
           return 'NO THING';
        }
        const item =  this.stack.shift();
        return item;
    }



}

module.exports=PseudoQueue;

