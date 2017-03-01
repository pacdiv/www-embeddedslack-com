export const HOMEPAGE_SWITCHING_CODE = 'HOMEPAGE_SWITCHING_CODE'
export const HOMEPAGE_SWITCHED_CODE_TO_DOM = 'HOMEPAGE_SWITCHED_CODE_TO_DOM'
export const HOMEPAGE_SWITCHED_CODE_TO_REACT = 'HOMEPAGE_SWITCHED_CODE_TO_REACT'

export function homepageSwitchCode(code) {
  if (code !== 'DOM' && code !== 'React') {
    code = false
  }

  return {
    type: HOMEPAGE_SWITCHING_CODE,
    value: code
  }
}

export function homepageSwitchedCodeToDOM() {
  return {
    type: HOMEPAGE_SWITCHED_CODE_TO_DOM
  }
}

export function homepageSwitchedCodeToReact() {
  return {
    type: HOMEPAGE_SWITCHED_CODE_TO_REACT
  }
}
