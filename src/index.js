import moment from 'moment'
import '~~/style.css'
import Logo from '~/assets/logo.png'

function component() {
  const element = document.createElement('div')

  element.classList.add('container')

  const logo = new Image()
  logo.src = Logo
  element.appendChild(logo)

  const header1 = document.createElement('h1')
  header1.innerHTML = 'Javascript Boilerplate'
  element.appendChild(header1)

  const header2 = document.createElement('h2')
  header2.innerHTML = 'Created By <strong>Markas Kvitka</strong>'
  element.appendChild(header2)

  const header3 = document.createElement('h3')
  setInterval(function () {
    header3.innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
  }, 1000)
  element.appendChild(header3)

  return element
}

document.body.appendChild(component())