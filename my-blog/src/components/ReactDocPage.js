import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ReactDocPage() {

  const [info,setInfo] = useState([]);

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchdataaa() {
      const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.docId}`)
      // const result = await res.json();

      return result.data
    }
      fetchdataaa().then(res => {
        setInfo(res)
      })

  },[])

  return (
    <>
    <h5 onClick={() => navigate("/")}>logo</h5>
    <div>ReactDocPage ##{params.docId}</div>
    <div>contents: {info.body}</div>
    </>
  )
}