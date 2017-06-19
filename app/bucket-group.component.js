
angular.module('bucketGroupModule', [])

.component('bucketGroup', {
    controller: function() {

        this.$onInit = function() {
            this.total = this.account.balance;
        };

    },
    templateUrl: './bucket-group.template.html',
    bindings: {
        account: '<'
    }
});
