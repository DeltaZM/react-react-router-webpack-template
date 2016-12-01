'use strict'
const routerMap = {
  childRoutes: [{
    path: '/',
    component: require('./App').default,
    indexRoute: {
      component: require('./pages/Home').default
    },
    childRoutes: [
      {
        path: 'about',
        getComponent (nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./pages/About').default)
          })
        }
      }
    ]
  }]
}
export default routerMap

