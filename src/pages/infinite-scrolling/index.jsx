import { useCallback, useEffect, useState } from "react";

let options = {
  rootMargin: "0px",
  threshold: 1,
};

function InfiniteScrolling() {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isIntersecting, setisIntersecting] = useState(false);

  const [observer, setObserver] = useState();

  const hasMore = () => {
    return data.length < 100;
  };

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const commentResponse = await fetch(
          `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`
        );
        const commentData = await commentResponse.json();
        setData((prevState) => [...prevState, ...commentData]);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [limit, page]);

  // option 1

  // useEffect(() => {
  //   if (isIntersecting) {
  //     setPage((prevState) => prevState + 1);
  //     observer.disconnect();
  //   }
  // }, [isIntersecting]);

  const lastItem = useCallback((node) => {
    if (!node) return;
    if (isLoading) return;
    // if (observer.current) observer.current.disconnect();

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        // option 2
        if (entry.isIntersecting && hasMore()) {
          setPage((prevState) => prevState + 1);
          intersectionObserver.unobserve(entry.target);

          // setisIntersecting(entry.isIntersecting);
        }
      },

      options
    );

    intersectionObserver.observe(node);
    setObserver(intersectionObserver);
  }, []);

  return (
    <div>
      <p className="text-center text-6xl font-bold mt-12">Infinite Scrolling</p>

      {
        <div className="mt-12  max-w-screen-xl mx-auto ">
          {data?.map((item, index) => (
            <div
              ref={index === data.length - 1 ? lastItem : null}
              key={item.id}
              className="p-4 mt-8 border flex flex-col gap-y-12 bg-neutral-300"
            >
              <p className="text-3xl font-semibold">
                {item.id} - {item.name}
              </p>
              <p className="text-lg">{item.body}</p>
            </div>
          ))}
        </div>
      }

      <p id="main" className="text-center">
        {isLoading && `loading`}
      </p>
    </div>
  );
}

export default InfiniteScrolling;
