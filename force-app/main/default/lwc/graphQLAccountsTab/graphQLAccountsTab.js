import { LightningElement, api } from 'lwc';


export default class GraphQLAccountsTab extends LightningElement {

    @api accounts;

    get hasData() { return this.accounts && this.accounts.length > 0; }

    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Best Friend', fieldName: 'BestAccountFriendName' },
        { label: 'Revenue', fieldName: 'AnnualRevenue', type: 'currency' },
        { label: 'Source', fieldName: 'AccountSource' },
        { label: 'Active', fieldName: 'Active__c', type: 'checkbox' },
        { label: 'Owner', fieldName: 'OwnerName' }
    ];

}