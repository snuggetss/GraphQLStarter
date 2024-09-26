const parseQueryResult = function(resultData) {
    return parseNode(resultData.uiapi.query);
}

const parseNode = function(node, datatableMode=false, keyPrefix='') {
    // TODO: implement
}

export { parseQueryResult };