import "../dist/index.js";

module.exports = {
    paths: {
        starknetArtifacts: "my-starknet-artifacts"
    },
    networks: {
        devnet: {
            url: "http://localhost:5000"
        }
    },
    mocha: {
        starknetNetwork: process.env.NETWORK
    }
};
