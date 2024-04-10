function CheckNodeLineIsOdd(ctx, node) {
    const NodeType = node.type === 'VariableDeclarator' ? 'Variables' : 'Functions';
    if (node.loc.start.line % 2 === 0) {
        ctx.report({
            node,
            message: NodeType + ' on odd lines are not allowed'
        })
    }
}

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow use variables on odd line'
        },
        schema: []
    },
    create: (context) => {
        return {
            VariableDeclarator(node) {
                CheckNodeLineIsOdd(context, node)
            },
            FunctionDeclaration(node) {
                CheckNodeLineIsOdd(context, node)
            }
        }
    }
};
