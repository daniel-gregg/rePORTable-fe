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
        designation
        firstName
        lastName
      }
      owner {
        designation
        firstName
        lastName
      }
      state
      synopsis
      title
    }
  }
`;

export const QUERY_NO_CONTENT = gql`
  query singlePartial($id: ID!) {
    singlePartial(id: $id) {
      _id
      title
      state
      synopsis
      contributors {
        designation
        firstName
        lastName
        _id
      }
      owner {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const QUERY_USER_REPORTS = gql`
  {
    userReports {
      _id
      contributors {
        _id
        designation
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
