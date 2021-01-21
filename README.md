# OpenWhisk Parallel Node.js Composer Application

### Installation

1. Download the wsk binary from https://github.com/apache/openwhisk-cli/releases
2. Install the wsk depending on your OS, (given here for linux).
3. Install Node.js (if not already installed)
4. Install openwhisk-composer (https://github.com/apache/openwhisk-composer)
```shell
$ wget https://github.com/apache/openwhisk-cli/releases/download/latest/OpenWhisk_CLI-latest-linux-386.tgz
$ tar -xvf OpenWhisk_CLI-latest-linux-386.tgz
$ sudo mv wsk /usr/local/bin/wsk
$ npm install -g openwhisk-composer
```

### Parameters

1. Edit test_ow_functions.js file, to include following: 
```shell
 apihost: ':31001',
 api_key: '23bc46b1-71f6-4ed5-8c54-816aa4f8c502:123zO3xZCLrMN6v2BKK1dXYFpXlPkccOFqm12CdAsMgRU4VrNZ9lyGVCGuMDGIwP',
 
 "name": "anshul",
 "product_id": 2,
 "mongo_host_ip": "",
 "db": "",
 "collection": "",
 "mongo_user": "",
 "mongo_pass": "",       
        
```

### Deploy Individual Functions

```shell
$ wsk property set --apihost HOST_IP:31001
$ wsk property set --auth 23bc46b1-71f6-4ed5-8c54-816aa4f8c502:123zO3xZCLrMN6v2BKK1dXYFpXlPkccOFqm12CdAsMgRU4VrNZ9lyGVCGuMDGIwP
$ cd app
$ wsk -i action create product-url product-url.js  --docker openwhiskansjin/action-nodejs-v14:mongo
$ wsk -i action create product-name product-name.js  --docker openwhiskansjin/action-nodejs-v14:mongo
$ wsk -i action create product-url product-url.js  --docker openwhiskansjin/action-nodejs-v14:mongo
$ compose composition.js > myCompose.json
$ deploy composition myCompose.json -i
$ wsk -i action create test_ow_functions test_ow_functions.js 

```

### Test Composition

```shell
$ wsk -i action invoke test_ow_functions --result
```

### Sample Output

```
{
    "value": [
        {
            "Welcome": "anshul"
        },
        {
            "product_price": 90
        },
        {
            "product_name": "Overhold"
        },
        {
            "product_url": "https://goo.ne.jp/commodo/placerat/praesent.aspx?in=tempor&congue=convallis&etiam=nulla&justo=neque&etiam=libero&pretium=convallis&iaculis=eget&justo=eleifend"
        }
    ]
}
```
