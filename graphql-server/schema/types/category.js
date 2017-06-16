const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const categoryType = new GraphQLObjectType({
  name: 'Category',
  description: 'Represents an category of the books',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'The id of the book.'
    },
    label: {
      type: GraphQLString,
      description: 'Category label.'
    }
  })
});

exports.categoryType = categoryType;
