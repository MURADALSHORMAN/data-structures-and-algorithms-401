'use strict';

const AnimalShelter = require('../JavaScript/animal');


//Happy Path
describe('Testing  AnimalShelter class', () => {
  it('add values to AnimalShelter => using enqueue', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({cat: 'kity'});
    shelter.enqueue({dog: 'samion'});
    shelter.enqueue({cat: 'pola'});
    shelter.enqueue({dog: 'maky'});
    expect(shelter.db[0]).toEqual({cat: 'kity'});
  });
  it('removes the oldest value from AnimalShelter with the specified animal => cat ', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({cat: 'samion'});
    shelter.enqueue({dog: 'kity'});
    shelter.enqueue({cat: 'pola'});
    shelter.enqueue({dog: 'maky'});
    expect(shelter.dequeue('cat')).toEqual({cat: 'samion'});
  });
  it('removes the oldest value from AnimalShelter with the specified animal => dog', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({cat: 'samion'});
    shelter.enqueue({dog: 'kity'});
    shelter.enqueue({cat: 'pola'});
    shelter.enqueue({dog: 'maky'});
    expect(shelter.dequeue('dog')).toEqual({dog: 'kity'});
  });
    it('returns false if Animal type', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({cat: 'samion'});
    shelter.enqueue({dog: 'kity'});
    shelter.enqueue({cat: 'pola'});
    shelter.enqueue({dog: 'maky'});
    expect(shelter.dequeue('fish')).toBeFalsy();
  });


  it('returns false if no Animal type is specified ', () => {
    const shelter = new AnimalShelter;
    shelter.enqueue({cat: 'samion'});
    shelter.enqueue({dog: 'kity'});
    shelter.enqueue({cat: 'pola'});
    shelter.enqueue({dog: 'maky'});
    expect(shelter.dequeue()).toBeFalsy();
  });
});