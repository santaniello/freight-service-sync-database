const mongoose = require('mongoose');
const tunnel = require('tunnel-ssh');

const sshTunnelConfig = {
      username: 'leitura',
      password: 'temp',
      host: '10.128.46.16',
      port: 22,
      dstHost: '10.128.46.71',
      dstPort: 27017,
      localHost:'127.0.0.1',
      localPort: 27000
};

module.exports = function() {
    tunnel(sshTunnelConfig, (error, server) => {
        if (error) {
            console.log("SSH connection error: ", error);
        }
        mongoose.connect(`mongodb://freight-service:mktplace%40123@127.0.0.1:27000/freight-service?readPreference=secondary`);
    });
}