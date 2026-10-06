import { expect, it, describe } from 'vitest';

describe('calc', () => {
  it('add', () => {
    expect(1 + 1).toBe(2);
  });

  // The name starts with the name of the test above
  it('add negative', () => {
    expect(1 + -1).toBe(100);
  });
});
