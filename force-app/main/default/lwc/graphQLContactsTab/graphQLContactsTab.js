import { LightningElement, api } from 'lwc';

export default class GraphQLContactsTab extends LightningElement {

    @api contacts;

    get hasData() { return this.contacts && this.contacts.length > 0; }

    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Account', fieldName: 'AccountName' }
    ];

}