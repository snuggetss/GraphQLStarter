import { LightningElement, wire } from 'lwc';

export default class GraphQLDemo extends LightningElement {

    searchKey = '';
    isLoading = true;
    errors;

    accounts;
    contacts;

    get errorMsg() { return this.errors ? JSON.stringify(this.errors) : null; }

    handleSearchKeyChange(e) {
        this.searchKey = e.detail.value;
    }

    refresh(e) {
        // TODO: refresh graphql data
    }

    // TODO: Implement graphql wire

}