'use strict';

function main(params) {
    // eslint-disable-next-line global-require, import/no-extraneous-dependencies
    const options = {
        apihost: ':31001',
        api_key: '23bc46b1-71f6-4ed5-8c54-816aa4f8c502:123zO3xZCLrMN6v2BKK1dXYFpXlPkccOFqm12CdAsMgRU4VrNZ9lyGVCGuMDGIwP',
        ignore_certs: true
    }
    const ow = require('openwhisk')(options);

    let data = {
        "$composer": {
            "redis": {
                "uri": "redis://owdev-redis.openwhisk.svc.cluster.local:6379"
            },
            "openwhisk": {
                "ignore_certs": true
            }
        },
        "name": "anshul",
        "product_id": 2,
        "mongo_host_ip": "",
        "db": "ccs",
        "collection": "products",
        "mongo_user": "root",
        "mongo_pass": "",
        
    }
    const invoke = (actionName, params) => ow.actions.invoke({ actionName, params, blocking: true });

    return invoke('composition', data)
        .then(res => res.response.result);
}
