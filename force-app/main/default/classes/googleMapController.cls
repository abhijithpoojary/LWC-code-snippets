public with sharing class googleMapController {
    @AuraEnabled (cacheable=true)
    public static List<Account> getAccountList(){
        List<Account> accountList = new List<Account>();
        try{
            accountList = [SELECT Id, Name,	ShippingStreet, ShippingCity, ShippingPostalCode, ShippingCountry, ShippingState, Description  FROM Account LIMIT 10];
        } catch(System.Exception e){
            throw new AuraHandledException(e.getMessage());
        }
        return accountList;
    } 
}