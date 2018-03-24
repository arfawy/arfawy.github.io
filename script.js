function capture(id) {
    id = "#" + id;
    var img;
    html2canvas(document.querySelector(id))
    .then(canvas => {
        img = canvas.toDataURL();
        document.getElementById("download").setAttribute("download", "SIDI_Benarfa_Mze.png");
        document.getElementById("download").setAttribute("href", img);
    });
}