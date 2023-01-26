const scrollCircle = document.getElementById('scroll-circle');

let scrollCounter = 0

window.addEventListener('wheel', (e) => {
    console.log(e.deltaY > 0);
    console.log(scrollCounter)

    scrollCounter = e.deltaY > 0 ? scrollCounter+=1 : scrollCounter-=1
    console.log(scrollCounter)

    scrollCounter = scrollCounter < 0 ? 0 : scrollCounter
    scrollCounter = scrollCounter > 6 ? 6 : scrollCounter
    console.log(scrollCounter)

    scrollCircle.classList = 'scroll-circle scroll-circle-set' + scrollCounter;
})
