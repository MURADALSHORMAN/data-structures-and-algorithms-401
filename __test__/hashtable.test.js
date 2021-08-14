let LinkedListMaster = require('../linked_list');
let LinkedList = LinkedListMaster.ll;
let HashTable = require('../hashtable/hashtable');


describe('Hash Table functionality', () => {
  it('Should add a key/value pair', () => {
    let table = new HashTable(1024);
    table.add('murad', 'full stack developer');
    expect(table.contains('murad')).toBeTruthy();
  });
  it('Should retrieve a value if given a key', () => {
    let table = new HashTable(1024);
    table.add('murad', 'full stack developer');
    expect(table.get('murad')).toEqual('full stack developer');
  });
  it('Should return null for a key that does not exist', () => {
    let table = new HashTable(1024);
    table.add('murad', 'student');
    expect(table.get('Frank')).toBeFalsy();
  });
  it('Should succesfully handle a collision within the table', () => {
    let table = new HashTable(1024);
    table.add('murad', 'student');
    table.add('murad', 'instructor');
    expect(table.contains('murad')).toBeTruthy();
    expect(table.get('murad')).toEqual('instructor');
    expect(table.find('murad').next).toBeTruthy();

  });
  it('Should succesfully retrieve a value from a collision within the table', () => {
    let table = new HashTable(1024);
    table.add('murad', 'student');
    table.add('murad', 'instructor');
    expect(table.find('murad').next.value['murad']).toEqual('student');
  });
  it('Should succesfully hash a a key to an in-range value', () => {
    let table = new HashTable(1024);
    let hashOne = table.hash('murad');
    let hashTwo = table.hash('JingleHeimerSchmidt');
    expect(hashOne < 1024 && hashOne > 0).toBeTruthy();
    expect(hashTwo < 1024 && hashTwo > 0).toBeTruthy();
  });
});