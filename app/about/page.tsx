export default function About() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Link from 'next/link';

function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | The Best 10 Private Schools</title>
        <meta name="description" content="Learn about our mission, values, and history at The Best 10 Private Schools in Austin, TX." />
        <meta name="keywords" content="private schools, austin, texas, best schools" />
      </Head>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>About Us</h1>
          <p>Welcome to The Best 10 Private Schools, a community of dedicated educators and families committed to providing a world-class education to students in Austin, TX.</p>
          <p>Our mission is to foster a love of learning, creativity, and critical thinking in a supportive and inclusive environment.</p>
          <p>At The Best 10 Private Schools, we value academic excellence, character development, and community engagement.</p>
        </section>
        <section>
          <h2>Our History</h2>
          <p>We were founded in [Year] with the goal of providing a unique and personalized education to students in the Austin area.</p>
          <p>Since our inception, we have grown to become one of the top private schools in the region, known for our academic rigor, innovative programs, and commitment to community service.</p>
        </section>
        <section>
          <h2>Our Team</h2>
          <p>Our faculty and staff are dedicated professionals who are passionate about teaching and learning.</p>
          <p>With a range of backgrounds and expertise, our team is committed to providing a supportive and stimulating environment for our students to thrive.</p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} The Best 10 Private Schools. All rights reserved.</p>
        <p>Contact us: <a href="mailto:info@best10privateschools.com">info@best10privateschools.com</a></p>
      </footer>
    </>
  );
}

export default AboutPage;
```

This JSX code represents a Next.js page component for the About page of The Best 10 Private Schools. It includes a header with a navigation menu, a main section with three sub-sections (About Us, Our History, and Our Team), and a footer with contact information. The code uses JSX to render dynamic content and follows best practices for Next.js page components.
    </section>
  );
}
