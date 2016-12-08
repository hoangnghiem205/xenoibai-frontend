'use strict';

angular.module('myApp.sequence', [])

    .directive('sequence', function ($location) {
        return {
            restrict: "E",
            templateUrl: './components/sequence/sequence.html',
            link: function (scope, elm, attrs) {
                var options = {
                    nextButton: true,
                    prevButton: true,
                    preloader: true,
                    navigationSkipThreshold: 1000,
                    fadeFrameWhenSkipped: false
                };
                var sequence = $("#sequence").sequence(options).data("sequence");

                sequence.afterLoaded = function () {
                    $(".prev, .next").fadeIn(500);
                }
            }
        }
    });