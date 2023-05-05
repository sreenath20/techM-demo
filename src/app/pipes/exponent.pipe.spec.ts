import { ExponentPipe } from './exponent.pipe';

describe('ExponentPipe', () => {
  
  it('create an instance', () => {
    const pipe = new ExponentPipe();
    expect(pipe).toBeTruthy();
  });

  it('check 2^2 to be 4',()=>{

    const pipe = new ExponentPipe();
    expect(pipe.transform(2,2)).toBe(4);

  });
});
