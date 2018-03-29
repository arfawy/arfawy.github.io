function capture(id) {
    id = "#" + id;
    var img;
    var filename = "SIDI_Benarfa_Mze.png";
    html2canvas(document.querySelector(id))
    .then(canvas => {
        img = canvas.toDataURL("image/png");

        var link = document.createElement("a");
        link.download = filename;
        link.href = img;
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        delete link;
    });
}