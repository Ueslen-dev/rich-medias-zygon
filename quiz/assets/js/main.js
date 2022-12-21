let index = 1
let currentQuiz = `quiz${index}`

const quizs = {
    quiz1: [
        {
            id: 1,
            isCorrectAnswer: false,
        },
        {
            id: 2,
            isCorrectAnswer: false,
        },
        {
            id: 3,
            isCorrectAnswer: true,
        }
    ],
    quiz2: [
        {
            id: 1,
            isCorrectAnswer: false,
        },
        {
            id: 2,
            isCorrectAnswer: true,
        },
        {
            id: 3,
            isCorrectAnswer: false,
        }
    ]
}

const handleQuiz = (id) => {
    const currentButtonResponse = document.getElementById(`response${id}`)
    const banner = document.getElementById('banner')
    const buttonsGroup = document.getElementById('buttonsGroup')

    const findCorrectAnswer = quizs[currentQuiz]?.find((quiz) => {
        return quiz.id === id
    }).isCorrectAnswer

    if(!findCorrectAnswer) {
      currentButtonResponse.classList.add('wrongAnswer', 'animate__animated', 'animate__shakeX')
        return setTimeout(() => {
            currentButtonResponse.classList.remove('wrongAnswer', 'animate__animated', 'animate__shakeX')
        }, 500)
    }

    index = index + 1
    currentQuiz = `quiz${index}`

    if(!quizs[currentQuiz]) { 
      buttonsGroup.classList.add('remove')

      return banner.setAttribute('src', `./assets/img/final.png`)
    }

    banner.setAttribute('src', `./assets/img/img${index}.png`)
    banner.classList.add('animate__animated', 'animate__flipInX')
}