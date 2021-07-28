

const linkedListMaster = require('../linked_list');
const linkedList = linkedListMaster.ll;
const Node = linkedListMaster.node;
const zip = require('../JavaScript/linked_list').zip;
const palindrome = require('../linked_list').palindrome;

describe('testing insert value function for linked list', () => {
 


  describe('peek', () => {

    it('return null on empty Stack', () => {
      lL= new linkedList
      expect(lL.peek()).toBe(null);
    });

    it('return last item added on the Stack', () => {
      let lL= new linkedList
      lL.push(1);
      lL.push(2);
      lL.push(3);
      expect(lL.peek().value).toEqual(3);
      lL.push(4);
      expect(lL.peek().value).toEqual(4);
    });

    it('does not alter the stack', () => {
      let lL= new linkedList
      lL.push(1);
      expect(lL.peek().value).toEqual(1);
      expect(lL.peek().value).toEqual(1);
      lL.push(2);
      expect(lL.peek().value).toEqual(2);
      expect(lL.push(2)).toEqual(2);
    });

    it('point to the correct item after pop() on the stack', () => {
      let lL= new linkedList
      lL.push(1);
      lL.push(2);
      lL.push(4);
      expect(lL.pop().value).toEqual(2);
      expect(lL.peek().value).toEqual(2);
    });

    it('dequeue testing', () => {
      let lL= new linkedList
      lL.push(1);
      lL.push(2);
      lL.push(4);
     
    });

    it('enqueue testing', () => {
      let lL= new linkedList
      lL.enqueue(1);
      expect(lL.peek().value).toEqual(1);
      lL.enqueue(2);
      expect(lL.peek().value).toEqual(2);
      lL.enqueue(4);
      expect(lL.peek().value).toEqual(4);
  
    });
    it('dequeue testing first add first remove', () => {
      let lL= new linkedList
      lL.enqueue(1);
      lL.enqueue(2);
      lL.enqueue(4);
      expect(lL.dequeue()).toEqual(1);
     
    });
  });
 
});