const articlId = getArticleId()

function getArticleId() {
  return new URL(location.href).searchParams.get("id")
}

fetch('lol.json')
.then(response => response.json())
.then(data => {
  const firstData = data[articlId -1];

  document.querySelector('.img').innerHTML = `<img src=${firstData.image} alt=${firstData.alt}>`
  document.querySelector('.h2').innerHTML = firstData.name
  document.querySelector('.price').innerHTML = firstData.price
  document.querySelector('.dispoGrey').innerHTML = firstData.disponibilite
})

  


