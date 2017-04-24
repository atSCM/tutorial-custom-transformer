import { Buffer } from 'buffer';
import { PartialTransformer } from 'atscm';
import { transform } from 'babel-core';

export default class BabelTransformer extends PartialTransformer {

  shouldBeTransformed(file) {
    return file.extname === '.js';
  }

  transformFromFilesystem(file, enc, callback) {
    // Create ES5 code
    const { code } = transform(file.contents, {
      presets: ['es2015']
    });

    // Create new file with ES5 content
    const result = file.clone();
    result.contents = Buffer.from(code);

    // We're done, pass the new file to other streams
    callback(null, result);
  }

  transformFromDB(file, enc, callback) {
    callback(null); // Ignore file, remove it from the stream
  }

}
