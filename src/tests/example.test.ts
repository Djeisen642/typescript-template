import { HelloThing } from '../example';

describe('example', () => {
  it('should say hello', () => {
    console.log = jest.fn().mockImplementation();
    const example = new HelloThing();
    example.saysHello();

    expect(console.log).toHaveBeenCalledWith('Hello!');
  });
});
