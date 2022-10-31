import { gql } from "@apollo/client";
import { REPOSITORY_BASE_FIELDS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $after: String
    $first: Int
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      after: $after
      first: $first
    ) {
      edges {
        node {
          ...repositoryBaseFields
          ratingAverage
          reviewCount
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }

  ${REPOSITORY_BASE_FIELDS}
`;

export const ME = gql`
  query ($includeReviews: Boolean = true) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            user {
              username
              id
            }
            createdAt
            text
            rating
            repository {
              id
              ownerName
              name
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...repositoryBaseFields
      ratingAverage
      reviewCount
      reviews {
        edges {
          node {
            id
            user {
              username
              id
            }
            createdAt
            text
            rating
          }
        }
      }
    }
  }

  ${REPOSITORY_BASE_FIELDS}
`;
