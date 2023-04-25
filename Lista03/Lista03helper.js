({
	getAccounts : function(component) {
        let action = component.get("c.getlistacc");
action.setCallback(this, function(response){
            let state = response.getState();
            console.log(state);
            if(state =="SUCCESS"){
                component.set("v.accs", response.getReturnValue());
                console.log(response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
      }
})
