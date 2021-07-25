class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }



  class BinTree {
    constructor() {
      this.root = null;
    }
  

  
    pre_Order() {
      const array = [];
      const pre_Order = (node) => {
        array.push(node.value);
  
        if (node.left) {
            pre_Order(node.left);
        }
  
        if (node.right) {
            pre_Order(node.right);
        }
      };
  
      let currentvalue = this.root;
      pre_Order(currentvalue);
  
      return array;
    }
    pre_OrderTrav() {
        const stack = [];
    
        if (this.root !== null) {
          stack[stack.length] = this.root;
        }
    
        const result = [];
    
        while (stack.length > 0) {
          let node = stack.pop();
          result[result.length] = node.value;
    
          if (node.right !== null) {
    
            stack[stack.length] = node.right;
          }
    
          if (node.left !== null) {
            stack[stack.length] = node.left;
    
          }
        }
    
        return result;
      }
  
  
    post_Order() {
      const array = [];
  
      const post_Order = (node) => {
        if (node.left) {
            post_Order(node.left);
        }
  
        if (node.right) {
            post_Order(node.right);
        }
        array.push(node.value);
      };
  
      let currentvalue = this.root;
      post_Order(currentvalue);
  
      return array;
    }
  



    in_Order() {
      const array = [];
  
      const in_Order = (node) => {
  
        if (node.left) {
            in_Order(node.left);
        }
  
        array.push(node.value);
  
        if (node.right) {
            in_Order(node.right);
        }
      };
  
      let currentvalue = this.root;
      in_Order(currentvalue);
  
      return array;
    }
    maxvalue() {
      const array = [];
      let maxNumber = 0;
      const findmax = (node) => {
        if (node.left) {
          findmax(node.left);
        }
  
        array.push(node.value);
  
        if (node.right) {
          findmax(node.right);
        }
      };
  
      let current = this.root;
      findmax(current);
  
      array.map(number => {
        if (number > maxNumber) maxNumber = number;
      })
      
      return maxNumber;
  
    }

    minvalue() {
      const array = [];
      let minNumber = (1/0);
      const findmin = (node) => {
        if (node.left) {
          findmin(node.left);
        }
  
        array.push(node.value);
  
        if (node.right) {
          findmin(node.right);
        }
      };
  
      let current = this.root;
      findmin(current);
  
      array.map(number => {
        if (number < minNumber) minNumber = number;
      })
      
      return minNumber;
  
    }
}




  class BinTreeSearch {
    constructor() {
      this.root = null;
    }
  
    addvlaue(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
  
        return this;
      }
  
      let current = this.root;
      while (current) {
        if (value === current.value) {
  
          return undefined;
        }
  
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
  
            return this;
          }
          current = current.left;
  
        } else {
          if (current.right === null) {
            current.right = newNode;
  
            return this;
          }
          current = current.right;
        }
      }
    }
  
    contains(value) {
      if (!this.root) return false;
  
      let current = this.root;
      let exists = false;
      while (current && !exists) {
        if (value < current.value) {
          current = current.left;
        }
  
        else if (value > current.value) {
          current = current.right;
  
        } else {
          exists = true;
        }
      }
  
      if (!exists) {
  
        return undefined;
      }
  
      return exists;
    }
  }
  

  module.exports = {
      bint:BinTree,
      bints:BinTreeSearch,
      node:Node
}