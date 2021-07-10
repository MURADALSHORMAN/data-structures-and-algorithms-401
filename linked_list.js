'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;

  }
 
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  peek() {
    if(null || undefined){
      return null;
    }
    return this.head;
  }
  push(item) {
  
    if (!item) {
      throw new Error('NO THING');
    }
    this.head = new Node(item, this.head);
    this.size = this.size + 1;
    return  this.head.value; 
  }
  pop() {
    let Size=this.size;
    // console.log(this.head)
    this.head.value= this.head && this.head.next.value ;
    this.size=Size-1;
    const item = this.head;
    return item;

  }
  
  enqueue(item) {
    if (!item) {
      throw new Error('NO THING');
    }
    this.head = new Node(item, this.head);
    this.size = this.size + 1;
    return  this.head.value; 
  }
  dequeue() {
  
    let dequeuevalue;
   if (!this.head) {
    console.log('NO THING');
    return dequeuevalue;
    }
    for(let i=0;i<this.size-1;i++){
      this.head=this.head.next
      if (this.size==0){
        throw new Error('error');
      }
      if(this.size==1){
        let x=this.head.value;
        this.head=null
        return x; 
      }
      if(this.size==2){ 
        let x=this.head.value;
        this.head=null
        return x;
      }
     
      if(i==this.size-2){
         let x=this.head.value;
        this.head=null
        return x;
      }
      
 
    }
   

  }
  peekqueue() {
    return this.head[0];
  }

  insert(value) {
    if (!value) {
      throw new Error('NO THING');
    }
    this.head = new Node(value, this.head);
    this.size = this.size + 1;
  }

  includes(value) {
    let current = this.head;
    if (!value) {
      throw new Error('Improper value passed as argument');
    }
    if (!current) {
      throw new Error('Linked List invalid');
    }
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    if (!current) {
      throw new Error('Linked List invalid');
    }
    let finalStr = '';
    while (current) {
      finalStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    return finalStr += 'NULL';
  }
  append(value) {
    let current = this.head;
    if (!current) {
      this.head = new Node(value);
      this.size = this.size + 1;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
      this.size = this.size + 1;
    }
  }
  insertBefore(value, targetValue) {
    let current = this.head;
    if (current.value === targetValue) {
      this.insert(value);
    } else {
      while (current.next.value !== targetValue) {
        current = current.next;
      }
      let temp = new Node(value);
      temp.next = current.next;
      current.next = temp;
      this.size = this.size + 1;
    }
  }
  insertAfter(value, targetValue) {
    let current = this.head;
    while (current.value !== targetValue) {
      current = current.next;
    }
    let temp = new Node(value);
    temp.next = current.next;
    current.next = temp;
    this.size = this.size + 1;
  }
  kthFromEnd(k) {
    let currentNode = this.head;
    let count = this.size - 1;
    while (currentNode) {
      if (k === count) {
        return currentNode.value;
      }
      count--;
      currentNode = currentNode.next;
    }
    return 'Exception';
  }


}
function palindrome(list){
  let node = list.head;
  const list2 = new LinkedList();
  while(node){
    list2.insert(node.value);
    node = node.next;
    
  }
 
  if(list.toString() == list2.toString())
  { return true}
  else{
    return false
  }
}


module.exports = {
  ll: LinkedList,
  palindrome: palindrome,
  node: Node
};