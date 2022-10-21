// Defino valor de ticket
const valorTicket = 200;

// Defino porcentajes de descuento según categoría
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

// Elementos en variables
let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let email            = document.getElementById("email");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoriaSelect       = document.getElementById("categoriaSelect");

function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control,.form-select");
    let i;
    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}
function total_a_pagar()
{

    if(nombre.value==="")
    {
        alert("Escribir nombre...");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return ;
    }

    if(apellido.value==="")
    {
        alert("Escribir apellido...");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return ;
    }

    if(email.value==="")
    {
        alert("Escribir email...");
        email.classList.add("is-invalid");
        email.focus();
        return ;
    }

     // Para determinar si el correo electrónico es válido o no
     const emailValido = mail => 
     {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
     }

     if(!emailValido(email.value))
     {
        alert("Escribir bien el mail...");
        email.classList.add("is-invalid");
        email.focus();
        return ;
     }

    if( (cantidadTickets.value<=0) || (isNaN(cantidadTickets.value)))
    {
        alert("Escribir cantidad...");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return ;
    }

    if(categoriaSelect.value==="")
    {
        alert("Poner Categoria...");
        categoriaSelect.classList.add("is-invalid");
        categoriaSelect.focus();
        return ;
    }


    //multiplico total * entradas

    let totalValorTickets=(cantidadTickets.value)*valorTicket;

    if(categoriaSelect.value==0)
    {
        totalValorTickets=totalValorTickets;
    }
    if(categoriaSelect.value==1)
    {
        totalValorTickets=totalValorTickets-(descuentoEstudiante/100*totalValorTickets);
    }
    if(categoriaSelect.value==2)
    {
        totalValorTickets=totalValorTickets-(descuentoTrainee/100*totalValorTickets);
    }
    if(categoriaSelect.value==3)
    {
        totalValorTickets=totalValorTickets-(descuentoJunior/100*totalValorTickets);
    }
    totalPago.innerHTML=totalValorTickets;
}



//boton resumen.
btnResumen.addEventListener("click",total_a_pagar);

//Desarrollo funcion 
function reset_total_a_pagar()
{
    quitarClaseError();
    totalPago.innerHTML="";
}

//boton borrar.
btnBorrar.addEventListener("click",reset_total_a_pagar);