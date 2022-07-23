import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type ActiveToken = {
  __typename?: "ActiveToken";
  message: Scalars["String"];
  status: Scalars["Boolean"];
  tokens?: Maybe<Array<Maybe<Tokendata>>>;
};

export type Booleaninfo = {
  __typename?: "Booleaninfo";
  message: Scalars["String"];
  status: Scalars["Boolean"];
};

export enum CacheControlScope {
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type Job = {
  __typename?: "Job";
  city?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  skills?: Maybe<Array<Maybe<Skills>>>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["String"]>;
};

export type Jobinfo = {
  __typename?: "Jobinfo";
  job?: Maybe<Job>;
  message: Scalars["String"];
  status: Scalars["Boolean"];
};

export type Jobinfopaginate = {
  __typename?: "Jobinfopaginate";
  jobs?: Maybe<Array<Maybe<Job>>>;
  message: Scalars["String"];
  status: Scalars["Boolean"];
  totalCount?: Maybe<Scalars["Int"]>;
  totalPage?: Maybe<Scalars["Int"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createJob: Jobinfo;
  createSkill?: Maybe<Booleaninfo>;
  createUser?: Maybe<Booleaninfo>;
  deleteJob?: Maybe<Booleaninfo>;
  deleteToken?: Maybe<Booleaninfo>;
  deleteUser?: Maybe<Booleaninfo>;
  login: Token;
  logout?: Maybe<Booleaninfo>;
  updateJob?: Maybe<Booleaninfo>;
  updateUser: Userwithinfo;
};

export type MutationCreateJobArgs = {
  city: Scalars["String"];
  description: Scalars["String"];
  skills: Array<InputMaybe<Scalars["String"]>>;
  title: Scalars["String"];
};

export type MutationCreateSkillArgs = {
  title: Scalars["String"];
};

export type MutationCreateUserArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationDeleteJobArgs = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type MutationDeleteTokenArgs = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationLogoutArgs = {
  token: Scalars["String"];
};

export type MutationUpdateJobArgs = {
  city: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["Int"];
  skills: Array<InputMaybe<Scalars["String"]>>;
  title: Scalars["String"];
};

export type MutationUpdateUserArgs = {
  password: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  job?: Maybe<Jobinfo>;
  jobs?: Maybe<Jobinfopaginate>;
  searchJob?: Maybe<SearchJobInfo>;
  showtokens?: Maybe<ActiveToken>;
  skills?: Maybe<Skillinfo>;
  user?: Maybe<User>;
};

export type QueryJobArgs = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type QueryJobsArgs = {
  page: Scalars["Int"];
  pageSize: Scalars["Int"];
  sort: Scalars["String"];
};

export type QuerySearchJobArgs = {
  limit: Scalars["Int"];
  name: Scalars["String"];
  page: Scalars["Int"];
  sort: Scalars["String"];
};

export type QuerySkillsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  title: Scalars["String"];
};

export type QueryUserArgs = {
  id: Scalars["Int"];
};

export type Token = {
  __typename?: "Token";
  message: Scalars["String"];
  status: Scalars["Boolean"];
  token?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type Tokendata = {
  __typename?: "Tokendata";
  createdAt?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
};

export type Userwithinfo = {
  __typename?: "Userwithinfo";
  message: Scalars["String"];
  status: Scalars["Boolean"];
  user?: Maybe<User>;
};

export type SearchJobInfo = {
  __typename?: "searchJobInfo";
  jobs?: Maybe<Array<Maybe<Job>>>;
  message: Scalars["String"];
  status: Scalars["Boolean"];
  totalCount?: Maybe<Scalars["Int"]>;
  totalPage?: Maybe<Scalars["Int"]>;
};

export type Skillinfo = {
  __typename?: "skillinfo";
  message: Scalars["String"];
  skills?: Maybe<Array<Maybe<Skills>>>;
  status: Scalars["Boolean"];
};

export type Skills = {
  __typename?: "skills";
  id?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
};

export type CreateUserMutationMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type CreateUserMutationMutation = {
  __typename?: "Mutation";
  createUser?:
    | { __typename?: "Booleaninfo"; message: string; status: boolean }
    | null
    | undefined;
};

export type LoginMutationMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutationMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "Token";
    token?: string | null | undefined;
    message: string;
    status: boolean;
    user?:
      | {
          __typename?: "User";
          id?: number | null | undefined;
          email?: string | null | undefined;
        }
      | null
      | undefined;
  };
};

export type CreateJobMutationMutationVariables = Exact<{
  title: Scalars["String"];
  description: Scalars["String"];
  city: Scalars["String"];
  skills: Array<InputMaybe<Scalars["String"]>> | InputMaybe<Scalars["String"]>;
}>;

