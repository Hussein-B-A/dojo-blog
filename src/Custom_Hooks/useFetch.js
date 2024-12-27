
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [isLoading, setIsLeading] = useState(true);
    const [error, setError] = useState(null)

      useEffect(() => {
            fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error("Could Not Fetch the Data for that Resource")    
                }
               return res.json()
            })
            .then(
                (data) => {
                    setBlogs(data)
                    setIsLeading(false)
                    setError(null)
                }
            )
            .catch((error) => {
                setIsLeading(false)
                setError(error.message)
            })
      }, [url])

      return {data, isLoading, error}
}

export default useFetch