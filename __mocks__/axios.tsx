const get= ()=>{
    return Promise.resolve({
        data:{name:'Bangladesh'}
    });
}

exports.get = get;