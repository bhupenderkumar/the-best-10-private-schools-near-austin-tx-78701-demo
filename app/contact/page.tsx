export default function Contact() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Link from 'next/link';

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - The Best 10 Private Schools</title>
        <meta name="description" content="Get in touch with us at The Best 10 Private Schools in Austin, TX." />
      </Head>

      <main className="max-w-4xl mx-auto p-4 py-6 md:p-6 lg:p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">We appreciate your interest in The Best 10 Private Schools. Please feel free to reach out to us with any questions or inquiries.</p>

        <section className="bg-gray-100 p-4 rounded-md shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="mb-4">Email: <Link href="mailto:info@best10privateschools.com" className="text-blue-600 hover:text-blue-800 transition-all duration-300">info@best10privateschools.com</Link></p>
          <p>Phone: N/A</p>
          <p>Address: N/A</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Leave a Message</h2>
          <p>Fill out the form below to send us a message. We'll get back to you as soon as possible.</p>
          {/* Add a form to this section, e.g. using a library like react-hook-form */}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Office Hours</h2>
          <p>We are available Monday through Friday from 8am to 5pm.</p>
        </section>
      </main>
    </>
  );
}

export default ContactPage;
```
    </section>
  );
}
