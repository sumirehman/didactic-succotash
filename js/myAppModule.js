// JavaScript source code
(function () {
    var myAppModule = angular.module('myAppModule', []);

    myAppModule.controller('MyFilterDemoControl', function ($scope) {
        var someData = {
            firstName: 'JENNA',
            surname: 'GRANT',
            dateJoined: new Date(2010, 2, 23),
            consumption: 123.659855,
            plan: 'super-basic-plan',
            // Last 12 months of data usage
            monthlyUsageHistory:
            [123.659855,
            89.645222,
            97.235644,
            129.555555,
            188.699855,
            65.652545,
            123.659855,
            89.645222,
            97.235644,
            129.555555,
            188.699855,
            65.652545]
        };

        $scope.data = someData;
    });


    myAppModule.filter('stripDashes', function () {
        return function (txt) {
            return txt.bold();
        };
    });


    myAppModule.filter('toTitleCase', function () {
        return function (txt) {
            return txt.replace(/\w\S*/g,toTitleCase(txt));
        };
    });

    function toTitleCase(str) {
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    }

})();