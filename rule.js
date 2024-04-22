function CheckNodeLineIsOdd(ctx, node) {
    const NodeType = node.type === 'VariableDeclarator' ? 'переменных' : 'функций';
    if (node.loc.start.line % 2 === 0) {
        ctx.report({
            node,
            message: 'Объявление ' + NodeType + ' на четных строках запрещено'
        })
    }
}

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Запрет объявления переменных и функций на четных строках'
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
