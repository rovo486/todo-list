export const module1 = {
  state: {
    module1Value: 'Module 1'
  },
  getters: {
    module1ValueWithHello(state, getters, rootState) {
      console.log('md1 state', state)
      console.log('md1 rootState', rootState)
      return 'Hello, ' + state.module1Value;
    }
  },
  mutations: {
    setModule1Value(state, value) {
      state.module1Value = value;
    }
  },
  actions: {
    setModule1Value(context, value) {
      console.log('md1 context', context)
      context.commit('setModule1Value', value)
    }
  },
  // namespaced: true
}