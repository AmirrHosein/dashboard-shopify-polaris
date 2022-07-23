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
import { loginFormSchema } from "./loginFormOptions";
import { useLoginMutation } from "../../generated/graphql";

interface FormValues {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  const [loginUser] = useLoginMutation();
  const handleOnSubmit = useCallback(
    async ({ email, password }) => {
      try {
        const { data } = await loginUser({
          variables: { email, password },
        });

        if (data?.login.status) {
          localStorage.setItem("token", data.login.token as string);
          navigate("/");
        }

        setErrorMessage(data?.login.message);
      } catch (err) {
        console.log(err);
      }
    },
    [loginUser, navigate]
  );
  return (
    <Page
      narrowWidth
      breadcrumbs={[{ content: "Register", url: "/register" }]}
      title="Login"
    >
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Formik
              initialValues={initialValues}
              validationSchema={loginFormSchema}
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
                    <Button submit primary disabled={!dirty}>
                      Login
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
const initialValues: FormValues = { email: "", password: "" };
