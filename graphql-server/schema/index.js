const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLString
} = require('graphql');

const { categoryType } = require('./types/category');

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    category: {
      type: categoryType,
      args: { id: { type: GraphQLString } }
    },
    categories: {
      type: new GraphQLList(categoryType)
    }
  })
});

const schema = new GraphQLSchema({
  query: queryType
});

module.exports = schema;
