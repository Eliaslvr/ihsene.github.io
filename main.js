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
                    <div class='blockInfo'>
                        <h2 class='h2size'>${affiche.name}</h2>
                        <p class="name">${affiche.detail}</p>
                        <p class="price">${affiche.price}</p>
                    </div>
                </span>
            </a>`
        }
    })

}

fetchElement()
