import gql from "graphql-tag";

export const QUERY_ME_ = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        # _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
