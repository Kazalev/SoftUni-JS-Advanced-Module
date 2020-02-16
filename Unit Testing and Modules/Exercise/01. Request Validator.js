function solve(request){

    const uriRgx = /^([\w.]+)$/gm;
    const msgRgx = /^([^<>\\&'"]+)$/gm;

    let validMethod = false;
    let validURI = false;
    let validVersion = false;
    let validMessage = false;

    if(request.hasOwnProperty('method')){
        validMethod = methodValidation(request);
        if(!validMethod){
            printErrorMsg('Method');
        }
    } else {
        printErrorMsg('Method');
    }
    if(request.hasOwnProperty('uri')){
        validURI = uriValidation(request);
        if(!validURI){
            printErrorMsg('URI');
        }
    } else {
        printErrorMsg('URI');
    } 
    if(request.hasOwnProperty('version')){
        validVersion = versionValidation(request);
        if(!validVersion){
            printErrorMsg('Version');
        }
    } else {
        printErrorMsg('Version');
    }
    if(request.hasOwnProperty('message')){
        validMessage = messageValidation(request);
        if(!validMessage){
            printErrorMsg('Message');
        }
    } else {
        printErrorMsg('Message');
    }

    function uriValidation(request){
        let validURI = false;
        if(request.uri === '*' || uriRgx.test(request.uri)){
            validURI = true;
        }

        return validURI;
    }

    function methodValidation(request){
        let validMethod = false;

        if(request.method === 'GET' ||
           request.method === 'POST' ||
           request.method === 'DELETE' ||
           request.method === 'CONNECT'){
           validMethod = true;
        }

        return validMethod;
    }

    function versionValidation(request){
        let validVersion = false;

        if(request.version === 'HTTP/0.9' ||
           request.version === 'HTTP/1.0' ||
           request.version === 'HTTP/1.1' ||
           request.version === 'HTTP/2.0'){
           validVersion = true;
        }

        return validVersion;
    }

    function messageValidation(request){
        let validMessage = false;

        if(msgRgx.test(request.message) || request.message === ''){
            validMessage = true;
        }
        
        return validMessage;
    }

    function printErrorMsg(header){
        throw new Error(`Invalid request header: Invalid ${header}`);
    }

    if(validMethod && validVersion && validURI && validMessage){
        return request;
    }
}

let test0 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};

let test1 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
};


console.log(solve(test0));