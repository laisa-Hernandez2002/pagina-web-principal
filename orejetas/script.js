function calcularepFcn() {
    presion = parseFloat(document.querySelector("#presion").value);
    diametro = parseFloat(document.querySelector("#diametro").value);
    longitud = parseFloat(document.querySelector("#Longitud").value);
    
    /* Materiales */
    material = document.querySelector('#Material').value;
    material = parseFloat(material);
    UTS = 0;
    Ys  = 0;
    rhoMaterial = 0;     
    switch(material) {
        case 1:
            UTS = 415;
            Ys  = 230;
            rhoMaterial = 7800;
        break;
        case 2:
            UTS = 450;
            Ys  = 275; 
            rhoMaterial = 7800; 
        break;
        case 3:
            UTS = 485;
            Ys  = 275; 
            rhoMaterial = 7800;  
        break;
        case 4:
            UTS = 415;
            Ys  = 220;
            rhoMaterial = 7860; 
        break;
        case 5:
            UTS = 485;
            Ys  = 260;
            rhoMaterial = 7850;   
        break;
    }

    /* Eficiencia de la junta */
    eficiencia = document.querySelector("#Eficiencia").value;
    eficiencia = parseFloat(eficiencia);
    eta = 0;
    switch(eficiencia) {
        case 1:
            eta = 1;
        break;
        case 2:
            eta = 0.85;
        break;
        case 3:
            eta = 0.75;
        break;
    }

    /* Nivel */
    nivel = document.querySelector("#Nivel").value;
    nivel = parseFloat(nivel);
    rho = document.querySelector("#Densidad").value;
    rho = parseFloat(rho);

    /* Calculos */
    S = Math.min(UTS/3.5,Ys*2/3);

    /* Calculo de las tapas */
    ttapas = (presion * diametro) / (2 * S * eta - 0.2 * presion);
    ttapas = ttapas / 0.0254;
    document.querySelector("#espesortapas").value = ttapas.toFixed(4); 

    /* Calculo del cuerpo */
    tcuerpo = (presion * (diametro / 2)) / (S * eta - 0.6 * presion);
    tcuerpo = tcuerpo / 0.0254;
    document.querySelector("#espesorcuerpo").value = tcuerpo.toFixed(4);

    /* Volumen de las tapas */
    valoretc = document.querySelector('#espesorrealtapa').value;
    valoretc = parseFloat(valoretc);
    espesortapareal = (valoretc / 12); // Convertir a metros

    Vtapas = Math.PI / 12 * (Math.pow(diametro + 2 * espesortapareal, 3) - Math.pow(diametro, 3));

    /* Volumen del cuerpo */
    valoretb = document.querySelector('#espesorrealcuerpo').value;
    valoretb = parseFloat(valoretb);
    espesorcuerporeal = (valoretb / 12); // Convertir a metros

    Vcuerpo = Math.PI * longitud / 12 * (Math.pow(diametro + 2 * espesorcuerporeal, 2) - Math.pow(diametro, 2));

    pesoequipo = (Vtapas + Vcuerpo) * rhoMaterial;
    document.querySelector('#pesoequipo').value = pesoequipo.toFixed(0);

    // Cálculo de márgenes de seguridad
    cargaAplicada = parseFloat(document.querySelector("#cargaAplicada").value);
    resistenciaCortante = parseFloat(document.querySelector("#resistenciaCortante").value);
    resistenciaTraccion = parseFloat(document.querySelector("#resistenciaTraccion").value);
    resistenciaCompresion = parseFloat(document.querySelector("#resistenciaCompresion").value);

    // Márgenes de seguridad
    margenShear = resistenciaCortante / cargaAplicada;
    margenYield = resistenciaTraccion / cargaAplicada;

    document.querySelector("#margenShear").value = margenShear.toFixed(4);
    document.querySelector("#margenYield").value = margenYield.toFixed(4);

    // Validaciones de espesor
    if (espesortapareal < ttapas) {
        document.querySelector('#espesortapas').style.backgroundColor = 'rgb(255,199,206)';
        document.querySelector('#espesortapas').style.color = 'rgb(156,0,6)'; 
    } else {
        document.querySelector('#espesortapas').style.backgroundColor = 'rgb(198,239,206)';
        document.querySelector('#espesortapas').style.color = 'rgb(0,97,0)';      
    }

    if (espesorcuerporeal < tcuerpo) {
        document.querySelector('#espesorcuerpo').style.backgroundColor = 'rgb(255,199,206)';
        document.querySelector('#espesorcuerpo').style.color = 'rgb(156,0,6)';
    } else {
        document.querySelector('#espesorcuerpo').style.backgroundColor = 'rgb(198,239,206)';
        document.querySelector('#espesorcuerpo').style.color = 'rgb(0,97,0)';      
    }
}
