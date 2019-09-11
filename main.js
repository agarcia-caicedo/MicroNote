window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

const fs = new Filer.FileSystem();

fs.readFile('/note', 'utf8', function(err, data){
    const msg = "Welcome to MicroNote";

    if (err){
        console.log(msg);
        document.querySelector('#note').innerHTML = msg;
    }
    if (data){
        console.log(data);
        document.querySelector('#note').innerHTML = data;
    }
})
});