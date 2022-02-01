import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Storyblok from "../../utils/Storyblok";
import BlogListitem from "./BlogListitem";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Bloglist = ({ blok }) => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (blok) {
      const featured = blok.featured;
      const sbParams = {
        version: "draft", // or "published"
        language: router.locale,
        filter_query: {
          featured: {
            is: "true",
          },
        },
      };
      if (!featured) {
        delete sbParams.filter_query;
      }
      Storyblok.get(`cdn/stories/`, {
        ...sbParams,
        starts_with: "posts",
      })
        .then((response) => {
          setPosts(response.data.stories);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(true);
          console.warn("ERROR", err);
        });
    }
  }, [blok]);

  return (
    <Wrapper>
      {posts?.map((item) => (
        <BlogListitem key={item.uid} post={item} />
      ))}
    </Wrapper>
  );
};

export default Bloglist;
