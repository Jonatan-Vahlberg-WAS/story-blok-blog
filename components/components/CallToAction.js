import Link from "next/link"


const CallToAction = ({blok}) => {
  return (
    <Link href={blok.link.cached_url}>
      <a className="mt-3 bg-white px-3 py-2 rounded font-semibold">{blok.title}</a>
    </Link>
  )
}

export default CallToAction