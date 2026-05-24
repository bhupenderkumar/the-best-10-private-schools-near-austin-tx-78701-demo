export default function Download() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import styles from '../styles/Download.css';

function DownloadPage() {
  return (
    <>
      <Head>
        <title>The Best 10 Private Schools - Download</title>
        <meta name="description" content="Download information about The Best 10 Private Schools" />
        <meta name="keywords" content="private schools, austin, texas" />
      </Head>

      <div className={styles.container}>
        <h1>The Best 10 Private Schools - Download</h1>

        <h2>Download Our Information Packet</h2>
        <p>Get the latest information about our school, including academics, extracurriculars, and admissions.</p>

        <h2>Available Downloads:</h2>
        <ul>
          <li>
            <a href="#" className={styles.button}>
              Information Packet (PDF)
            </a>
          </li>
          <li>
            <a href="#" className={styles.button}>
              Admissions Application (PDF)
            </a>
          </li>
          <li>
            <a href="#" className={styles.button}>
              Tuition and Fees (PDF)
            </a>
          </li>
        </ul>

        <h2>Contact Us:</h2>
        <p>
          If you have any questions or would like to schedule a tour, please feel free to contact us at:
          <br />
          <span>info@best10privateschools.com</span>
        </p>
      </div>
    </>
  );
}

export default DownloadPage;
```

```css
/* styles.css */
.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #3e8e41;
}
```

This is a basic implementation of a download page for The Best 10 Private Schools. It includes a title, a brief description, and links to download available information packets. It also includes a contact section with an email address. The CSS styles are included in the `styles.css` file.
    </section>
  );
}
