window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const fs = new Filer.FileSystem();

    fs.readFile('/note', 'utf8', (err, data) => {
        const msg = "Welcome to MicroNote!";

        if (err) {
            console.log(msg);
            //document.querySelector('#note').innerHTML = msg;
        }
        if (data) {
            console.log(data);
            document.querySelector('#note').innerHTML = data;
        }
        setInterval(() => {
            fs.writeFile('/note', data, (err) => {
                if (err) console.log("error: " + err);
                else {
                    data = document.querySelector('#note').innerHTML;
                    console.log("saving: " + data);
                }
            });
        }, 50000);

        setInterval(() => {
            //console.log("counting");
            countWords();
        }, 200);

        function countWords() {
            var words = document.querySelector('#note').innerHTML;

            words = words.replace(/&nbsp;+/g, "");
            words = words.replace(/&lt;+/g, "");
            words = words.replace(/&gt;+/g, "");
            words = words.replace(/&amp;+/g, "");
            words = words.replace(/<[^>]*>/g, " ");
            words = words.replace(/_+/g, " ");
            words = words.match(/\w+/gi);

            var wordCount = 0;

            if (words) {
                for (i = 0; i < words.length; i++) {
                        wordCount++;
                }
            }
            console.log(words)
            console.log(wordCount);
            document.querySelector('#word-count').innerHTML = wordCount;

        }
    })
});

