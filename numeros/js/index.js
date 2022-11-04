$(document).ready(function () {
    $("#bto").click(function () {
        var numu = $("#numu").val();
        var numdos = $("#numdos").val();
        var operacion = $("#operacion").val();
        var mas;
        console.log(numu);
        console.log(numdos);
        console.log(operacion);
        if (isNaN(numu) || isNaN(numdos)) {
            alert("pon numeros");
        } else {
            if (operacion == "suma") {
                var res = parseFloat(numu) + parseFloat(numdos);
                if (numu > numdos) {
                    mas = "el primero es mas grande";
                } else {
                    mas = "el segundo es mas grande";
                }
                $("#resultat").html(mas);
                $("#resu").html(res);
                console.log(res);
            } else if (operacion == 'resta') {
                var res = parseFloat(numu) - parseFloat(numdos);
                if (numu > numdos) {
                    mas = "el primero es mas grande";
                } else {
                    mas = "el segundo es mas grande";
                }
                $("#resultat").html(mas);
                $("#resu").html(res);
                console.log(res);
            }
            else if (operacion == 'multiplicacion') {
                var res = parseFloat(numu) * parseFloat(numdos);
                if (numu > numdos) {
                    mas = "el primero es mas grande";
                } else {
                    mas = "el segundo es mas grande";
                }
                $("#resultat").html(mas);
                $("#resu").html(res);
                console.log(res);
            } else if (operacion == 'division') {
                var res = parseFloat(numu) / parseFloat(numdos);
                if (numu > numdos) {
                    mas = "el primero es mas grande";
                } else {
                    mas = "el segundo es mas grande";
                }
                $("#resultat").html(mas);
                $("#resu").html(res);
                console.log(res);
            }
        }
    })
});
