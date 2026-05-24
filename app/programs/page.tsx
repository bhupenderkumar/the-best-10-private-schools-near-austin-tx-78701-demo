export default function Programs() {
  return (
    <section className="section">
      ```jsx
// pages/programs.js

import Head from 'next/head';
import Link from 'next/link';

function ProgramsPage() {
  return (
    <div>
      <Head>
        <title>The Best 10 Private Schools | Programs</title>
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
              <Link href="/programs">
                <a>Programs</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Our Programs</h1>
        <section>
          <h2>Academic Programs</h2>
          <ul>
            <li>
              <Link href="/programs/academic/elementary">
                <a>Elementary Education</a>
              </Link>
            </li>
            <li>
              <Link href="/programs/academic/middle-school">
                <a>Middle School Program</a>
              </Link>
            </li>
            <li>
              <Link href="/programs/academic/high-school">
                <a>High School Program</a>
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2>Extracurricular Programs</h2>
          <ul>
            <li>
              <Link href="/programs/extracurricular/arts">
                <a>Arts and Music Programs</a>
              </Link>
            </li>
            <li>
              <Link href="/programs/extracurricular/athletics">
                <a>Athletics and Sports</a>
              </Link>
            </li>
            <li>
              <Link href="/programs/extracurricular/clubs">
                <a>Student Clubs and Organizations</a>
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 The Best 10 Private Schools. All rights reserved.</p>
      </footer>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        section {
          margin-bottom: 20px;
          padding: 20px;
          background-color: #f0f0f0;
          border: 1px solid #ddd;
        }
        h1, h2 {
          margin-top: 0;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin-bottom: 10px;
        }
        a {
          text-decoration: none;
          color: #337ab7;
        }
        a:hover {
          color: #23527c;
        }
      `}</style>
    </div>
  );
}

export default ProgramsPage;
```

This code generates a basic page structure with a header, main content, and a footer. It includes links to other pages and sections within the page using the `Link` component from Next.js. The styles are included as a CSS string using the `style jsx` attribute. This code should be placed in a file named `pages/programs.js` in your Next.js project.
    </section>
  );
}
