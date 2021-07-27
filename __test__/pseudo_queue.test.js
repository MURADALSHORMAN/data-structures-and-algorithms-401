

const Pseudoqueue = require('../pseudo_queue');


describe('testing insert value function for linked list', () => {
 


  describe('Pseudoqueue', () => {

     
    it('Pseudoqueue => enqueue testing', () => {
      let PseudoQueue= new Pseudoqueue
    //   PseudoQueue.enqueue(1);
      expect(PseudoQueue.enqueue(1)[0].value).toEqual(1);
    //   PseudoQueue.enqueue(2);
      expect(PseudoQueue.enqueue(2)[1].value).toEqual(2);
    //   PseudoQueue.enqueue(3);
      expect(PseudoQueue.enqueue(3)[2].value).toEqual(3);
    //   PseudoQueue.enqueue(4);
      expect(PseudoQueue.enqueue(4)[3].value).toEqual(4);
  
  
    });
    it('Pseudoqueue => dequeue testing', () => {
        let PseudoQueue= new Pseudoqueue
        PseudoQueue.enqueue(1);
        PseudoQueue.enqueue(2);
        PseudoQueue.enqueue(3);
        PseudoQueue.enqueue(4);

    
      expect(PseudoQueue.dequeue()).toEqual({"value": 1});
      expect(PseudoQueue.dequeue()).toEqual({"value": 2});
      expect(PseudoQueue.dequeue()).toEqual({"value": 3});
      expect(PseudoQueue.dequeue()).toEqual({"value": 4});

    });
  });
 
});