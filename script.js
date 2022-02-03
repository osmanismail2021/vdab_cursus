window.onload = function() {
    var eTitle = document.getElementById("kop")
    eTitle.innerHTML = "De Document Tree";
}

var eBallen = document.getElementsByTagName('li');
var nAntaal = eBallen.length;
var tweedeItem = eBallen[1];
tweedeItem.removeChild(tweedeItem.childNodes[0]);

var sTekst = document.createTextNode('C#');
tweedeItem.appendChild(sTekst)

var eLijst = document.getElementsByTagName('ul')[0];
var eItem = document.createElement('li');
var eTekst = document.createTextNode('Perl');
eItem.appendChild(eTekst);
eLijst.appendChild(eItem);
