import { useState } from "react"
import { ICountries } from "../interfaces"
import { Link } from "react-router-dom"



type arrType = string[];
const regionArr: arrType = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']



const Home = ({ data }: { data: ICountries[] }) => {
  const [value, setValue] = useState<string>('')
  const [filtred, setFiltred] = useState<ICountries[]>([])
  const [select, setSelect] = useState(false)
  const [region, setRegion] = useState('')


  const FilteredItem = data.filter((item) => item.region.includes(region)).filter(el => el.name.toLowerCase().includes(value));


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.toLowerCase())
  }


  const filterByCountry = () => {
    setFiltred(FilteredItem)
  }

  const selectRegion = () => {
    setSelect(!select)
  }


  const selectRegionByName = (id: string) => {
    setRegion(id)
    setFiltred(FilteredItem)
  }



  return (
    <section className="main w-full flex items-center justify-center text-[var(--light-mode-text)] dark:bg-[var(--dark-bg-color)] dark:text-[var(--text-color)]">
      <section className="container px-3 flex justify-between flex-col md:max-w-[1200px] ">
        <div className="search-inner w-full flex flex-col gap-12 md:flex-row md:justify-between mb-10">
          <div className="input-inner relative md:w-[39%] ">
            <img
              onClick={filterByCountry}

              className="input-search absolute top-4 left-10 w-4 h-5" src="/assets/search.svg" alt="" />
            <input
              onChange={handleChange}
              className="input w-full py-3 pl-20 bg-[var(--text-color)] rounded-md border-none outline-none dark:bg-[var(--article-color)] dark:text-[var(--text-color)]" type="text" placeholder="Search for a country" />
          </div>
          <div
            onClick={selectRegion}

            className="search-wrapper md:w-[17.16%] relative">
            <div className="filter-inner w-[65.24%] bg-[var(--text-color)] py-3 px-[27px] 
          flex flex-row items-center justify-between rounded-md text-base md:w-full dark:bg-[var(--article-color)]">
              <div className="filter text-sm">
                {filtred.length > 0 ? region : <span>Filter by region</span>}

              </div>
              <img style={{
                transform: `rotate(${select ? '180deg' : '0deg'})`,
                transition: 'transform 0.5s ease'
              }}
                className="arrow w-3 h-3" src="/assets/arrow.svg" alt="" />
            </div>
            {select ? (
              <div className="filter-card flex flex-col gap-1.5 absolute top-[53px] py-5 pl-6 left-0  w-[65.24%] rounded-md z-10 shadow-lg bg-[var(--text-color)] md:w-full dark:bg-[var(--article-color)] dark:text-[var(--text-color)]">
                {
                  regionArr.map((el, i) => (
                    <h3
                      onClick={() => selectRegionByName(el)}
                      key={i} id={el} className="region text-sm">{el}</h3>
                  ))
                }
              </div>
            )
              : null}
          </div>
        </div>
        <section className="card-wrapper w-full] flex flex-col items-center  gap-[45px]  md:flex-row md:justify-between
             md:items-center md:flex-wrap md:gap-2 md:gap-y-16 ">

          {
            FilteredItem.length > 0 && (

              FilteredItem.map((item) => (
                <Link to={`/${item.name}`} key={item.name}>
                  <article className="card flex flex-col w-full rounded-md overflow-hidden items-center shadow-lg bg-[var(--text-color)] hover:scale-95 duration-300 md:max-w-[265px] dark:bg-[var(--article-color)] dark:text-[var(--text-color)]">
                    <div className="card flex flex-col w-fullrounded-md overflow-hidden items-center md:max-w-[265px]">
                      <img className="fleg bg-green w-[280px] h-[177px] md:w-full" src={item.flags.svg} alt={`Flag of ${item.name}`} />
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
            )


          }


        </section>
      </section>
    </section >
  )
}

export default Home
