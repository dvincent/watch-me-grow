'use strict';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('result', {
      url: 'result/:childId/:ageId',
      views: {
        '': {
          template: require('./result.html'),
          controller: 'ResultController',
          controllerAs: 'result'
        },
        'tabs@root': {
          template: require('./result-tabs.html'),
          controller: 'ResultController',
          controllerAs: 'result'
        }
      },
      parent: 'root',
      data: {
        title: 'Answers'
      }
    });
}