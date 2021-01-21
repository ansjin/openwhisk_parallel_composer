'use strict';

function main(params) {
    var name = params["name"];

    if(name){
        return {"Welcome": name};
    }
    else {
        return {"Welcome": "DEFAULT VALUE"};
    }
}