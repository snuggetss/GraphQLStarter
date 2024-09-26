

describe('c-graph-ql-utils', () => {
    
    it('tests the parsing of simple gql query results with datatablemode ON', () => {
        const json = '{"uiapi":{"query":{"Account":{"edges":[{"node":{"Id":"001ak00000MoLURAA3","Name":{"value":"Edge Communications"}}},{"node":{"Id":"001ak00000MoLUSAA3","Name":{"value":"Burlington Textiles Corp of America"}}},{"node":{"Id":"001ak00000MoLUTAA3","Name":{"value":"Pyramid Construction Inc."}}},{"node":{"Id":"001ak00000MoLUUAA3","Name":{"value":"Dickenson plc"}}},{"node":{"Id":"001ak00000MoLUVAA3","Name":{"value":"Grand Hotels & Resorts Ltd"}}},{"node":{"Id":"001ak00000MoLUWAA3","Name":{"value":"United Oil & Gas Corp."}}},{"node":{"Id":"001ak00000MoLUXAA3","Name":{"value":"Express Logistics and Transport"}}},{"node":{"Id":"001ak00000MoLUYAA3","Name":{"value":"University of Arizona"}}},{"node":{"Id":"001ak00000MoLUZAA3","Name":{"value":"United Oil & Gas, UK"}}},{"node":{"Id":"001ak00000MoLUaAAN","Name":{"value":"United Oil & Gas, Singapore"}}}]}}}}';
        const gqlResult = JSON.parse(json);

        const res = parseQuery(gqlResult.uiapi.query, true);
        
        
        expect(res.Account[0].Id).toBe('001ak00000MoLURAA3');
        expect(res.Account[0].Name).toBe('Edge Communications');
    });

    it('tests the parsing of simple gql query results with datatablemode OFF', () => {
        const json = '{"uiapi":{"query":{"Account":{"edges":[{"node":{"Id":"001ak00000MoLURAA3","Name":{"value":"Edge Communications"}}},{"node":{"Id":"001ak00000MoLUSAA3","Name":{"value":"Burlington Textiles Corp of America"}}},{"node":{"Id":"001ak00000MoLUTAA3","Name":{"value":"Pyramid Construction Inc."}}},{"node":{"Id":"001ak00000MoLUUAA3","Name":{"value":"Dickenson plc"}}},{"node":{"Id":"001ak00000MoLUVAA3","Name":{"value":"Grand Hotels & Resorts Ltd"}}},{"node":{"Id":"001ak00000MoLUWAA3","Name":{"value":"United Oil & Gas Corp."}}},{"node":{"Id":"001ak00000MoLUXAA3","Name":{"value":"Express Logistics and Transport"}}},{"node":{"Id":"001ak00000MoLUYAA3","Name":{"value":"University of Arizona"}}},{"node":{"Id":"001ak00000MoLUZAA3","Name":{"value":"United Oil & Gas, UK"}}},{"node":{"Id":"001ak00000MoLUaAAN","Name":{"value":"United Oil & Gas, Singapore"}}}]}}}}';
        const gqlResult = JSON.parse(json);

        const res = parseQuery(gqlResult.uiapi.query);
        
        
        expect(res.Account[0].Id).toBe('001ak00000MoLURAA3');
        expect(res.Account[0].Name.value).toBe('Edge Communications');
    });

    it('tests the parsing of complex gql query results with datatablemode ON', () => {
        const json = '{"uiapi":{"query":{"Account":{"edges":[{"node":{"Id":"001ak00000MoLURAA3","Active__c":{"value":"Yes"},"Name":{"value":"Edge Communications"},"BestAccountFriend__r":{"Id":"001ak00000MoLUTAA3","Active__c":{"value":"Yes"},"Name":{"value":"Pyramid Construction Inc."}},"BestFriend__r":{"Id":"003ak000003ORbkAAG","Name":{"value":"Stella Pavlova"}},"Owner":{"Name":{"value":"Gandalf Stormcrow"}},"Contacts":{"edges":[{"node":{"Id":"003ak000003ORbdAAG","Name":{"value":"Rose Gonzalez"},"Account":{"Id":"001ak00000MoLURAA3","Owner":{"Name":{"value":"Gandalf Stormcrow"}},"Name":{"value":"Edge Communications"}}}},{"node":{"Id":"003ak000003ORbeAAG","Name":{"value":"Sean Forbes"},"Account":{"Id":"001ak00000MoLURAA3","Owner":{"Name":{"value":"Gandalf Stormcrow"}},"Name":{"value":"Edge Communications"}}}}]}}}]},"Contact":{"edges":[{"node":{"Id":"003ak000003ORbdAAG","Name":{"value":"Rose Gonzalez"},"Account":{"Id":"001ak00000MoLURAA3","Owner":{"Name":{"value":"Gandalf Stormcrow"}},"Name":{"value":"Edge Communications"}}}}]}}}}';
        const gqlResult = JSON.parse(json);

        const res = parseQuery(gqlResult.uiapi.query, true);

        expect(res.Account[0].Id).toBe('001ak00000MoLURAA3');
        expect(res.Account[0].Name).toBe('Edge Communications');

        // custom field
        expect(res.Account[0].Active).toBe('Yes');

        // parent relationship
        expect(res.Account[0].BestAccountFriendName).toBe('Pyramid Construction Inc.')

        // another parent relationship
        expect(res.Account[0].BestFriendId).toBe('003ak000003ORbkAAG');

        // child relationship
        expect(res.Account[0].Contacts[0].Id).toBe('003ak000003ORbdAAG');
        expect(res.Account[0].Contacts[0].Name).toBe('Rose Gonzalez');

        // child relationship + double parent relationship
        expect(res.Account[0].Contacts[0].AccountOwnerName).toBe('Gandalf Stormcrow');
    })

    it('tests the parsing of complex gql query results with datatablemode OFF', () => {
        const json = '{"uiapi":{"query":{"Account":{"edges":[{"node":{"Id":"001ak00000MoLURAA3","Active__c":{"value":"Yes"},"Name":{"value":"Edge Communications"},"BestAccountFriend__r":{"Id":"001ak00000MoLUTAA3","Active__c":{"value":"Yes"},"Name":{"value":"Pyramid Construction Inc."}},"BestFriend__r":{"Id":"003ak000003ORbkAAG","Name":{"value":"Stella Pavlova"}},"Owner":{"Name":{"value":"Gandalf Stormcrow"}},"Contacts":{"edges":[{"node":{"Id":"003ak000003ORbdAAG","Name":{"value":"Rose Gonzalez"},"Account":{"Id":"001ak00000MoLURAA3","Owner":{"Name":{"value":"Gandalf Stormcrow"}},"Name":{"value":"Edge Communications"}}}},{"node":{"Id":"003ak000003ORbeAAG","Name":{"value":"Sean Forbes"},"Account":{"Id":"001ak00000MoLURAA3","Owner":{"Name":{"value":"Gandalf Stormcrow"}},"Name":{"value":"Edge Communications"}}}}]}}}]},"Contact":{"edges":[{"node":{"Id":"003ak000003ORbdAAG","Name":{"value":"Rose Gonzalez"},"Account":{"Id":"001ak00000MoLURAA3","Owner":{"Name":{"value":"Gandalf Stormcrow"}},"Name":{"value":"Edge Communications"}}}}]}}}}';
        const gqlResult = JSON.parse(json);

        const res = parseQuery(gqlResult.uiapi.query);

        expect(res.Account[0].Id).toBe('001ak00000MoLURAA3');
        expect(res.Account[0].Name.value).toBe('Edge Communications');

        // custom field
        expect(res.Account[0].Active.value).toBe('Yes');

        // parent relationship
        expect(res.Account[0].BestAccountFriend.Name.value).toBe('Pyramid Construction Inc.')

        // another parent relationship
        expect(res.Account[0].BestFriend.Id).toBe('003ak000003ORbkAAG');

        // child relationship
        expect(res.Account[0].Contacts[0].Id).toBe('003ak000003ORbdAAG');
        expect(res.Account[0].Contacts[0].Name.value).toBe('Rose Gonzalez');

        // child relationship + double parent relationship
        expect(res.Account[0].Contacts[0].Account.Owner.Name.value).toBe('Gandalf Stormcrow');
    })

});