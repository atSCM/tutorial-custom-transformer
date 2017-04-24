import { PartialTransformer } from 'atscm';

export default class BabelTransformer extends PartialTransformer {

  shouldBeTransformed(file) {
    return file.extname === '.js';
  }

}
