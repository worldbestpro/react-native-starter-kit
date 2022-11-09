import { equals } from 'ramda'

const SERVER_ENV = 'development' // SERVER_ENV = 'production', 'staging', 'development'
const configurations = {
  production: {
    // SERVER_URL: 'http://192.168.0.100:9920',
    SERVER_URL: 'https://api2.trippple.co',
    WEBSOCKET_URL: 'ws://ws.trippple.co',
    KEYCHAIN_NAMESPACE: 'http://api2.trippple.co',
    GOOGLE_MAPS_API_KEY: 'AIzaSyCqRsmlKQJmHmaHb52I9lhIAMqyZbeQrbA',
  },
  staging: {
    // SERVER_URL: 'http://192.168.0.100:9920',
    SERVER_URL: 'https://api-staging.trippple.co',
    WEBSOCKET_URL: 'ws://ws.trippple.co',
    KEYCHAIN_NAMESPACE: 'http://api-staging.trippple.co',
    GOOGLE_MAPS_API_KEY: 'AIzaSyCqRsmlKQJmHmaHb52I9lhIAMqyZbeQrbA',
  },
  development: {
    SERVER_URL: 'https://api-dev.trippple.co',
    WEBSOCKET_URL: 'ws://ws.trippple.co',
    KEYCHAIN_NAMESPACE: 'http://api-dev.trippple.co',
    GOOGLE_MAPS_API_KEY: 'AIzaSyCqRsmlKQJmHmaHb52I9lhIAMqyZbeQrbA',
  },
}
const glyphs = {
  ff: '⚢',
  mm: '⚣',
  mf: '⚤',
  fm: '⚤',
}
const algolia = {
  ALGOLIA_INDEX: '',
  ALGOLIA_FILTER: '',
}

if (equals(SERVER_ENV, 'production')) {
  algolia.ALGOLIA_INDEX = 'User'
  algolia.ALGOLIA_FILTER = 'User_by_popularity'
} else if (equals(SERVER_ENV, 'staging')) {
  algolia.ALGOLIA_INDEX = 'User-staging'
  algolia.ALGOLIA_FILTER = 'User_by_popularity-staging'
} else {
  algolia.ALGOLIA_INDEX = 'User-development'
  algolia.ALGOLIA_FILTER = 'User_by_popularity-development'
}

const setting = {
  ...configurations[SERVER_ENV],
  ...algolia,
  glyphs,
}

export default setting
