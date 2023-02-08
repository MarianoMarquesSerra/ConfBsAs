function calcularPrecio(){
    document.getElementById("myForm").addEventListener("submit", function(e){
        e.preventDefault()
    });

    let cantidad = document.getElementById("Cantidad").value;
    let categoria = document.getElementById("Categoria").value;
    let totalaPagar = document.getElementById("TotalaPagar");
    let porcentaje = 0;
    let total = 0;

    switch(categoria){
        case "1":
            porcentaje = 80;
            break;
        case "2":
            porcentaje = 50;
            break;
        case "3":
            porcentaje = 15;
            break;
    }

    total = 200 * parseInt(cantidad);
    totalaPagar.value = "Total a Pagar: $" +(total - (total * parseInt(porcentaje) / 100));

}

function borrarFormulario(){
    document.getElementById("myForm").addEventListener("submit", function(e){
        e.preventDefault()
    });

    document.getElementById("Nombre").value = " ";
    document.getElementById("Apellido").value = " ";
    document.getElementById("Correo").value = " ";
    document.getElementById("Cantidad").value = " ";
    document.getElementById("Categoria").value = "0";
    document.getElementById("TotalaPagar").value = " ";
}