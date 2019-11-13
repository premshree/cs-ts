import util from 'util';
import LinkedList from './linked-list';


describe('Given a Linked List', () => {
  const list = new LinkedList<number>();
  list.add(10);
  list.add(20);
  list.add(30);
  list.add(40);
  list.add(50);

  test('items', () => {
    expect(list.items().sort()).toEqual([10, 20, 30, 40, 50]);
  });

  describe('find', () => {
    test('returns true for items in the linked list', () => {
      expect(list.find(10)).toBe(true);
      expect(list.find(50)).toBe(true);
    });
    test('returns false for items not in the linked list', () => {
      expect(list.find(13)).toBe(false);
      expect(list.find(54)).toBe(false);
    });
  });

  describe('delete', () => {
    test('returns true when an item from a linked list is deleted', () => {
      expect(list.delete(10)).toBe(true);
      expect(list.find(10)).toBe(false);
      expect(list.items().sort()).toEqual([20, 30, 40, 50]);
      expect(list.delete(50)).toBe(true);
      expect(list.find(50)).toBe(false);
      expect(list.items().sort()).toEqual([20, 30, 40]);
    });
    test('returns false when attempting to delete an item not in the linked list', () => {
      expect(list.delete(13)).toBe(false);
      expect(list.delete(54)).toBe(false);
    });
  });
});
