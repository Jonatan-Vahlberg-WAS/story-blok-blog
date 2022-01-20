import SbEditable from "storyblok-react"
import DynamicComponent from "./DynaicComponent"

const Page = ({blok, story}) => {

  return <SbEditable content={blok}>
    <main>
      {blok.body ? blok.body.map(blok => (
        <DynamicComponent
          blok={blok}
          key={blok._uid}
          story={story}
        />
      )): null}
    </main>
  </SbEditable>
}

export default Page