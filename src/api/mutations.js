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
    $firstName: String
    $lastName: String
    $designation: String
    $bio: String
    $team: [String]
    $email: String
    $password: String
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      designation: $designation
      bio: $bio
      team: $team
      email: $email
      password: $password
    ) {
      token
      user {
        #This is what the query returns
        _id
        firstName
        lastName
        designation
        bio
        team
        email
      }
    }
  }
`;

export const UPDATE_BIO = gql`
  mutation updateBio($_id: ID!, $bio: String) {
    updateBio(_id: $_id, bio: $bio) {
      #This is what the query returns
      _id
      firstName
      lastName
      designation
      bio
      email
    }
  }
`;

export const UPDATE_TEAM = gql`
  mutation updateTeam($member: String) {
    updateTeam(member: $member) {
      _id
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

export const UPDATE_REPORT = gql`
  mutation updateReport($id: ID!, $title: String, $synopsis: String, $content: String) {
    updateReport(id: $id, title: $title, synopsis: $synopsis, content: $content) {
      title
      content
    }
  }
`;

export const UPDATE_TITLE = gql`
  mutation updateTitle($id: ID!, $title: String) {
    updateTitle(id: $id, title: $title) {
      title
      content
      synopsis
    }
  }
`;

export const UPDATE_SYNOPSIS = gql`
  mutation updateSynopsis($id: ID!, $synopsis: String) {
    updateSynopsis(id: $id, synopsis: $synopsis) {
      title
      content
      synopsis
    }
  }
`;

export const UPDATE_CONTENT = gql`
  mutation updateContent($id: ID!, $content: String) {
    updateContent(id: $id, content: $content) {
      title
      content
    }
  }
`;
