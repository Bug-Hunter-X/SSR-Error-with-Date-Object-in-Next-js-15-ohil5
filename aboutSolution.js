```javascript
// pages/aboutSolution.js

export async function getServerSideProps(context) {
  const date = new Date();
  return {
    props: {
      date: date.toLocaleString(),
    },
  };
}

export default function About({ date }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>Current date and time: {date}</p>
    </div>
  );
}
```