var tresc_diva = [];

function refresh()
{
    var calyChat = "";
    for(var i = 0; i < tresc_diva.length; i++)
    {
        calyChat += tresc_diva[i];
    }
    document.getElementById("chat").innerHTML = tresc_diva.join('');
    
}

function submit()
{
    tresc_diva.unshift('<div class="log">' + document.getElementById("message").value + '</div>');
    tresc_diva.unshift('<div style="clear: both;"></div>');
    document.getElementById("message").value = "";
    // document.getElementById("chat").innerHTML = document.getElementById("message").value
    refresh();
    console.log(tresc_diva);
}