import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import Bio from './bio/page'
import Projects from './bio/projects'
import Skills from './bio/skills'

export default function App() {
  return (
    <Fragment>

<Bio/>

<Projects/>



<Skills/>

    </Fragment>
  )
}
