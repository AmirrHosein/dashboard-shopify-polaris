import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Select, TextField } from "@satel/formik-polaris";
import {
  Card,
  ContextualSaveBar,
  FormLayout,
  Frame,
  Layout,
  Loading,
  Page,
} from "@shopify/polaris";
import { Field, Formik, Form } from "formik";
import { TextFieldSkills } from "../../components/TextFieldSkills/TextFieldSkills";
import { newjobFormOptions } from "../Newjob/newjobFormOptions";
import { titleCase } from "../../utils/titleCase";
import { JOB_QUERY } from "../../graphql/queries";
import { useUpdateJobMutation } from "../../generated/graphql";

interface Skill {
  id?: number;
  title: string;
}
interface InitValues {
  title: string;
  description: string;
  city: string;
  skills: string[];
}

export default function EditJob() {
  const navigate = useNavigate();
  const { id } = useParams();
  const itemID = parseInt(id as string);
  const [updateJob] = useUpdateJobMutation();

  const { data } = useQuery(JOB_QUERY, {
    variables: { id: itemID },
  });

  const handleOnSubmit = useCallback(
    async ({ title, description, city, skills }) => {
      try {
        const { data } = await updateJob({
          variables: {
            id: itemID,
            title,
            description,
            city,
            skills,
          },
        });
        if (data?.updateJob?.status) {
          navigate("/jobs");
        }
      } catch (err) {
        console.log(err);
      }
    },
    [updateJob, itemID, navigate]
  );

  if (!data) {
    return (
      <Frame>
        <Loading />
      </Frame>
    );
  }
  const { title, description, city, skills } = data.job.job;
  let formSkills: string[] = [];
  skills.map((skill: Skill) => {
    let value = "";
    value = skill.title.replace("_", " ");
    value = titleCase(skill.title);
    return formSkills.push(value);
  });
  const initValues: InitValues = {
    title: title,
    description: description,
    city: city,
    skills: formSkills,
  };

  return (
    <div style={{ marginRight: 250 }}>
      <Page narrowWidth title="Edit Job">
        <Layout>
          <Layout.AnnotatedSection title="Job Details">
            <Card sectioned>
              <Formik
                enableReinitialize
                initialValues={initValues}
                onSubmit={handleOnSubmit}
                validationSchema={newjobFormOptions}
              >
                {({ dirty, submitForm, isSubmitting }) => (
                  <Form>
                    <ContextualSaveBar
                      discardAction={{
                        onAction: () => {
                          navigate("/jobs");
                        },
                      }}
                      saveAction={{
                        loading: isSubmitting,
                        disabled: !dirty,
                        onAction: submitForm,
                      }}
                    />
                    <FormLayout>
                      <TextField
                        type="text"
                        label="Title"
                        name="title"
                        id="title"
                        autoComplete="off"
                      />
                      <TextField
                        type="text"
                        label="Description"
                        name="description"
                        id="description"
                        multiline={4}
                        autoComplete="off"
                      />
                      <Select
                        placeholder="Select..."
                        label="City"
                        name="city"
                        options={cityOptions}
                      />
                      <Field
                        name="skills"
                        label="Skills"
                        as={TextFieldSkills}
                      />
                    </FormLayout>
                  </Form>
                )}
              </Formik>
            </Card>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    </div>
  );
}

const cityOptions: { label: string; value: string }[] = [
  { label: "London", value: "london" },
  { label: "Tehran", value: "tehran" },
  { label: "NewYork", value: "newyork" },
];
