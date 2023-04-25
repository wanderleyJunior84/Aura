public class classex4 {
    @AuraEnabled
    public static list<Lista_Produtos__c> matCompra(){
        return [select Name,Produto__c, Valor__c, Quantidade__c From Lista_Produtos__c];
    }
}
