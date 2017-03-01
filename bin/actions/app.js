export const DOCUMENTATION_LOADING = 'DOCUMENTATION_LOADING'
export const DOCUMENTATION_LOADED = 'DOCUMENTATION_LOADED'
export const HOMEPAGE_LOADED = 'HOMEPAGE_LOADED'
export const HOMEPAGE_LOADING = 'HOMEPAGE_LOADING'
export const NOMATCH_LOADED = 'NOMATCH_LOADED'
export const NOMATCH_LOADING = 'NOMATCH_LOADING'

export function documentationLoading() {
  return {
    type: DOCUMENTATION_LOADING
  }
}

export function documentationLoaded() {
  return {
    type: DOCUMENTATION_LOADED
  }
}

export function homepageLoaded() {
  return {
    type: HOMEPAGE_LOADED
  }
}

export function homepageLoading() {
  return {
    type: HOMEPAGE_LOADING
  }
}

export function noMatchLoaded() {
  return {
    type: NOMATCH_LOADED
  }
}

export function noMatchLoading() {
  return {
    type: NOMATCH_LOADING
  }
}
