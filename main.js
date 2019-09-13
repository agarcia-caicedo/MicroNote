window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const fs = new Filer.FileSystem();
    var noteData;

    fs.readFile('/note', 'utf8', (err, data) => {
        const msg = "Welcome to MicroNote!";

        if (err) {
            console.log(msg);
            //document.querySelector('#note').innerHTML = msg;
        }
        if (data){
            console.log(data);
            document.querySelector('#note').innerHTML = data;
        }
        setInterval(() => {
            fs.writeFile('/note', data, (err) => {
                if (err) console.log("error: " + err);
                else{
                    data = document.querySelector('#note').innerHTML;
                    console.log("saving: " + data);
                }
            });
        }, 500);

        function countWords(){
            var words = document.querySelector('#note').innerHTML;
            var count = words.trim().length();
            console.log(count);
             document.querySelector('#count').innerHTML = count;

    }
    })
});

