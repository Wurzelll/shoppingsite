
const row = document.querySelector('#row')

async function getData() {

    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
}

getData()
    .then(data => {
        console.log(data)

        // for (let i = 0; i < data.lenght; i++) {
        //         console.log(data[i].title)
        // }

        let sepet = []

        data.forEach((urun) => {
            console.log(urun)

            // Card yapısını oluşturmaya başlıyoruz.
            const col_3 = document.createElement('div')
            col_3.classList.add('col-3')

            const card = document.createElement('div')
            card.className = 'card'
            card.style.width = '18rem'
            // card.style.height = "600px"

            const imgDiv = document.createElement('div')
            imgDiv.style.width = "100%"
            imgDiv.style.height = "100%"

            const img = document.createElement('img')
            img.setAttribute('class', 'card-img-top')
            img.src = urun.image

            const cardBody = document.createElement('div')
            cardBody.classList.add('card-body')

            const cardTitle = document.createElement('h5')
            cardTitle.classList.add('card-title')
            cardTitle.innerHTML = urun.title

            const cardText = document.createElement('p')
            cardText.classList.add('card-text')
            let content = `${urun.discription} - price: ${urun.price}`
            cardText.innerHTML = content

            const btn = document.createElement('a')
            btn.setAttribute('class', 'btn btn-success')
            btn.textContent = 'Add to Cart'


            btn.addEventListener('click', () => {
                console.log(urun)
                sepet.push(urun)
                console.log(sepet)

                let sepetJSON = JSON.stringify(sepet)
                localStorage.setItem('sepet', sepetJSON)


            })

            cardBody.appendChild(cardTitle)
            cardBody.appendChild(cardText)
            cardBody.appendChild(btn)

            imgDiv.appendChild(img)

            card.appendChild(img)
            card.appendChild(cardBody)

            col_3.appendChild(card)

            row.appendChild(col_3)

        })


    })


    // localStorage.clear()