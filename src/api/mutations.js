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

export const ADD_REPORT = gql`
  mutation addReport(
    $title: String!
    $ownerId: String!
    $synopsis: String!
    $contributors: [String!]!
    $headings: String!
    $content: String!
    $password: String!
  ) {
    addReport(
      title: $title
      ownerId: $ownerId
      synopsis: $synopsis
      contrbutors: $contributors
      email: $email
      password: $password
    ) {
      user {
        #add more returned things here
        _id
      }
      report {
        _title
      }
    }
  }
`;
