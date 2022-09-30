const Tour = () => {

    let tourMap = document.querySelector('.tour__map')
    let tourMapWidth = tourMap.clientWidth
    let tourMapHeight = tourMap.clientHeight

    let tourFilters = document.querySelectorAll(".tour__filters a");

    for (let i = 0; i <= 24; i++) {
        let tourPoint = document.createElement('div')
        tourPoint.classList.add('tour__map-item')

        let leftPosition = Math.floor(Math.random() * tourMapHeight) + 1;
        let topPosition = Math.floor(Math.random() * tourMapWidth) + 1;
        let id = Math.floor(Math.random() * 5) + 1;

        tourPoint.style.left = parseInt(leftPosition) + 'px';
        tourPoint.style.top = parseInt(leftPosition) + 'px';
        tourPoint.dataset.category = id
        tourMap.appendChild(tourPoint)
    }

    tourFilters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault()

            let mapPointCategory = e.currentTarget.dataset.category;
            let allMapPoints = document.querySelectorAll(".tour .tour__map-item[data-category]");
            let allArticles = document.querySelectorAll(".news .news__article[data-category]");

            const allElements = [...allMapPoints, ...allArticles]
            let allElementsFiltered = allElements.filter(item =>  item.dataset.category != mapPointCategory)

            allElements.forEach((point) => {
              point.classList.remove("hidden");
            });            
           

            if(mapPointCategory != 0) {                              
                allElementsFiltered.forEach((point) => {
                  point.classList.add("hidden");
                });            
            }
            
            swiper.init();
        })
    });

};

module.exports = Tour;