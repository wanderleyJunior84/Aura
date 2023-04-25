public class classexer3 {
    @AuraEnabled
    public static list<account> getlistacc(){
        return [select Name, Estagio__c, Rating from account where Rating like 'Hot'];
  }
}
