
angular.module('fgtApp', [
    'bucketGroupModule'
])

.controller('fgtAppController', function() {


    this.goals = [
        {
            name: 'vacation',
            description: 'winter south trip',
            target: 3000
        }, {
            name: 'tv',
            description: 'new tv for the basement so we can put th other tv upstairs',
            target: 1500
        }
    ];

    this.accounts = [
        {
            name: 'fun',
            balance: 1000
        }
    ];

    this.buckets = [
        {
            name: 'fun stuff',
            balance: 1000,
            records: [{
                amount: 1000,
                description: 'initial deposit'
            }],
            account: this.accounts[0]
        }
    ];





    this.data = {
        bla: 1
    };


});