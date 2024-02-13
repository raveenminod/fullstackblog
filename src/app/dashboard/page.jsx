import React, { useEffect, useState } from 'react';
import styles from './page.module.css';

const Dashboard = () => {

  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/", {
        next: { revalidate: 10 },
      });

      //Hanndle error
      if (!res.ok) {
        setErr(true);
      }

      const data = await res.json();

      setData(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard