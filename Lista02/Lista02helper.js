({
    loadAccounts : function(component) {
        var action = component.get("c.getAccounts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.accounts", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },

    sortAccounts : function(component, sortBy, sortDirection) {
        var accounts = component.get("v.accounts");
        var reverse = sortDirection !== 'asc';
        accounts.sort(this.sortBy(sortBy, reverse));
        component.set("v.accounts", accounts);
    },

    sortBy : function(field, reverse, primer) {
        var key = primer
            ? function(x) { return primer(x[field]); }
            : function(x) { return x[field]; };
        reverse = !reverse ? 1 : -1;
        return function(a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        };
    }
})
