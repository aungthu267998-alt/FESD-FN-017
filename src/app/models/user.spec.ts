import { User } from './user';

describe('User Model - getAge() Unit Tests', () => {
  it('TC-01: Birthday has passed this year', () => {
    const user = new User({ dateOfBirth: '1990-01-01' });
    expect(user.getAge()).toBe(34);
  });

  it('TC-02: Today is the birthday', () => {
    const user = new User({ dateOfBirth: '1990-05-20' });
    expect(user.getAge()).toBe(34);
  });

  it('TC-03: Birthday has not yet arrived', () => {
    const user = new User({ dateOfBirth: '1990-12-31' });
    expect(user.getAge()).toBe(33);
  });

  it('TC-04: Newborn (Born today)', () => {
    const user = new User({ dateOfBirth: '2024-05-20' });
    expect(user.getAge()).toBe(0);
  });

  it('TC-05: Leap Year Birthday', () => {
    const user = new User({ dateOfBirth: '2000-02-29' });
    expect(user.getAge()).toBe(24);
  });

  it('TC-06: Future Date (Invalid)', () => {
    const user = new User({ dateOfBirth: '2025-01-01' });
    expect(() => user.getAge()).toThrowError('Future Date');
  });

  it('TC-07: Incorrect Date Format', () => {
    const user = new User({ dateOfBirth: '31/02/1990' });
    expect(() => user.getAge()).toThrowError('Incorrect Date Format');
  });

  it('TC-08: Null or Undefined Value', () => {
    const user = new User({ dateOfBirth: null });
    expect(() => user.getAge()).toThrowError('Null or Undefined Value');
  });

  it('TC-09: Maximum Lifespan (Edge)', () => {
    const user = new User({ dateOfBirth: '1900-01-01' });
    expect(user.getAge()).toBe(124);
  });

  it('TC-10: Monthly Boundary', () => {
    const user = new User({ dateOfBirth: '1990-05-21' });
    expect(user.getAge()).toBe(33);
  });
});