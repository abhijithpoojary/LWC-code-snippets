public with sharing class accountController {
        @AuraEnabled(cacheable=true)
        public static List<account>  getAccountList(){
            return [SELECT Id, Name,Phone,Industry FROM Account order by createddate desc LIMIT 5];
        }
    @AuraEnabled
    public static void updateAccount(String recordId){
        try {
            Account accRecord = new Account(Id = recordId);
            accRecord.Industry='Education';
            update accRecord;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
            
        }
    }
}
