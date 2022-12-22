const months = {
	january: 'Jan',
	february: 'Feb',
	march: 'Mar',
	april: 'Apr',	
	may: 'May',
	june: 'Jun',
	july: 'Jul',
	august: 'Aug',
	setember: 'Set',
	october: 'Oct',
	november: 'Nov',
	december: 'Dec'
}

const countDownDate = new Date(`${months.december} 31, 2022 21:28:00`).getTime();

const countdownExecute = setInterval(() => {
  const currentDate = new Date().getTime();
  const distance = countDownDate - currentDate;
    
  const daysMiliseconds = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hoursMiliseconds = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesMiliseconds = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secondsMiliseconds = Math.floor((distance % (1000 * 60)) / 1000);

  const numberOfDays = document.querySelector('#days')
  const numberOfHours = document.querySelector('#hours')
  const numberOfMinutes = document.querySelector('#minutes')
  const numberOfSeconds = document.querySelector('#seconds')

  const countdownLabel = document.querySelector('#countdownLabel')
  const daysLabel = document.querySelector('#daysLabel')
  const hoursLabel = document.querySelector('#hoursLabel')
  const minutesLabel = document.querySelector('#minutesLabel')
  const secondsLabel = document.querySelector('#secondsLabel')

  numberOfDays.innerHTML = daysMiliseconds
  numberOfHours.innerHTML = hoursMiliseconds
  numberOfMinutes.innerHTML = minutesMiliseconds
  numberOfSeconds.innerHTML = secondsMiliseconds

  if(daysMiliseconds <= 1) {
	countdownLabel.innerHTML = 'FALTA'
	daysLabel.innerHTML = 'Dia'
  }
  if(hoursMiliseconds <= 1) {
	hoursLabel.innerHTML = 'Hora'
  }
  if(minutesMiliseconds <= 1) {
	minutesLabel.innerHTML = 'Minuto'
  }
  if(secondsMiliseconds <= 1) {
	secondsLabel.innerHTML = 'Segundo'
  }

  if (distance <= 0) {
    clearInterval(countdownExecute);

	countdownLabel.innerHTML = 'ACABOU!'
	numberOfDays.innerHTML = '00'
	numberOfHours.innerHTML = '00'
	numberOfMinutes.innerHTML = '00'
	numberOfSeconds.innerHTML = '00'
  }
}, 1000);

const callToAction = () => {
	return window.open('https://zygon.digital/')
}