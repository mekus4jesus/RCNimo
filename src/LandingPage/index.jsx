
import { SliderComponent } from '../Slider'
import { ProgramChange } from '../component/programChange'
import { About } from './About'
import { Words } from './Words'

export const LandingPage = () => {
  return (
    <>
    <main>
      <SliderComponent />
      <About />
      <ProgramChange />
      <Words />
     </main>
    </>
  )
}


