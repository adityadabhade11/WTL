
import { useEffect, useState } from "react";
import axios from "axios";

function DataFetcher() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                );

                setData(response.data);
            } catch (err) {
                setError("Error fetching data. Please try again.");
                setData([]);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    return (
        <div className="posts-container">
            <h2>Posts from API</h2>

            {loading && <p className="loading">Loading...</p>}

            {error && <p className="error">{error}</p>}

            {!loading && !error && (
                <ul className="posts-list">
                    {data.map((item) => (
                        <li key={item.id} className="post-card">
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DataFetcher;
