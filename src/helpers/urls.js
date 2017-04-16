import { urls } from '../constants'

class Urls {
  url = command => {
    return urls[command] || this._fallback(command)
  };

  _fallback = command => {
    return `https://duckduckgo.com/?q=${command}+documentation&t=h_&ia=web`
  };
}

export default new Urls()
