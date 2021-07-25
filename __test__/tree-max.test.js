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

});