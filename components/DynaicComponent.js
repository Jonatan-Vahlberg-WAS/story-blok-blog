import Divider from "./components/Divider"
import Hero from "./components/Hero"
import Navbar from "./components/Nav"
import Newsletter from "./components/Newsletter"
import Page from "./Page"
import Placeholder from "./Placeholder"


const components = {
  page: Page,
  hero: Hero,
  divider: Divider,
  newsletter: Newsletter,
  navbar: Navbar,
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