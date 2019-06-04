import * as config from 'config';
import BlueSnapGateway from '../../../src/lib/bluesnap/BlueSnapGateway';
import BlueSnapConfig from '../../../src/lib/bluesnap/BlueSnapConfig';

const bluesnapConfig = new BlueSnapConfig(config.get('environment'), config.get('username'), config.get('password'), config.get('bluesnapVersion'));
const gateway = new BlueSnapGateway(bluesnapConfig);

export default gateway;
