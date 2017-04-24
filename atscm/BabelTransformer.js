import { PartialTransformer } from 'atscm';

export default class BabelTransformer extends PartialTransformer {

  static shouldBeTransformed(file) {
    return file.extname === '.js';
  }

}
