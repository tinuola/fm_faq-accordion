const faqGroup = document.querySelectorAll('.faq__wrapper')
// console.log(faqGroup)

const iconGroup = document.querySelectorAll('.faq__wrapper img')

const questionGroup = document.querySelectorAll('.faq--question')

const answerGroup = document.querySelectorAll('.faq--answer')


faqGroup.forEach((faq, idx) => {
  // console.log(faq)
  faq.addEventListener('click', function(){
    // console.log(iconGroup[idx])
    let icon = iconGroup[idx]
    let question = questionGroup[idx]
    let answer = answerGroup[idx]

    icon.classList.toggle('rotate')
    question.classList.toggle('active')
    answer.classList.toggle('show')

  })
})