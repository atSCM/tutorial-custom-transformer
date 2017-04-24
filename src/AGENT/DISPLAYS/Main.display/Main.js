// Class syntax
class Test {

  constructor(options = {}, ...otherArgs) { // Default values and rest params
    this.options = options;
    this.args = otherArgs.map(arg => parseInt(arg)); // Arrows and Lexical This
  }

}

const a = 13; // Constants
const { options, args } = new Test({ a }, '23'); // Enhanced Object Literals

alert(`Option a: ${options.a}, args: ${args.join(', ')}`); // Template Strings
