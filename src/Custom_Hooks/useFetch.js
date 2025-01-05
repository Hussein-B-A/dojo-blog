
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLeading] = useState(true);
    const [error, setError] = useState(null)

      useEffect(() => {
        const abortContstant = new AbortController();

            fetch(url, {signal: abortContstant.signal})
            .then((res) => {
                if (!res.ok) {
                    throw Error("Could Not Fetch the Data for that Resource")    
                }
               return res.json()
            })
            .then(
                (data) => {
                    setData(data)
                    setIsLeading(false)
                    setError(null)
                }
            )
            .catch((error) => {
                console.log(error);
                
                if(error.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                setIsLeading(false)
                setError(error.message)
                }

            })

            return () => abortContstant.abort();
            
            
      }, [url])

      return {data, isLoading, error}
}

export default useFetch