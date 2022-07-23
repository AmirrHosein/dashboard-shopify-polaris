import { gql } from "@apollo/client";

export const SHOWTOKENS_QUERY = gql`
  query showTokensQuery {
    showtokens {
      tokens {
        id
        createdAt
      }
      message
      status
    }
  }
`;

export const SKILLS_QUERY = gql`
  query skillsQuery($title: String!, $limit: Int) {
    skills(title: $title, limit: $limit) {
      skills {
        id
        title
      }
      message
      status
    }
  }
`;

export const JOBS_QUERY = gql`
  query jobsQuery($page: Int!, $pageSize: Int!, $sort: String!) {
    jobs(page: $page, pageSize: $pageSize, sort: $sort) {
      jobs {
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
      totalPage
      totalCount
      message
      status
    }
  }
`;

export const SEARCHJOB_QUERY = gql`
  query searchJobQuery(
    $name: String!
    $page: Int!
    $limit: Int!
    $sort: String!
  ) {
    searchJob(name: $name, page: $page, limit: $limit, sort: $sort) {
      jobs {
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
      totalPage
      totalCount
      message
      status
    }
  }
`;

export const JOB_QUERY = gql`
  query jobQuery($id: Int!) {
    job(id: $id) {
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
