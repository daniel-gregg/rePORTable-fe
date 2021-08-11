import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $designation: String!
    $bio: String
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      designation: $designation
      bio: $bio
      email: $email
      password: $password
    ) {
      token
      user {
        #This is what the query returns
        _id
        firstName
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $firstName: String!
    $lastName: String!
    $designation: String!
    $bio: String
    $email: String!
    $password: String!
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      designation: $designation
      bio: $bio
      email: $email
      password: $password
    ) {
      token
      user {
        #This is what the query returns
        _id
        firstName
      }
    }
  }
`;

export const ADD_REPORT = gql`
  mutation addReport(
    $title: String!
    $ownerId: String!
    $synopsis: String!
    $contributors: [String!]!
    $content: String!
  ) {
    addReport(
      title: $title
      ownerId: $ownerId
      synopsis: $synopsis
      contributors: $contributors
      content: $content
      state: "Draft"
    ) {
      report {
        _id
      }
    }
  }
`;

export const UPDATE_CONTENT = gql`
  mutation updateReport($_id: ID!) {
    addReport(
      title: $title
      ownerId: $ownerId
      synopsis: $synopsis
      contributors: $contributors
      content: $content
      state: "Draft"
    ) {
      report {
        _id
      }
    }
  }
`;
