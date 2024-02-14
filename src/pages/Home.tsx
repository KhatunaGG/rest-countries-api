import { useState } from "react"
import { ICountries } from "../interfaces"
import { Link } from "react-router-dom"



const Home = ({ data }: { data: ICountries[] }) => {
  const [value, setValue] = useState<string>('')
  const [filtred, setFiltred] = useState<ICountries[]>([])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }


  const filterByCountry = (itemname: string) => {
    setFiltred(data.filter((item) => item.name.toLowerCase().includes(itemname)))
  }


  return (
    <section className="main w-full flex items-center justify-center">
      <section className="container px-3 flex justify-between flex-col md:max-w-[1200px] ">
        <div className="search-inner w-full flex flex-col gap-12 md:flex-row md:justify-between mb-10">
          <div className="input-inner relative md:w-[39%] ">
            <img
              onClick={() => filterByCountry(value)}

              className="input-search absolute top-4 left-10 w-4 h-5" src="/assets/search.svg" alt="" />
            <input
              onChange={handleChange}
              className="input w-full py-3 pl-20 bg-[var(--article-color)] rounded-md border-none outline-none" type="text" placeholder="Search for a country" />
          </div>


          <div className="search-wrapper md:w-[17.16%] relative">
            <div className="filter-inner w-[65.24%] bg-[var(--article-color)] py-3 px-[27px] 
          flex flex-row items-center justify-between rounded-md text-base md:w-full">
              <div className="filter text-sm">Filter by region</div>
              <img className="arrow w-3 h-3" src="/assets/arrow.svg" alt="" />
            </div>

            {/* <div className="filter-card flex flex-col gap-1.5 absolute top-[53px] py-5 pl-6 left-0  w-[65.24%] rounded-md z-10 bg-[var(--article-color)] md:w-full">
            <h3 className="region text-sm">Africa</h3>
            <h3 className="region text-sm">America</h3>
            <h3 className="region text-sm">Asia</h3>
            <h3 className="region text-sm">Europe</h3>
            <h3 className="region text-sm">Oceania</h3>
          </div> */}

          </div>



        </div>



        <section className="card-wrapper w-full] flex flex-col items-center  gap-[45px]  md:flex-row md:justify-between
             md:items-center md:flex-wrap md:gap-2 md:gap-y-16 ">

          {/* {
            data.map((item) => (
              <Link to={`/country/${item.name}`} key={item.name}>
                <article className="card flex flex-col w-full rounded-md overflow-hidden items-center bg-[var(--article-color)] hover:scale-95 duration-300 md:max-w-[265px]">
                  <div className="card flex flex-col w-fullrounded-md overflow-hidden items-center md:max-w-[265px]">
                    <img className="fleg bg-green w-[280px] h-[177px] md:w-[267px]" src={item.flags.svg} alt={`Flag of ${item.name}`} />
                    <div className="info  w-[266px] h-[200px]  pl-[30px] pt-[30px]">
                      <h2 className="text-2xl font-bold mb-[20px]">{item.name}</h2>
                      <h4 className="mb-1">Population: {item.population}</h4>
                      <h4 className="mb-1">Region: {item.region}</h4>
                      <h4 className="mb-1">Capital: {item.capital}</h4>
                    </div>

                  </div>
                </article>
              </Link>
            ))
            
            } */}

          {filtred.length > 0

            ?
            filtred.map((item) => (
              <Link to={`/${item.name}`} key={item.name}>
                <article className="card flex flex-col w-full rounded-md overflow-hidden items-center bg-[var(--article-color)] hover:scale-95 duration-300 md:max-w-[265px]">
                  <div className="card flex flex-col w-fullrounded-md overflow-hidden items-center md:max-w-[265px]">
                    <img className="fleg bg-green w-[280px] h-[177px] md:w-[267px]" src={item.flags.svg} alt={`Flag of ${item.name}`} />
                    <div className="info  w-[266px] h-[200px]  pl-[30px] pt-[30px]">
                      <h2 className="text-2xl font-bold mb-[20px]">{item.name}</h2>
                      <h4 className="mb-1">Population: {item.population}</h4>
                      <h4 className="mb-1">Region: {item.region}</h4>
                      <h4 className="mb-1">Capital: {item.capital}</h4>
                    </div>

                  </div>
                </article>
              </Link>
            ))


            :

            data.map((item) => (
              <Link to={`/${item.name}`} key={item.name}>
                <article className="card flex flex-col w-full rounded-md overflow-hidden items-center bg-[var(--article-color)] hover:scale-95 duration-300 md:max-w-[265px]">
                  <div className="card flex flex-col w-fullrounded-md overflow-hidden items-center md:max-w-[265px]">
                    <img className="fleg bg-green w-[280px] h-[177px] md:w-[267px]" src={item.flags.svg} alt={`Flag of ${item.name}`} />
                    <div className="info  w-[266px] h-[200px]  pl-[30px] pt-[30px]">
                      <h2 className="text-2xl font-bold mb-[20px]">{item.name}</h2>
                      <h4 className="mb-1">Population: {item.population}</h4>
                      <h4 className="mb-1">Region: {item.region}</h4>
                      <h4 className="mb-1">Capital: {item.capital}</h4>
                    </div>

                  </div>
                </article>
              </Link>
            ))



          }






        </section>



      </section>



    </section >
  )
}

export default Home
