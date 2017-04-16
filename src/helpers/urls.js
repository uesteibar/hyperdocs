import { urls } from '../constants'

class Urls {
  url = command => {
    const cleanCommand = command.replace(/[^0-9a-z]/gi, '')
    return urls[cleanCommand] || this._fallback(cleanCommand)
  };

  _fallback = command => {
    return `https://duckduckgo.com/?q=${command}+documentation&t=h_&ia=web`
  };
}

export default new Urls()
