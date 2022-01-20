import React, { useState, useEffect } from "react";
import DynamicComponent from "../components/DynaicComponent";
import Layout from "../components/Layout";

import Storyblok, { useStoryblok } from "../utils/Storyblok";

const Page = ({
  story,
  preview,
  locale,
  locales,
  defaultLocale,
  global_data,
}) => {
  const enableBridge = true;
  story = useStoryblok(story, enableBridge, locale);

  return (
    <Layout
      data={global_data}
      locale={locale}
      locales={locales}
      defaultLocale={defaultLocale}
      story={story}
    >
      <DynamicComponent blok={story.content} story={story} />
    </Layout>
  );
};

export async function getStaticProps({
  locale,
  locales,
  defaultLocale,
  params,
  preview = false,
}) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: "draft", // or "published"
    resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
    language: locale,
  };

  if (preview) {
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  let global_data = await Storyblok.get(`cdn/stories`, {
    ...sbParams,
    starts_with: "global",
  });

  console.log(global_data);

  return {
    props: {
      story: data ? data.story : false,
      preview,
      locale,
      locales,
      defaultLocale,
      global_data: {
        header: global_data.data.stories?.[0] || null,
      },
    },
    revalidate: 3600, // revalidate every hour
  };
}

export async function getStaticPaths({ locales }) {
  let { data } = await Storyblok.get("cdn/links/");

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");
    if (slug === "home") splittedSlug = false;

    // create additional languages
    for (const locale of locales) {
      paths.push({ params: { slug: splittedSlug }, locale });
    }
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export default Page;
