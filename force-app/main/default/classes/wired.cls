public with sharing class wired {
    public wired() {

    }
    @AuraEnabled(Cacheable =true)
    public static List<Case> getCases() {
        List<Case> caseList=[Select Id, Subject, Description, Status, Origin From Case];
        return caseList;
    }
}