export type CreateJobMutationMutation = {
  __typename?: "Mutation";
  createJob: {
    __typename?: "Jobinfo";
    message: string;
    status: boolean;
    job?:
      | {
          __typename?: "Job";
          id?: number | null | undefined;
          title?: string | null | undefined;
          description?: string | null | undefined;
          city?: string | null | undefined;
          updatedAt?: string | null | undefined;
          skills?:
            | Array<
                | {
                    __typename?: "skills";
                    id?: number | null | undefined;
                    title?: string | null | undefined;
                  }
                | null
                | undefined
              >
            | null
            | undefined;
        }
      | null
      | undefined;
  };
};

export type UpdateJobMutationMutationVariables = Exact<{
  id: Scalars["Int"];
  title: Scalars["String"];
  description: Scalars["String"];
  city: Scalars["String"];
  skills: Array<InputMaybe<Scalars["String"]>> | InputMaybe<Scalars["String"]>;
}>;

export type UpdateJobMutationMutation = {
  __typename?: "Mutation";
  updateJob?:
    | { __typename?: "Booleaninfo"; message: string; status: boolean }
    | null
    | undefined;
};

export type DeleteJobMutationMutationVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]>;
}>;

export type DeleteJobMutationMutation = {
  __typename?: "Mutation";
  deleteJob?:
    | { __typename?: "Booleaninfo"; message: string; status: boolean }
    | null
    | undefined;
};

export type ShowTokensQueryQueryVariables = Exact<{ [key: string]: never }>;

