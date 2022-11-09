jest.mock('seamless-immutable', () => {
  return {
    // because of the way `react-native-fbsdk` is built, we need a default export.
    default: () => jest.fn().mockReturnValue(Promise.resolve()),
  }
})
