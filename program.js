document.querySelector("#aceptar").setAttribute("onclick","cuit()");
function cuit(){
    let prefijo = 0;
    let sexo = document.querySelector("#sexo").value.trim().toUpperCase();
    console.log(sexo);
    if (sexo != "F" && sexo != "M" && sexo!="E"){
        document.querySelector("#resultado").innerHTML = "Error Sexo";
        return;
    }
    let dni = document.querySelector("#dni").value;
    if (isNaN(dni) || dni.length != 8){
        document.querySelector("#resultado").innerHTML = "Error DNI";
        return;
    }
    switch(sexo){
        case "F":
            prefijo = "27";
            break;
        case "M":
            prefijo = "20";
            break;
        case "E":
            prefijo = "30";
    }
    let valor1 = [5,4,3,2,7,6,5,4,3,2];
    let suma = 0, z = 0;        //z es el dígito verificador
    // suma += prefijo.substr(0,1) * valor1[0];
    // suma += prefijo.substr(1,1) * valor1[1];
    // suma += dni.substr(0,1) * valor1[2];
    // suma += dni.substr(1,1) * valor1[3];
    // suma += dni.substr(2,1) * valor1[4];
    // suma += dni.substr(3,1) * valor1[5];
    // suma += dni.substr(4,1) * valor1[6];
    // suma += dni.substr(5,1) * valor1[7];
    // suma += dni.substr(6,1) * valor1[8];
    // suma += dni.substr(7,1) * valor1[9];
    for (let i = 0; i < valor1.length; i++) {
        if (i < 2){
            suma += prefijo.substr(i,1) * valor1[i];
        }else{
            suma += dni.substr(i-2,1) * valor1[i];            
        }        
    }

    let resto = suma % 11;

    if (resto == 0) {
        z = 0;
    }else{
        if (resto == 1 && sexo == "M"){
            z = 9; prefijo = "23";
        }else{
            if (resto == 1 && sexo == "F"){
                z = 4; prefijo = "23";
            }else{
                z = 11 - resto
            }
        }
    }
    let cuit = prefijo + "-" + dni + "-" + z;
    document.querySelector("#resultado").innerHTML = cuit;
}