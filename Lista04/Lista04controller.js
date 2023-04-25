({
	myAction : function(component, event, helper) {
        var action = component.get("c.matCompra");
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                var returnData = response.getReturnValue();
                component.set("v.getList", returnData ) 
            }
        });
       	$A.enqueueAction(action)
	},
showToast: function( component, event, helper){
    var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "title":"Sucesso",
        "message": "Seu item foi adicionado com sucesso",
        "type": "success"
    });
    	toastEvent.fire();
    	$A.get('e.force:refreshView').fire();
} 
})
