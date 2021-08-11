import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const QUERY_USER_REPORTS = gql`
  {
    userReports {
      _id
      content
      contributors {
        _id
        firstName
        lastName
      }
      owner {
        _id
        firstName
        lastName
      }
      state
      synopsis
      title
    }
  }
`;
