import ContactForm from '~/components/contact-form';
import Content from '~/components/content';

export default function Contact() {
  return (
    <main>
      <Content title="Let's talk">
        <h2 className="tracing-wide text-theme mt-6 text-xl font-light leading-relaxed">
          I’m excited to hear about your project and how I can help you bring it
          to life. Fill out the form and let’s get started. I’ll be in touch
          soon to schedule a time to talk.
        </h2>
        <ContactForm />
      </Content>
    </main>
  );
}
