import Blogpost from "./Blogpost"
import AuthorBlock from "./components/Author"
import Bloglist from "./components/Bloglist"
import Divider from "./components/Divider"
import Hero from "./components/Hero"
import Navbar from "./components/Nav"
import Newsletter from "./components/Newsletter"
import Page from "./Page"
import Placeholder from "./Placeholder"


const components = {
  page: Page,
  blogpost: Blogpost,
  hero: Hero,
  divider: Divider,
  newsletter: Newsletter,
  navbar: Navbar,
  blog_list: Bloglist,
  author: AuthorBlock
}

const DynamicComponent = ({blok}) => {
  const Component = components?.[blok?.component]

  if(Component){
    return <Component
      blok={blok}
    />
  }

  return <Placeholder componentName={blok.component}/>
}


export default DynamicComponent