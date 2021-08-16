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
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      designation: $designation
      bio: "<p></p>"
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

export const REMOVE_TEAM_MEMBER = gql`
  mutation removeTeamMember($id: String) {
    removeTeamMember(id: $id) {
      _id
      firstName
    }
  }
`;

export const ADD_CONTRIBUTOR = gql`
  mutation addContributor($reportId: String, $personId: String) {
    addContributor(reportId: $reportId, personId: $personId) {
      _id
      title
    }
  }
`;

export const REMOVE_CONTRIBUTOR = gql`
  mutation removeContributor($reportId: String, $personId: String) {
    removeContributor(reportId: $reportId, personId: $personId) {
      _id
      title
    }
  }
`;

export const UPDATE_TEAM = gql`
  mutation updateTeam($memberId: String) {
    updateTeam(memberId: $memberId) {
      _id
    }
  }
`;

export const ADD_REPORT = gql`
  mutation addReport($owner: String!) {
    addReport(owner: $owner, contributors: [$owner], title: "<p></p>", synopsis: "<p></p>", state: "Draft") {
      _id
    }
  }
`;

export const REMOVE_REPORT = gql`
  mutation removeReport($reportId: String) {
    removeReport(reportId: $reportId) {
      _id
      title
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
