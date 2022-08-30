import { gql } from '@apollo/client';

export const QUERY_REQUESTS = gql`
  query getRequests {
    requests {
      _id
      category
      title
      description
      details
      createdAt
    }
  }
`;

export const QUERY_CATEGORY_REQUESTS = gql`
  query getRequests($category: ID!) {
    requests(category: $category) {
      _id
      category
      title
      description
      details
      createdAt
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  query getCategories {
    categories {
      _id
      categoryName
  }
}
`

export const QUERY_SINGLE_USER = gql`
  query getSingleUser($userId: ID!) {
    user(userId: $userId) {
      email
      username
      password
    }
  }`