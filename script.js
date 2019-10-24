
// In terminal, type
// $ node
// > (async (a = 1, ...b) => ({...b, a, [a]: `${a}` }))()

// util.promisify

// require('fs").promises

// If it results like the following, it is a current version of node
// Promise {
//   { '1': '1', a: 1 },
//   domain:
//    Domain {
//      domain: null,
//      _events:
//       [Object: null prototype] {
//         removeListener: [Function: updateExceptionCapture],
//         newListener: [Function: updateExceptionCapture],
//         error: [Function: debugDomainError] },
//      _eventsCount: 3,
//      _maxListeners: undefined,
//      members: [] } }