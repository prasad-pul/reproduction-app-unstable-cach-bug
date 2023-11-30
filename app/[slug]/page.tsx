import { unstable_cache } from "next/cache"

const _getOutput = async (slug: string) => {
    if (Number(slug) === 1) {
        return slug
    } else {
        return undefined
    }


}

const getOutput = unstable_cache(_getOutput, ["test-unstable-cache"], {
    revalidate: 10
})
 
export default async function Slug({ params }: { params: { slug: string } }) {

    const output = await getOutput(params.slug)
    return (
      <>
      <ul>
      <li><pre>Input Slug: <em><b>{params.slug}</b></em></pre></li>
      <li><pre>Output: <em><b>{output ?? "undefined"}</b></em></pre></li>
      </ul>

    </>
    )
  }