export type ShowTokensQueryQuery = {
  __typename?: "Query";
  showtokens?:
    | {
        __typename?: "ActiveToken";
        message: string;
        status: boolean;
        tokens?:
          | Array<
              | {
                  __typename?: "Tokendata";
                  id?: string | null | undefined;
                  createdAt?: string | null | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type SkillsQueryQueryVariables = Exact<{
  title: Scalars["String"];
  limit?: InputMaybe<Scalars["Int"]>;
}>;

export type SkillsQueryQuery = {
  __typename?: "Query";
  skills?:
    | {
        __typename?: "skillinfo";
        message: string;
        status: boolean;
        skills?:
          | Array<
              | {
                  __typename?: "skills";
                  id?: number | null | undefined;
                  title?: string | null | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type JobsQueryQueryVariables = Exact<{
  page: Scalars["Int"];
  pageSize: Scalars["Int"];
  sort: Scalars["String"];
}>;

export type JobsQueryQuery = {
  __typename?: "Query";
  jobs?:
    | {
        __typename?: "Jobinfopaginate";
        totalPage?: number | null | undefined;
        totalCount?: number | null | undefined;
        message: string;
        status: boolean;
        jobs?:
          | Array<
              | {
                  __typename?: "Job";
                  id?: number | null | undefined;
                  title?: string | null | undefined;
                  description?: string | null | undefined;
                  city?: string | null | undefined;
                  updatedAt?: string | null | undefined;
                  skills?:
                    | Array<
                        | {
                            __typename?: "skills";
                            id?: number | null | undefined;
                            title?: string | null | undefined;
                          }
                        | null
                        | undefined
                      >
                    | null
                    | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type SearchJobQueryQueryVariables = Exact<{
  name: Scalars["String"];
  page: Scalars["Int"];
  limit: Scalars["Int"];
  sort: Scalars["String"];
}>;

export type SearchJobQueryQuery = {
  __typename?: "Query";
  searchJob?:
    | {
        __typename?: "searchJobInfo";
        totalPage?: number | null | undefined;
        totalCount?: number | null | undefined;
        message: string;
        status: boolean;
        jobs?:
          | Array<
              | {
                  __typename?: "Job";
                  id?: number | null | undefined;
                  title?: string | null | undefined;
                  description?: string | null | undefined;
                  city?: string | null | undefined;
                  updatedAt?: string | null | undefined;
                  skills?:
                    | Array<
                        | {
                            __typename?: "skills";
                            id?: number | null | undefined;
                            title?: string | null | undefined;
                          }
                        | null
                        | undefined
                      >
                    | null
                    | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type JobQueryQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type JobQueryQuery = {
  __typename?: "Query";
  job?:
    | {
        __typename?: "Jobinfo";
        message: string;
        status: boolean;
        job?:
          | {
              __typename?: "Job";
              id?: number | null | undefined;
              title?: string | null | undefined;
              description?: string | null | undefined;
              city?: string | null | undefined;
              updatedAt?: string | null | undefined;
              skills?:
                | Array<
                    | {
                        __typename?: "skills";
                        id?: number | null | undefined;
                        title?: string | null | undefined;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export const CreateUserMutationDocument = gql`
  mutation CreateUserMutation($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      message
      status
    }
  }
`;
export type CreateUserMutationMutationFn = Apollo.MutationFunction<
  CreateUserMutationMutation,
  CreateUserMutationMutationVariables
>;

/**
 * __useCreateUserMutationMutation__
 *
 * To run a mutation, you first call `useCreateUserMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutationMutation, { data, loading, error }] = useCreateUserMutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutationMutation,
    CreateUserMutationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateUserMutationMutation,
    CreateUserMutationMutationVariables
  >(CreateUserMutationDocument, options);
}
export type CreateUserMutationMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationMutationResult =
  Apollo.MutationResult<CreateUserMutationMutation>;
export type CreateUserMutationMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutationMutation,
  CreateUserMutationMutationVariables
>;
export const LoginMutationDocument = gql`
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
export type LoginMutationMutationFn = Apollo.MutationFunction<
  LoginMutationMutation,
  LoginMutationMutationVariables
>;

/**
 * __useLoginMutationMutation__
 *
 * To run a mutation, you first call `useLoginMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutationMutation, { data, loading, error }] = useLoginMutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutationMutation,
    LoginMutationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    LoginMutationMutation,
    LoginMutationMutationVariables
  >(LoginMutationDocument, options);
}
export type LoginMutationMutationHookResult = ReturnType<
  typeof useLoginMutation
>;
export type LoginMutationMutationResult =
  Apollo.MutationResult<LoginMutationMutation>;
export type LoginMutationMutationOptions = Apollo.BaseMutationOptions<
  LoginMutationMutation,
  LoginMutationMutationVariables
>;
export const CreateJobMutationDocument = gql`
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
export type CreateJobMutationMutationFn = Apollo.MutationFunction<
  CreateJobMutationMutation,
  CreateJobMutationMutationVariables
>;

/**
 * __useCreateJobMutationMutation__
 *
 * To run a mutation, you first call `useCreateJobMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJobMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJobMutationMutation, { data, loading, error }] = useCreateJobMutationMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      city: // value for 'city'
 *      skills: // value for 'skills'
 *   },
 * });
 */
export function useCreateJobMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateJobMutationMutation,
    CreateJobMutationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateJobMutationMutation,
    CreateJobMutationMutationVariables
  >(CreateJobMutationDocument, options);
}
export type CreateJobMutationMutationHookResult = ReturnType<
  typeof useCreateJobMutation
>;
export type CreateJobMutationMutationResult =
  Apollo.MutationResult<CreateJobMutationMutation>;
export type CreateJobMutationMutationOptions = Apollo.BaseMutationOptions<
  CreateJobMutationMutation,
  CreateJobMutationMutationVariables
>;
export const UpdateJobMutationDocument = gql`
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
export type UpdateJobMutationMutationFn = Apollo.MutationFunction<
  UpdateJobMutationMutation,
  UpdateJobMutationMutationVariables
>;

/**
 * __useUpdateJobMutationMutation__
 *
 * To run a mutation, you first call `useUpdateJobMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJobMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJobMutationMutation, { data, loading, error }] = useUpdateJobMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      city: // value for 'city'
 *      skills: // value for 'skills'
 *   },
 * });
 */
export function useUpdateJobMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateJobMutationMutation,
    UpdateJobMutationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateJobMutationMutation,
    UpdateJobMutationMutationVariables
  >(UpdateJobMutationDocument, options);
}
export type UpdateJobMutationMutationHookResult = ReturnType<
  typeof useUpdateJobMutation
>;
export type UpdateJobMutationMutationResult =
  Apollo.MutationResult<UpdateJobMutationMutation>;
export type UpdateJobMutationMutationOptions = Apollo.BaseMutationOptions<
  UpdateJobMutationMutation,
  UpdateJobMutationMutationVariables
>;
export const DeleteJobMutationDocument = gql`
  mutation DeleteJobMutation($id: Int) {
    deleteJob(id: $id) {
      message
      status
    }
  }
`;
export type DeleteJobMutationMutationFn = Apollo.MutationFunction<
  DeleteJobMutationMutation,
  DeleteJobMutationMutationVariables
>;

/**
 * __useDeleteJobMutationMutation__
 *
 * To run a mutation, you first call `useDeleteJobMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJobMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteJobMutationMutation, { data, loading, error }] = useDeleteJobMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteJobMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteJobMutationMutation,
    DeleteJobMutationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteJobMutationMutation,
    DeleteJobMutationMutationVariables
  >(DeleteJobMutationDocument, options);
}
export type DeleteJobMutationMutationHookResult = ReturnType<
  typeof useDeleteJobMutation
>;
export type DeleteJobMutationMutationResult =
  Apollo.MutationResult<DeleteJobMutationMutation>;
export type DeleteJobMutationMutationOptions = Apollo.BaseMutationOptions<
  DeleteJobMutationMutation,
  DeleteJobMutationMutationVariables
>;
export const ShowTokensQueryDocument = gql`
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

/**
 * __useShowTokensQueryQuery__
 *
 * To run a query within a React component, call `useShowTokensQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowTokensQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowTokensQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useShowTokensQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ShowTokensQueryQuery,
    ShowTokensQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ShowTokensQueryQuery, ShowTokensQueryQueryVariables>(
    ShowTokensQueryDocument,
    options
  );
}
export function useShowTokensQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ShowTokensQueryQuery,
    ShowTokensQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ShowTokensQueryQuery,
    ShowTokensQueryQueryVariables
  >(ShowTokensQueryDocument, options);
}
export type ShowTokensQueryQueryHookResult = ReturnType<
  typeof useShowTokensQueryQuery
>;
export type ShowTokensQueryLazyQueryHookResult = ReturnType<
  typeof useShowTokensQueryLazyQuery
>;
export type ShowTokensQueryQueryResult = Apollo.QueryResult<
  ShowTokensQueryQuery,
  ShowTokensQueryQueryVariables
>;
export const SkillsQueryDocument = gql`
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

/**
 * __useSkillsQueryQuery__
 *
 * To run a query within a React component, call `useSkillsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSkillsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkillsQueryQuery({
 *   variables: {
 *      title: // value for 'title'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSkillsQuery(
  baseOptions: Apollo.QueryHookOptions<
    SkillsQueryQuery,
    SkillsQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SkillsQueryQuery, SkillsQueryQueryVariables>(
    SkillsQueryDocument,
    options
  );
}
export function useSkillsQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SkillsQueryQuery,
    SkillsQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SkillsQueryQuery, SkillsQueryQueryVariables>(
    SkillsQueryDocument,
    options
  );
}
export type SkillsQueryQueryHookResult = ReturnType<typeof useSkillsQuery>;
export type SkillsQueryLazyQueryHookResult = ReturnType<
  typeof useSkillsQueryLazyQuery
>;
export type SkillsQueryQueryResult = Apollo.QueryResult<
  SkillsQueryQuery,
  SkillsQueryQueryVariables
>;
export const JobsQueryDocument = gql`
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

/**
 * __useJobsQueryQuery__
 *
 * To run a query within a React component, call `useJobsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobsQueryQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useJobsQuery(
  baseOptions: Apollo.QueryHookOptions<JobsQueryQuery, JobsQueryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<JobsQueryQuery, JobsQueryQueryVariables>(
    JobsQueryDocument,
    options
  );
}
export function useJobsQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    JobsQueryQuery,
    JobsQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<JobsQueryQuery, JobsQueryQueryVariables>(
    JobsQueryDocument,
    options
  );
}
export type JobsQueryQueryHookResult = ReturnType<typeof useJobsQuery>;
export type JobsQueryLazyQueryHookResult = ReturnType<
  typeof useJobsQueryLazyQuery
>;
export type JobsQueryQueryResult = Apollo.QueryResult<
  JobsQueryQuery,
  JobsQueryQueryVariables
>;
export const SearchJobQueryDocument = gql`
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

/**
 * __useSearchJobQueryQuery__
 *
 * To run a query within a React component, call `useSearchJobQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchJobQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchJobQueryQuery({
 *   variables: {
 *      name: // value for 'name'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useSearchJobQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchJobQueryQuery,
    SearchJobQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchJobQueryQuery, SearchJobQueryQueryVariables>(
    SearchJobQueryDocument,
    options
  );
}
export function useSearchJobQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchJobQueryQuery,
    SearchJobQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchJobQueryQuery, SearchJobQueryQueryVariables>(
    SearchJobQueryDocument,
    options
  );
}
export type SearchJobQueryQueryHookResult = ReturnType<
  typeof useSearchJobQuery
>;
export type SearchJobQueryLazyQueryHookResult = ReturnType<
  typeof useSearchJobQueryLazyQuery
>;
export type SearchJobQueryQueryResult = Apollo.QueryResult<
  SearchJobQueryQuery,
  SearchJobQueryQueryVariables
>;
export const JobQueryDocument = gql`
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

/**
 * __useJobQueryQuery__
 *
 * To run a query within a React component, call `useJobQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useJobQueryQuery(
  baseOptions: Apollo.QueryHookOptions<JobQueryQuery, JobQueryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<JobQueryQuery, JobQueryQueryVariables>(
    JobQueryDocument,
    options
  );
}
export function useJobQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    JobQueryQuery,
    JobQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<JobQueryQuery, JobQueryQueryVariables>(
    JobQueryDocument,
    options
  );
}
export type JobQueryQueryHookResult = ReturnType<typeof useJobQueryQuery>;
export type JobQueryLazyQueryHookResult = ReturnType<
  typeof useJobQueryLazyQuery
>;
export type JobQueryQueryResult = Apollo.QueryResult<
  JobQueryQuery,
  JobQueryQueryVariables
>;
