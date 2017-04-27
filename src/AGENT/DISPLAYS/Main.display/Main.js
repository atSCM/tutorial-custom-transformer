// Class syntax
class Test {

  constructor(options = {}, ...otherArgs) { // Default values and rest params
    this.options = options;
    this.args = otherArgs.map(arg => parseInt(arg, 10)); // Arrows and Lexical This
  }

}

const a = 13; // Constants
const { options, args } = new Test({ a }, '23'); // Enhanced Object Literals

// eslint-disable-next-line no-alert
alert(`Option a: ${options.a}, args: ${args.join(', ')}`); // Template Strings
