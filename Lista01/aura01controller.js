({
    showToast: function( component, event, helper){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title":"Sucesso",
            "message": "Seu lead foi criado!",
            "type": "success"
        });
            toastEvent.fire();
            $A.get('e.force:refreshView').fire();
    } 
    })
