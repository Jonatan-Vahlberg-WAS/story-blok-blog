
import React from "react";
import Link from "next/link";

export default function CustomLink(props) {
  const { href, as, ariaLabel, externalLink, children, className, ...rest } =
    props;

  const splitCachedUrl = (href) => {
    if (href !== "/") {
      let realSlug;
      const splittedUrl = href.split("/");
      realSlug = splittedUrl.filter((item) => item !== "" && item !== "en");
      return realSlug.join("/");
    }
    return "/";
  };

  return (
    <Link href={externalLink ? href : splitCachedUrl(href)} as={as} {...rest}>
      <a
        className={className}
        target={externalLink ? "_blank" : null}
        rel={externalLink ? "noopener" : null}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    </Link>
  );
}