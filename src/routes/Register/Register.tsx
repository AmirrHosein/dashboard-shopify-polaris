import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { TextField } from "@satel/formik-polaris";
import {
  Banner,
  Button,
  Card,
  FormLayout,
  Layout,
  Page,
} from "@shopify/polaris";
import { Formik, Form } from "formik";
import { registerFormSchema } from "./registerFormOptions";
import { useCreateUserMutation } from "../../generated/graphql";

interface InitialValues {
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function Register() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  const [createUser] = useCreateUserMutation();
  const handleOnSubmit = useCallback(
    async ({ email, password }) => {
      try {
        const { data } = await createUser({
          variables: {
            email,
            password,
          },
        });

        if (data?.createUser?.status) {
          navigate("/login");
        }

        setErrorMessage(data?.createUser?.message);
      } catch (err) {
        console.log(err);
      }
    },
    [createUser, navigate]
  );

  return (
    <Page
      narrowWidth
      breadcrumbs={[{ content: "Login", url: "/login" }]}
      title="Sign Up"
    >
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Formik
              initialValues={initialValues}
              validationSchema={registerFormSchema}
              onSubmit={handleOnSubmit}
            >
              {({ dirty }) => (
                <Form>
                  <FormLayout>
                    <TextField
                      type="email"
                      label="Email"
                      name="email"
                      id="email"
                      autoComplete="off"
                    />
                    <TextField
                      type="password"
                      label="Password"
                      name="password"
                      id="password"
                      autoComplete="off"
                    />
                    <TextField
                      type="password"
                      label="Password Confirm"
                      name="passwordConfirm"
                      id="passwordConfirm"
                      autoComplete="off"
                    />
                    <Button submit primary disabled={!dirty}>
                      Sign Up
                    </Button>
                  </FormLayout>
                </Form>
              )}
            </Formik>
          </Card>
          <br />
          {errorMessage ? (
            <Banner title={errorMessage} status="critical" />
          ) : null}
        </Layout.Section>
      </Layout>
    </Page>
  );
}

const initialValues: InitialValues = {
  email: "",
  password: "",
  passwordConfirm: "",
};
