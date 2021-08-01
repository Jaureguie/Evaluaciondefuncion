function Resolver()
{
    if ($('#Inicio').val().length == 0||$('#Fin').val().length == 0||$('#Incremento').val().length == 0) {
        alert('Ingrese todos los valores');
        return false;
      }
    $(id=".button2").show();
    const Eti = document.forms['Eti'];
    let inicio = Eti['Inicio'].value;
    let final = Eti['Fin'].value;
    let incremento = Eti['Incremento'].value;
    let texto = '<table class="table table-striped">';

    inicio = parseFloat(inicio);
    final = parseFloat(final);
    incremento = parseFloat(incremento);

    for(let i=inicio; i<=final; i += incremento)
    {
        texto += "<tr>";
        texto += "<td>f(" + i +  ")</td>";
        texto += "<td>"+calcularRes(i)+"</td>";
        texto += "</tr>";
    }

    texto += "</table>"; 
    document.getElementById('valores').innerHTML = texto;
    
    $(id="#valores").show();
}

function calcularRes(x)
{
     return Math.sin((7*x) - 5);
}