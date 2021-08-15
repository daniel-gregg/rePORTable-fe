import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
  {
    allUsers {
      _id
      firstName
      lastName
      bio
      designation
      email
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      bio
      designation
      email
      team {
        _id
        designation
        firstName
        lastName
        bio
      }
    }
  }
`;

export const QUERY_REPORT = gql`
  query singleReport($id: ID!) {
    singleReport(id: $id) {
      _id
      title
      content
      contributors {
        firstName
        lastName
      }
      owner {
        firstName
        lastName
      }
      state
      synopsis
      title
    }
  }
`;

export const QUERY_USER_REPORTS = gql`
  {
    userReports {
      _id
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
