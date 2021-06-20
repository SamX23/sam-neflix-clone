import { Accordion } from "../components";
import { OptForm } from "../components";
import faqsData from "../fixtures/faqs.json";

const FaqsContainer = () => (
  <Accordion>
    <Accordion.Title>Frequently Asked Question</Accordion.Title>
    <Accordion.Frame>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion.Frame>

    <OptForm>
      <OptForm.Input placeholder="Email Address" />
      <OptForm.Button>Try it now</OptForm.Button>
      <OptForm.Break />
      <OptForm.Text>
        Ready to watch? Enter your email to crete or restart your membership.
      </OptForm.Text>
    </OptForm>
  </Accordion>
);

export default FaqsContainer;
