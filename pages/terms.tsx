import LegalPage from "../shared/layout/LegalPage";

export function getStaticProps() {
  return {
    props: {
      designVersion: "2",
      meta: {
        title: "Terms",
        description: "Inngest's terms and conditions",
      },
    },
  };
}

export default function Terms() {
  return (
    <LegalPage iframeURL="https://www.iubenda.com/terms-and-conditions/26885259" />
  );
}
