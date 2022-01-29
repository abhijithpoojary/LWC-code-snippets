public with sharing class CaseController {
    public CaseController() {

    }
    @AuraEnabled(cacheable = true)
    public static List<Case> getAllCases(String Subject) {
        String  key = '%' +subject+ '%';
        List<Case> caseList = [Select  Id, Subject,  Description, Status, Origin FROM Case Where Subject like :key];
        return caseList;
    }
    
}
