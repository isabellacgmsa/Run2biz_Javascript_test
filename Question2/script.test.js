const { findAddress } = require('./script');

describe('Address Finding App', () => {
  // Test case 1: Testing with provided example commands
  it('should return the correct address for the given commands', () => {
    const commands = [25, 52, 53, 202, 54, 402, 203, 510, 201];
    const expectedAddress = 3;

    const address = findAddress(commands);

    expect(address).to.equal(expectedAddress);
  });

  // Test case 2: Testing with empty commands
  it('should return 0 when no commands are provided', () => {
    const commands = [];
    const expectedAddress = 0;

    const address = findAddress(commands);

    expect(address).to.equal(expectedAddress);
  });

  // Test case 3: Testing with single command
  it('should return the correct address for a single command', () => {
    const commands = [202];
    const expectedAddress = 2;

    const address = findAddress(commands);

    expect(address).to.equal(expectedAddress);
  });

  // Test case 4: Testing with commands that don't affect the address
  it('should return 0 when no address-changing commands are provided', () => {
    const commands = [25, 53, 54];
    const expectedAddress = 0;

    const address = findAddress(commands);

    expect(address).to.equal(expectedAddress);
  });

  // Test case 5: Testing with commands that involve jumping
  it('should correctly handle jump commands', () => {
    const commands = [25, 51, 202, 52, 201, 203];
    const expectedAddress = 5;

    const address = findAddress(commands);

    expect(address).to.equal(expectedAddress);
  });
});
