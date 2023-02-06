const bannerButton = document.querySelector('.bannerButton')
const bannerExpanded = document.querySelector('.bannerExpanded')
const iframeMap = document.querySelector('.iframeMap')

const openMap = () => { 
	bannerButton.classList.add('remove')
	bannerExpanded.classList.add('visible')
	iframeMap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9061358392137!2d-38.457439684564804!3d-12.9778550634526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71616510cac211f%3A0xd5a41097a534a48b!2sSalvador%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1673915480465!5m2!1spt-BR!2sbr'; 
}

const callToAction = () => {
	const url = 'https://zygon.digital/'

	return window.open(url)
}