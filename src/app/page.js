

import Aboutastro from "@/components/main/aboutastro/page"
import Clientsays from "@/components/main/clientsay/page"
import Dailyroutine from "@/components/main/dailyroutine/page"
import Expert from "@/components/main/expert/page"
import Header from "@/components/main/header/page"
import Ourservice from "@/components/main/ourservice/page"
import Pricepack from "@/components/main/pricepack/page"
import Whychoose from "@/components/main/whychoose/page"
export default function Home() {
  return (
   <>
   <Header/>
   <Aboutastro />
        <Whychoose />
        <Ourservice/>
        <Dailyroutine/>
        <Expert />
        <Pricepack />
        <Clientsays />
   </>
  )
}
