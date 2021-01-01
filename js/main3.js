const api_url2 = 'http://localhost:8080/rest_api/api/App/most_points.php';
async function getISS2() {
    const response = await fetch(api_url2);
    const data = await response.json();

    const html = data.map(user => {
        return `<div class="user"<p> ${user.app} </p>
                </div>`;
    }).join("");
    console.log(html);
    document.getElementById('app1').insertAdjacentHTML("afterbegin", html)

}

getISS2();


