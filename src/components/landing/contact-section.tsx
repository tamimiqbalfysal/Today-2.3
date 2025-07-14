import ContactForm from './contact-form';

export default function ContactSection() {
  return (
    <section id="contact" className="container py-20 sm:py-32">
      <div className="mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-headline font-bold">
            Request a Consultation
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Let's discuss how ApexCloud can help your business scale.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
