'use strict';

const bin_Tree = require('../JavaScript/trees/trees');


describe('Tests binary tree tree search', () => {

  const Tree = new bin_Tree.bint();



  test('return a the max number of tree', () => {

    Tree.root = new bin_Tree.node(50);
    Tree.root.left = new bin_Tree.node(25);
    Tree.root.right = new bin_Tree.node(33);
    Tree.root.right.left = new bin_Tree.node(100);
    Tree.root.right.left.left = new bin_Tree.node(855);

  
    const maxTree = Tree.maxvalue();
  
    expect(maxTree).toEqual(855);
  });

  test('return a the min number of tree', () => {

    Tree.root = new bin_Tree.node(50);
    Tree.root.left = new bin_Tree.node(25);
    Tree.root.right = new bin_Tree.node(33);
    Tree.root.right.left = new bin_Tree.node(100);
    Tree.root.right.left.left = new bin_Tree.node(855);

  
    const maxTree = Tree.minvalue();
  
    expect(maxTree).toEqual(25);
  });
  test('Traverses breadth-first', () => {

    Tree.root = new bin_Tree.node(12);

    Tree.root.left = new bin_Tree.node(44);
    Tree.root.left.left = new bin_Tree.node(32);
    Tree.root.left.right = new bin_Tree.node(8);
    Tree.root.left.right.left = new bin_Tree.node(32);
    Tree.root.left.right.right = new bin_Tree.node(0);

    Tree.root.right = new bin_Tree.node(220);
    Tree.root.right.left = new bin_Tree.node(1);
    Tree.root.right.right = new bin_Tree.node(2);
    Tree.root.right.right.left = new bin_Tree.node(3);
    Tree.root.right.right.right = new bin_Tree.node(10);

    const breadthTest = Tree.breadth_First();

    expect(breadthTest).toEqual([12, 44, 220, 32, 8, 1, 2, 32, 0, 3, 10]);
  });
});