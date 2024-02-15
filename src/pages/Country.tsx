import { useNavigate, useParams } from "react-router-dom"
import { ICountries } from "../interfaces"




const Countries = ({ data }: { data: ICountries[] }) => {

  const navigate = useNavigate();
  const params = useParams()




  const paramsName = data.find((el) => el.name === params.name)

  console.log(paramsName)


  const returnToHome = () => {
    navigate('/')
  }




  return (
    <section className='w-full text-[var(--light-mode-text)]  md:max-w-[1200px] dark:text-[var(--text-color)]'>

      <button
        onClick={returnToHome}

        className="bg-[var(--text-color)] w-[140px] flex flex-row items-center justify-center gap-2 py-[10px] rounded-sm shadow-md hover:scale-95 hover:border border-[var(--light-mode-input)] mx-[5%]
       mb-[120px] md:mb-[73px] md:mx-3 dark:bg-[var(--article-color)]">
        <img className="w-[17px] h-[12px]" src="/assets/back.svg" alt="" />
        <span>Back</span>
      </button>



      <div className="countryes-inner w-full flex flex-col items-center 
      md:flex-row md:gap-[100px]">

        <div className="fleg px-[20px] w-[89%] h-[200px] mb-[90px]   md:flex-1 md:w-[520px] md:h-[360px]">


          <img className="rounded-md overflow-hidden md:w-[520px] md:h-[360px]" src={paramsName?.flags.svg} alt="" />

        </div>



        <div className="text flex flex-col w-[79%] md:flex-1">
          <h2 className="text-2xl font-bold mb-[26px]">{paramsName?.name}</h2>

          <div className="flex flex-col gap-[70px] text-inner mb-[70px] md:flex md:flex-row md:gap-[1px] ">
            <div className="text-one flex flex-col gap-1.5 md:flex-1">

              <div className="font bold">Native Name:  {paramsName?.nativeName}</div>
              <div className="font-bold">Population: {paramsName?.population}</div>
              <div className="font bold">Region: {paramsName?.region} </div>
              <div className="font bold">Sub Region: {paramsName?.subregion}</div>
              <div className="font bold">Capital {paramsName?.capital} </div>

            </div>

            <div className="text-two text-one flex flex-col gap-1.5 md:flex-1">
              <div className="font bold">Top Level Domain: {paramsName?.topLevelDomain?.[0]}</div>
              <div className="font bold">Currencies: {paramsName?.currencies?.[0].name}</div>
              <div className="font bold">Languages: {paramsName?.languages?.[0].name}</div>

            </div>

          </div>

          <div className="border-countryes flex flex-col gap-2 mb-[100px] md:items-center md:flex-row md:gap-2 md:justify-between">
            <div className="font-bold text-sm md:w-[160px]">Border Countryes: </div>

            <div className=" w-full flex flex-row flex-wrap gap-2">
              {paramsName?.borders
                ?
                paramsName.borders.map((el: string, i: number) => (
                  <span key={i} className="bg-[var(--text-color)] px-7 py-1.5 rounded-sm text-sm shadow-md dark:bg-[var(--article-color)]">{el}</span>

                ))


                : <span className="text-left">No border Countrty</span>}

            </div>






          </div>


        </div>

      </div>



    </section>
  )
}

export default Countries

