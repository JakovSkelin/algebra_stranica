var _TOKEN = localStorage.getItem("token");

if (_TOKEN.length > 20){
    document.getElementById('nastavni').style.display = 'block';
    document.getElementById('login').style.display = 'none';
}
else{
    document.getElementById('nastavni').style.display = 'none';
    document.getElementById('odjava').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}

function clearToken(){
    localStorage.removeItem("token");
    document.getElementById('odjava').style.display = 'none';
    _TOKEN = null;
}