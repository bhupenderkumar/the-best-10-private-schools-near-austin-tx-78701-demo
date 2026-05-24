export default function Contact() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - The Best 10 Private Schools near Austin, TX</title>
      </Head>
      <main className="container max-w-4xl p-4 mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-4">We'd love to hear from you!</p>
        <div className="flex flex-col md:flex-row mb-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
            <p>Email: <a href="mailto:info@best10privateschools.com" className="text-blue-500 hover:text-blue-700">info@best10privateschools.com</a></p>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Location</h2>
            <p>Austin, TX 78701</p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Leave a Message</h2>
          <p>Please note that we do not have a physical office location and kindly request that you reach out to us via email or phone.</p>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
```
    </section>
  );
}
