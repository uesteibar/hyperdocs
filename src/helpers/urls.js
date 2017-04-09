import { urls } from '../constants'

class Urls {
  url = (command) => {
    const cleanCommand = command.replace(/[^0-9a-z]/gi, '')
    return urls[cleanCommand]
  }
}

export default (new Urls)
