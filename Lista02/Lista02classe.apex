public class OpportunityC {
    @AuraEnabled
    public static List<Opportunity> getOpportunitiesNR(){
        return[
            SELECT Name, Amount, StageName, closeDate
            FROM opportunity
            where stageName = 'Negotiation/Review'
            ORDER BY createdDate desc
            Limit 5
        ];
    }
}
