const removeInitialFrame = () => {
 const initialFrame = document.querySelector('.initialFrame')

 setTimeout(() => {
    initialFrame.classList.add('remove')
 }, 2000)
}

const handlePoint = (id) => {
    const points = document.querySelectorAll('.badge')
    const currentPoint = document.querySelector(`#badge${id}`)
    
    for (const point of points) {
        point.classList.add('animate__animated', 'animate__fadeOutDown')
    }

    currentPoint.classList.remove('animate__fadeOutDown', 'animate__delay-3s')
    currentPoint.classList.add('visible')
}

removeInitialFrame()
