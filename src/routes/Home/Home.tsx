import { Card, Layout, Page } from "@shopify/polaris";

export default function Home() {
  return (
    <Page title="Home">
      <Layout>
        <Layout.Section>
          <Card sectioned>{"Welcome"}</Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
