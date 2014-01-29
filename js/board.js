(function () {
    var crosswordModule = angular.module("Crosswords", ['ngRoute']);

    crosswordModule.config(function ($routeProvider) {
        $routeProvider
            .when('/',
                {
                    controller: 'BoardController',
                    templateUrl: 'partials/board.html'
                })
            .otherwise({ redirectTo: '/' });
    });

    crosswordModule.controller("BoardController", function ($scope, $location) {
        $scope.board = [
            {
                index: 0, cells:
                       [{ solution: 'S' },
                        { solution: 'T' },
                        { solution: 'E' },
                        { solution: 'M' },
                        null,
                        { solution: 'I' },
                        { solution: 'L' },
                        { solution: 'K' },
                        { solution: 'S' },
                        null,
                        { solution: 'S' },
                        { solution: 'I' },
                        { solution: 'T' },
                        { solution: 'U' },
                        { solution: 'P' }]
            },
            {
                index: 1, cells: [
                        { solution: 'P' },
                        { solution: 'A' },
                        { solution: 'P' },
                        { solution: 'A' },
                        null,
                        { solution: 'N' },
                        { solution: 'O' },
                        { solution: 'A' },
                        { solution: 'H' },
                        null,
                        { solution: 'C' },
                        { solution: 'O' },
                        { solution: 'W' },
                        { solution: 'L' },
                        { solution: 'S' }]
            },
            {
                index: 2, cells: [
                        { solution: 'A' },
                        { solution: 'C' },
                        { solution: 'I' },
                        { solution: 'D' },
                        null,
                        { solution: 'F' },
                        { solution: 'O' },
                        { solution: 'R' },
                        { solution: 'A' },
                        null,
                        { solution: 'R' },
                        { solution: 'U' },
                        { solution: 'I' },
                        { solution: 'N' },
                        { solution: 'S' }]
            },
                {
                    index: 3, cells: [
                        { solution: 'S' },
                        { solution: 'O' },
                        { solution: 'C' },
                        { solution: 'C' },
                        { solution: 'E' },
                        { solution: 'R' },
                        { solution: 'M' },
                        { solution: 'A' },
                        { solution: 'M' },
                        { solution: 'B' },
                        { solution: 'O' },
                        null,
                        { solution: 'S' },
                        { solution: 'A' },
                        { solution: 'T' }]
                },
                {
                    index: 4, cells: [
                        null,
                        null,
                        null,
                        { solution: 'A' },
                        { solution: 'V' },
                        { solution: 'A' },
                        { solution: 'S' },
                        { solution: 'T' },
                        null,
                        { solution: 'A' },
                        { solution: 'L' },
                        { solution: 'O' },
                        { solution: 'T' },
                        null,
                        null]
                },
                {
                    index: 5, cells: [
                        { solution: 'S' },
                        { solution: 'A' },
                        { solution: 'P' },
                        { solution: 'P' },
                        { solution: 'E' },
                        { solution: 'R' },
                        null,
                        null,
                        { solution: 'S' },
                        { solution: 'P' },
                        { solution: 'L' },
                        { solution: 'I' },
                        { solution: 'T' },
                        { solution: 'U' },
                        { solution: 'P' }]
                },
                {
                    index: 6, cells: [
                        { solution: 'N' },
                        { solution: 'T' },
                        { solution: 'H' },
                        null,
                        { solution: 'R' },
                        { solution: 'E' },
                        { solution: 'A' },
                        { solution: 'C' },
                        { solution: 'H' },
                        null,
                        { solution: 'S' },
                        { solution: 'N' },
                        { solution: 'A' },
                        { solution: 'R' },
                        { solution: 'E' }]
                },
                {
                    index: 7, cells: [
                            { solution: 'A' },
                            { solution: 'E' },
                            { solution: 'O' },
                            { solution: 'N' },
                            null,
                            { solution: 'D' },
                            { solution: 'R' },
                            { solution: 'O' },
                            { solution: 'O' },
                            { solution: 'P' },
                            null,
                            { solution: 'K' },
                            { solution: 'E' },
                            { solution: 'G' },
                            { solution: 'S' }]
                },
                {
                    index: 8, cells: [
                            { solution: 'F' },
                            { solution: 'I' },
                            { solution: 'N' },
                            { solution: 'E' },
                            { solution: 'D' },
                            null,
                            { solution: 'C' },
                            { solution: 'L' },
                            { solution: 'E' },
                            { solution: 'A' },
                            { solution: 'R' },
                            null,
                            { solution: 'B' },
                            { solution: 'E' },
                            { solution: 'T' }]
                },
                {
                    index: 9, cells: [
                            { solution: 'U' },
                            { solution: 'N' },
                            { solution: 'E' },
                            { solution: 'A' },
                            { solution: 'R' },
                            { solution: 'T' },
                            { solution: 'H' },
                            null,
                            null,
                            { solution: 'R' },
                            { solution: 'I' },
                            { solution: 'G' },
                            { solution: 'O' },
                            { solution: 'R' },
                            { solution: 'S' }]
                },
                {
                    index: 10, cells: [
                            null,
                            null,
                            { solution: 'B' },
                            { solution: 'R' },
                            { solution: 'A' },
                            { solution: 'N' },
                            null,
                            { solution: 'D' },
                            { solution: 'I' },
                            { solution: 'A' },
                            { solution: 'N' },
                            { solution: 'A' },
                            null,
                            null,
                            null]
                },
                {
                    index: 11, cells: [
                            { solution: 'P' },
                            { solution: 'S' },
                            { solution: 'I' },
                            null,
                            { solution: 'S' },
                            { solution: 'T' },
                            { solution: 'R' },
                            { solution: 'U' },
                            { solution: 'C' },
                            { solution: 'K' },
                            { solution: 'D' },
                            { solution: 'U' },
                            { solution: 'M' },
                            { solution: 'B' },
                            { solution: 'O' }]
                },
                {
                    index: 12, cells: [
                            { solution: 'A' },
                            { solution: 'L' },
                            { solution: 'L' },
                            { solution: 'O' },
                            { solution: 'T' },
                            null,
                            { solution: 'O' },
                            { solution: 'B' },
                            { solution: 'O' },
                            { solution: 'E' },
                            null,
                            { solution: 'C' },
                            { solution: 'O' },
                            { solution: 'A' },
                            { solution: 'T' }]
                },
                {
                    index: 13, cells: [
                            { solution: 'R' },
                            { solution: 'A' },
                            { solution: 'B' },
                            { solution: 'B' },
                            { solution: 'I' },
                            null,
                            { solution: 'L' },
                            { solution: 'A' },
                            { solution: 'N' },
                            { solution: 'E' },
                            null,
                            { solution: 'H' },
                            { solution: 'A' },
                            { solution: 'R' },
                            { solution: 'T' }]
                },
                {
                    index: 14, cells: [
                          { solution: 'S' },
                          { solution: 'T' },
                          { solution: 'O' },
                          { solution: 'I' },
                          { solution: 'C' },
                          null,
                          { solution: 'L' },
                          { solution: 'I' },
                          { solution: 'S' },
                          { solution: 't' },
                          null,
                          { solution: 'O' },
                          { solution: 'N' },
                          { solution: 'T' },
                          { solution: 'O' }]
                    }
        ];
    });

})();

