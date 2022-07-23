import { useCallback, useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useMutation } from '@apollo/client';
import {
  Card,
  Layout,
  Page,
  ResourceList,
  Avatar,
  Filters,
  ResourceItem,
  TextStyle,
  Pagination,
  Modal,
  TextContainer,
} from '@shopify/polaris';
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params';
import { JOBS_QUERY, SEARCHJOB_QUERY } from '../../graphql/queries';
import { DELETE_JOB_MUTATION } from '../../graphql/mutation';
import { useJobsQuery, useSearchJobQuery } from '../../generated/graphql';

interface Data {
  title: string;
  description: string;
  city: string;
  id: string;
  updatedAt: number;
}

export default function JobList() {
  const [deleteJob] = useMutation(DELETE_JOB_MUTATION);

  const [pathState, setPathState] = useQueryParams({
    p: withDefault(NumberParam, 1),
    s: withDefault(StringParam, 'DESC'),
    search: withDefault(StringParam, ''),
  });
  const setPathStateRef = useRef(setPathState);
  setPathStateRef.current = setPathState;
  const { s: sort, p: page, search: value } = pathState;
  const [input] = useDebounce(value, 350);
  const [items, setItems] = useState<Data[]>([]);
  const [totalPage, setTotalPage] = useState<number | undefined | null>(0);

  const [jobID, setJobID] = useState<null | string>(null);

  const { data: jobsData } = useJobsQuery({
    variables: {
      page: page,
      pageSize: 5,
      sort: sort,
    },
    fetchPolicy: 'network-only',
    skip: value === '' ? false : true,
  });

  const { data: searchJobData } = useSearchJobQuery({
    variables: {
      name: input,
      page: 1,
      limit: 5,
      sort: sort,
    },
    fetchPolicy: 'network-only',
    skip: value !== '' ? false : true,
  });

  useEffect(() => {
    if (jobsData) {
      setItems(jobsData.jobs?.jobs as Array<any>);
      setPathStateRef.current((prevstate) => ({ ...prevstate }));
      setTotalPage(jobsData.jobs?.totalPage);
    }
    if (searchJobData) {
      setItems(searchJobData.searchJob?.jobs as Array<any>);
    }
  }, [jobsData, searchJobData]);

  const handleOnQueryChange = useCallback(
    (value: string) => {
      setPathStateRef.current((prevstate) => ({ ...prevstate, search: value }));
    },
    [setPathStateRef]
  );
  const handleOnQueryClear = useCallback(
    () =>
      setPathStateRef.current((prevstate) => ({ ...prevstate, search: '' })),
    [setPathStateRef]
  );
  const filterControl = (
    <Filters
      queryValue={value}
      onQueryChange={handleOnQueryChange}
      onQueryClear={handleOnQueryClear}
      filters={[]}
      onClearAll={() => {}}
    />
  );
  const handleOnPrevious = useCallback(
    () =>
      setPathStateRef.current((prevstate) => ({
        ...prevstate,
        p: prevstate.p - 1,
      })),
    [setPathStateRef]
  );
  const handleOnNext = useCallback(() => {
    setPathStateRef.current((prevstate) => ({
      ...prevstate,
      p: prevstate.p + 1,
    }));
  }, [setPathStateRef]);

  const handleOnSortChange = useCallback(
    (selected: string) => {
      setPathStateRef.current((prevstate) => ({
        ...prevstate,
        s: selected,
      }));
    },
    [setPathStateRef]
  );
  const handlePrimaryAction = useCallback(async () => {
    try {
      const { data } = await deleteJob({
        variables: {
          id: jobID,
        },
        refetchQueries: [jobsData ? JOBS_QUERY : SEARCHJOB_QUERY],
      });
      if (data.deleteJob.status) {
        setJobID(null);
        setPathStateRef.current({ p: 1, s: 'DESC', search: '' });
      }
    } catch (err) {
      console.log(err);
    }
  }, [deleteJob, setJobID, jobID, jobsData]);
  const handleSecondaryActions = useCallback(() => setJobID(null), [setJobID]);
  const handleonClose = useCallback(() => setJobID(null), [setJobID]);
  const handleDeleteAction = useCallback(
    (id: string) => setJobID(id),
    [setJobID]
  );
  const modalDelete = (
    <Modal
      title="Delete Job"
      open={jobID === null ? false : true}
      onClose={handleonClose}
      primaryAction={{
        content: 'Yes',
        onAction: handlePrimaryAction,
      }}
      secondaryActions={[
        {
          content: 'No',
          onAction: handleSecondaryActions,
        },
      ]}
    >
      <Modal.Section>
        <TextContainer>
          <p>Do you want to delete this job?</p>
        </TextContainer>
      </Modal.Section>
    </Modal>
  );

  function RenderItem(data: Data) {
    const { title, description, city, id, updatedAt } = data;
    const date = new Intl.DateTimeFormat('en-UK', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(updatedAt);

    const media = <Avatar size="medium" name={title} />;
    const shortcutActions = [
      {
        content: 'Delete',
        onAction: () => handleDeleteAction(id),
      },
    ];
    return (
      <ResourceItem
        verticalAlignment="center"
        id={id}
        media={media}
        accessibilityLabel={`View details for ${title}`}
        url={`/jobs/edit/${id}`}
        shortcutActions={shortcutActions}
      >
        <h3>
          <TextStyle variation="strong">{title}</TextStyle>
        </h3>
        <span>{`City: ${city}`}</span>
        <br />
        <span>{`Description: ${description}`}</span>
        <br />
        <span>{`UpdatedAt: ${date}`}</span>
      </ResourceItem>
    );
  }

  return (
    <Page
      title="Jobs"
      primaryAction={{ content: 'Create Job', url: '/jobs/new' }}
    >
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <ResourceList
              resourceName={resourceName}
              items={items ? items : []}
              renderItem={RenderItem}
              filterControl={filterControl}
              sortValue={sort}
              sortOptions={sortOptions}
              onSortChange={handleOnSortChange}
            />
          </Card>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: '2em',
            }}
          >
            <Pagination
              label={page}
              hasPrevious={page !== 1}
              onPrevious={handleOnPrevious}
              hasNext={page !== totalPage}
              onNext={handleOnNext}
            />
          </div>
        </Layout.Section>
        {jobID ? modalDelete : null}
      </Layout>
    </Page>
  );
}

const resourceName: { singular: string; plural: string } = {
  singular: 'job',
  plural: 'jobs',
};
const sortOptions: { label: string; value: string }[] = [
  { label: 'Newest update', value: 'DESC' },
  { label: 'Oldest update', value: 'ASC' },
];
