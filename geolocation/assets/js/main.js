const bannerButton = document.querySelector('.bannerButton')
const bannerExpanded = document.querySelector('.bannerExpanded')
const iframeMap = document.querySelector('.iframeMap')

const openMap = () => { 
	bannerButton.classList.add('remove')
	bannerExpanded.classList.add('visible')
	iframeMap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2354.0967780963083!2d-34.87757347537979!3d-7.114051608773653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace7efed034e6d%3A0xba338927564cdbc4!2sParque%20Zoobot%C3%A2nico%20Arruda%20C%C3%A2mara%20(Bica)!5e0!3m2!1spt-BR!2sbr!4v1572377505370!5m2!1spt-BR!2sbr'; 
}

const callToAction = () => {
	const url = 'https://zygon.digital/'

	return window.open(url)
}