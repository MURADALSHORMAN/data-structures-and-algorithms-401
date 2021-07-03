'use strict';

const linkedListMaster = require('../node');

const linkedList = linkedListMaster.ll;
const Node = linkedListMaster.node;


describe('testing linked list instantiation', () => {
  it('should return a linked list', () => {
    const ll = new linkedList;
    expect(ll).toBeTruthy();
  });
});

describe('testing insert value function for linked list', () => {
  it('should return a linked list with a new node added', () => {
    const ll = new linkedList;
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insert(4);

    expect(ll.head.value).toEqual(4);
  });
});

describe('testing linked list head points to first node in linked list', () => {
  it('should return a value equivalent to that of the first node in the linked list', () => {
    const ll = new linkedList;
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    
    expect(ll.head.value).toEqual(1);
  });
});

describe('testing ability to insert multiple nodes into list', () => {
  it('should return a linked list with multiple values', () => {
    const ll = new linkedList;
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(2);
    expect(ll.head.next.next.value).toEqual(3);
  });
});

describe('testing includes function for searching for a specific value in a linked list', () => {
  it('should return true if target value is present ', () => {
    const ll = new linkedList;
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.includes(3)).toBeTruthy();
  });
  it('should return false if target value is not present ', () => {
    const ll = new linkedList;
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.includes(3)).toBeTruthy();
    expect(ll.includes(6)).toEqual(false);
  });
});

describe('testing linked list toString function', () => {
  it('should a string of the values contained within a linked list', () => {
    const ll = new linkedList;
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });
});