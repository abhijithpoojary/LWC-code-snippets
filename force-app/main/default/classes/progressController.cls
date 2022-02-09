public with sharing class progressController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount() {
      return [
           SELECT Name, AccountNumber, ShippingCity, ShippingCountry, ShippingPostalCode, ShippingState, 
           ShippingStreet
           FROM Account
           WITH SECURITY_ENFORCED
           ORDER BY Name
       ];
       
   }
}
