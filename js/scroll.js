	
		(function () {
  let element = document.querySelector('.scroll-horizontal-container')
  element.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault()
      window.requestAnimationFrame(() => {
        element.scrollLeft += e.deltaY
      })
    }
  })
})()

		let scrEl = document.getElementById("scr-el")
scrEl.addEventListener('scroll', event => {
  let scrolled = (scrEl.scrollLeft / (scrEl.scrollWidth - scrEl.clientWidth) ) * 100
  document.getElementById("myBar").style.width = scrolled + "%"
});
