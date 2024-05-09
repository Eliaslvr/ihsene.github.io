function fetchElement() {
    fetch('lol.json')
    .then(response => response.json())
    .then(data => {
        for(let affiche of data) {
            const firstBlockParfum = document.querySelector('.firstBlockParfum');
            firstBlockParfum.innerHTML += `
            <a href='./info.html?id=${affiche._id}'>
                <span class='elementId' data-id='${affiche._id}'>
                    <img src=${affiche.image} alt=${affiche.alt} />
                    <h2>${affiche.detail}</h2>
                    <p class="name">${affiche.name}</p>
                    <p class="price">${affiche.price}</p>
                </span>
            </a>`
        }
    })

}

fetchElement()

// async function idElement() {
//     await fetchElement();

//     document.querySelector('.firstBlockParfum').addEventListener('click', (e) => {  
//         e.preventDefault();
//         window.location.href = `info.html`
//     })
// }

// idElement()