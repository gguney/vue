function log(string){
    console.log('this is log '+string);
}

function notify(string)
{
    console.log('this is notify '+string);
}

export default
{
    log: log,
    notify: notify
}