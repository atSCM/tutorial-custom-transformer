import { Atviseproject } from 'atscm';
import BabelTransformer from './atscm/BabelTransformer';

/**
 * atvise-scm configuration of tutorial-custom-transformer.
 */
export default class TutorialCustomTransformer extends Atviseproject {

  /**
   * The atvise-server's host
   * @type {String}
   */
  static get host() {
    return 'localhost';
  }

  /**
   * The atvise-server ports to use.
   * @type {Object}
   * @property {Number} opc The OPC-UA port the atvise-server runs on.
   * @property {Number} http The HTTP port the atvise-server can be reached at.
   */
  static get port() {
    return {
      opc: 4840,
      http: 80,
    };
  }

  static get useTransformers() {
    return super.useTransformers
      .concat(new BabelTransformer());
  }

}
