
import { PageLoading } from '../Skeleton/PageLoading'
import { SliderComponent } from '../Slider'
import { ProgramChange } from '../component/programChange'
import { About } from './About'
import JoinUs from './JoinUs'
import { Words } from './Words'

export const LandingPage = () => {
  return (
    <>
    <PageLoading>
        <main>
            <SliderComponent />
            <About />
            <ProgramChange />
            <Words />
            <JoinUs />
        </main>
     </PageLoading>
    </>
  )
}


