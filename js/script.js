const faqGroup = document.querySelectorAll('.faq__wrapper')

const iconGroup = document.querySelectorAll('.faq-arrow')

const questionGroup = document.querySelectorAll('.faq--question')

const answerGroup = document.querySelectorAll('.faq--answer')


const revealFaq = index => {
  let icon = iconGroup[index]
  let question = questionGroup[index]
  let answer = answerGroup[index]

  icon.classList.toggle('rotate')
  question.classList.toggle('active')
  answer.classList.toggle('show')
}


faqGroup.forEach((faq, idx) => {
  faq.addEventListener('click', function(){
    revealFaq(idx)
  })
})