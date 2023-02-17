import dayIcon from '../img/dayIcon.png'
import nightIcon from '../img/nightIcon.png'

export const getCurrentHour = () => {
  const timeStamp = Date.now() * 1000
  const date = new Date()
  const currentHour = date.getHours(timeStamp)

  if (currentHour > 6 && currentHour < 18) {
    if (currentHour > 6 && currentHour < 12) {
      return { weatherIcon: dayIcon, phrase: 'Good morning' }
    } else {
      return { weatherIcon: dayIcon, phrase: 'Good afternoon' }
    }
  } else {
    return { weatherIcon: nightIcon, phrase: 'Good night' }
  }
}
