'use strict';

const bin_Tree = require('../JavaScript/trees/trees');


describe('Tests binary tree tree search', () => {

  const Tree = new bin_Tree.bint();


  test('instantiate an empty tree', () => {

    expect(Tree.root).toEqual(null);
  });


  test('instantiate a tree with a single root node', () => {
    Tree.root = new bin_Tree.node(123);
    expect(Tree.root.value).toEqual(123);
  });


  test(' add a left child and right child to a single root node', () => {
    Tree.root = new bin_Tree.node(123);
    Tree.root.left = new bin_Tree.node(345);
    Tree.root.right = new bin_Tree.node(567);

    expect(Tree.root.value).toEqual(123);
    expect(Tree.root.left.value).toEqual(345);
    expect(Tree.root.right.value).toEqual(567);
  });


  test(' return a collection from a pre order traversal', () => {
    Tree.root = new bin_Tree.node(1);
    Tree.root.left = new bin_Tree.node(2);
    Tree.root.right = new bin_Tree.node(3);

    const preOrder = Tree. pre_Order();
    const preOrderTraversal = Tree.  pre_OrderTrav();

    expect(preOrder).toEqual([1, 2, 3]);
    expect(preOrderTraversal).toEqual([1, 2, 3]);
  });


  test('return a collection from an in order traversal', () => {
    Tree.root = new bin_Tree.node(10);
    Tree.root.left = new bin_Tree.node(2345234);
    Tree.root.right = new bin_Tree.node(44);

    const inOrder = Tree. in_Order();

    expect(inOrder).toEqual([2345234, 10, 44]);
  });


  test(' return a collection from a post order traversal', () => {

    Tree.root = new bin_Tree.node(9);
    Tree.root.left = new bin_Tree.node(5);
    Tree.root.right = new bin_Tree.node(2);

    const postOrder = Tree. post_Order();

    expect(postOrder).toEqual([5, 2, 9]);
  });

  test('sucssesfuly replace the value by Fizz or Buzz or FizzBuzz', () => {

    Tree.root = new bin_Tree.node(12);
    Tree.root.left = new bin_Tree.node(3);
    Tree.root.left.left = new bin_Tree.node(42);
    Tree.root.left.right = new bin_Tree.node(10);
    Tree.root.left.right.left = new bin_Tree.node(3);
    Tree.root.left.right.right = new bin_Tree.node(7);

    Tree.root.right = new bin_Tree.node(2);
    Tree.root.right.left = new bin_Tree.node(26);
    Tree.root.right.right = new bin_Tree.node(32);
    Tree.root.right.right.left = new bin_Tree.node(14);
    Tree.root.right.right.right = new bin_Tree.node(115);
    const breadth = Tree.fizzBuzzFun(Tree);
    let arr = breadth.pre_Order();
    expect(arr).toEqual(['Fizz', 'Fizz', 'Fizz', 'Buzz', 'Fizz', '7', '2', '26', '32', '14', 'Buzz']);
  });
});