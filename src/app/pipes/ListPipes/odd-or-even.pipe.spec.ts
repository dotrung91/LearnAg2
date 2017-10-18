import { OddOrEvenPipe } from './odd-or-even.pipe';

describe('OddOrEvenPipe', () => {
  it('create an instance', () => {
    const pipe = new OddOrEvenPipe();
    expect(pipe).toBeTruthy();
  });
});
