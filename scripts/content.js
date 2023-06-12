window.addEventListener("load", myMain, false);

function myMain() {
    var jsInitChecktimer = setInterval(checkForPdfLoadFinish, 111);

    function checkForPdfLoadFinish() {
        var pdfs = performance.getEntriesByType('resource').filter(entry => {
                    return /.*pdf\.pdf/.test(entry.name);
                }
            )
        ;
        if (pdfs.length !== 0) {
            clearInterval(jsInitChecktimer);
            // in order to avoid 401 code
            var pdf_url = pdfs[0].name.replace("ndr-private", "ndr")
            var pdf_name = document.querySelector('title').textContent
            console.log("pdf name:", pdf_name, "pdf url:", pdf_url);
            const button = document.createElement('button');
            button.textContent = "在新标签页打开PDF文件"
            button.onclick = function () {
                window.open(pdf_url);
            };
            document.querySelector('h3').insertAdjacentElement('afterend', button);
        }
    }

}

