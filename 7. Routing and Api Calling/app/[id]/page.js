"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const page = ({ params }) => {
  const { id } = params;

  const [users, setUsers] = useState([]);
  const getUser = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/"+id);
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return <>{JSON.stringify(users)}</>;
};

export default page;
