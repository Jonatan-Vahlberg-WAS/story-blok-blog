import Navbar from "./Navbar";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  max-width: 900px;
  margin: 32px auto;

  @media (max-width: 1200px) {
    margin: 32px auto;
    padding-right: 16px;
  }
`;

const Layout = ({ children, data, locale, locales, story }) => {
  
  return (
    <>
      {data && (
        <LayoutWrapper className="container mx-auto">
          <Navbar
            header={data.header.content}
            locale={locale}
            locales={locales}
            story={story}
          />
          {children}
        </LayoutWrapper>
      )}
    </>
  );
};

export default Layout;
