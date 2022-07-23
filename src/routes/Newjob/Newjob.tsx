import { useCallback } from "react";
import { useNavigate } from "react-router";
import {
  Card,
  ContextualSaveBar,
  FormLayout,
  Layout,
  Page,
} from "@shopify/polaris";
import { Select, TextField } from "@satel/formik-polaris";
import { Field, Form, Formik } from "formik";
import { TextFieldSkills } from "../../components/TextFieldSkills/TextFieldSkills";
import { newjobFormOptions } from "./newjobFormOptions";
import { useCreateJobMutation } from "../../generated/graphql";

interface InitialValues {
  title: string;
  description: string;
  city: string;
  skills: string[];
}

export default function Newjob() {
  const navigate = useNavigate();
  const [createJob] = useCreateJobMutation();

  const handleOnSubmit = useCallback(
    async ({ title, description, city, skills }) => {
      try {
        const { data } = await createJob({
          variables: {
            title,
            description,
            city,
            skills,
          },
        });

        if (data?.createJob.status) {
          navigate("/jobs");
        }
      } catch (err) {
        console.log(err);
      }
    },
    [createJob, navigate]
  );

  return (
    <div style={{ marginRight: 250 }}>
      <Page narrowWidth title="New Job">
        <Layout>
          <Layout.AnnotatedSection title="Job Details">
            <Card sectioned>
              <Formik
                initialValues={initialValues}
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

const initialValues: InitialValues = {
  title: "",
  description: "",
  city: "",
  skills: [],
};
const cityOptions: { label: string; value: string }[] = [
  { label: "London", value: "london" },
  { label: "Tehran", value: "tehran" },
  { label: "NewYork", value: "newyork" },
];
