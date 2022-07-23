import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      message
      status
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
      }
      message
      status
    }
  }
`;

export const CREATE_JOB_MUTATION = gql`
  mutation CreateJobMutation(
    $title: String!
    $description: String!
    $city: String!
    $skills: [String]!
  ) {
    createJob(
      title: $title
      description: $description
      city: $city
      skills: $skills
    ) {
      job {
        id
        title
        description
        city
        updatedAt
        skills {
          id
          title
        }
      }
      message
      status
    }
  }
`;

export const UPDATE_JOB_MUTATION = gql`
  mutation UpdateJobMutation(
    $id: Int!
    $title: String!
    $description: String!
    $city: String!
    $skills: [String]!
  ) {
    updateJob(
      id: $id
      title: $title
      description: $description
      city: $city
      skills: $skills
    ) {
      message
      status
    }
  }
`;

export const DELETE_JOB_MUTATION = gql`
  mutation DeleteJobMutation($id: Int) {
    deleteJob(id: $id) {
      message
      status
    }
  }
`;
