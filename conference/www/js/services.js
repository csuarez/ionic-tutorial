'use strict';

angular.module('starter.services', ['ngResource'])
.factory('Session', function($resource) {
  return $resource('http://192.168.1.133:5000/sessions/:sessionId')
});
