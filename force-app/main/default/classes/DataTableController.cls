public with sharing class DataTableController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        List<Contact> contactList = new List<Contact>();
        try {
            contactList = [SELECT Id, Name, Title, Phone, Email, AccountId, Account.Name FROM Contact LIMIT 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return contactList;
    }
}
