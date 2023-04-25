({
    handleRefresh : function(component, event, helper) {
        helper.loadAccounts(component);
    },

    handleSort : function(component, event, helper) {
        var sortBy = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        component.set("v.sortField", sortBy);
        component.set("v.sortOrder", sortDirection);
        helper.sortAccounts(component, sortBy, sortDirection);
    }
})
