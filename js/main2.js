const api_url = 'http://mezz.ir/phoenix/api/App/read_single.php?app=2Date%20Dating%20App,%20Love%20and%20matching' ;
async function getISS(){
    const response = await fetch(api_url);
    const data = await response.json();
    const {app, installs, category, rating, reviews, type, price, android_ver, current_ver, last_updated, genres} = data ;
    document.getElementById('app').textContent = app;
    document.getElementById('category').textContent = category;
    document.getElementById('rating').textContent = rating;
    document.getElementById('reviews').textContent = reviews;
    document.getElementById('type').textContent = type;
    document.getElementById('price').textContent =price;
    document.getElementById('android_ver').textContent =android_ver;
    document.getElementById('current_ver').textContent =current_ver;
    document.getElementById('last_updated').textContent =last_updated;
    document.getElementById('installs').textContent = installs;
    document.getElementById('genres').textContent = genres232323232323;

}

getISS(); 


