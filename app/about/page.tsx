export default function About() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About The Best 10 Private Schools</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About The Best 10 Private Schools</h1>
        <p>
          At The Best 10 Private Schools, we are dedicated to providing a superior education to students in the Austin, TX area. Our team of experienced educators is committed to helping our students reach their full potential and achieve their academic goals.
        </p>
        <p>
          We understand that every student learns differently, which is why we offer a range of programs and services to meet the unique needs of each child. From our rigorous academic curriculum to our extracurricular activities and sports programs, we strive to create a well-rounded educational experience that prepares our students for success in all areas of life.
        </p>
        <p>
          Our school is proud to be part of the Austin community, and we are committed to giving back to the community that has given so much to us. We partner with local organizations and businesses to provide opportunities for our students to learn and grow outside of the classroom.
        </p>
        <p>
          If you are interested in learning more about The Best 10 Private Schools or would like to schedule a tour of our campus, please don't hesitate to contact us. We look forward to hearing from you and welcoming you to our school community!
        </p>
      </div>
      <style jsx>
        {`
          .container {
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
            background-color: #f7f7f7;
            border: 1px solid #ddd;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </>
  );
};

export default About;
```

This JSX code defines a Next.js page component called `About` that displays information about The Best 10 Private Schools. The component includes a heading, paragraphs of text, and a call to action to contact the school. The CSS styles are embedded in the component using the `style jsx` tag.

Please note that you'll need to create a `pages/about.js` file in your Next.js project and paste this code into it for it to work.
    </section>
  );
}
