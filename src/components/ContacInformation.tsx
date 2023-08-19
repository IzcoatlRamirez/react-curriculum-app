import gitIcon from '../assets/bxl-github.svg'
import phoneIcon from '../assets/bx-phone.svg'
import flag from '../assets/3253493-flag-mexico-icon_106775.svg'
import eng from '../assets/eng_5309804.png'
import esp from '../assets/language_9890886.png'

function ContacInformation() {
  return (
    <div className="ml-40 mt-6 ">
    <div>Age : 20 years old</div>
    <br></br>
    <div className='flex flex-col'>
        <div className='flex flex-row mt-2'>
            <img src={gitIcon}></img>
            <a href='https://github.com/IzcoatlRamirez'>Github:Overview</a>
        </div>
        
        <div className='flex flex-row mt-2'>
            <img src={phoneIcon}></img>
            <a href='https://github.com/IzcoatlRamirez'>Phone:1596253174</a>
        </div>

        <div className='flex flex-row mt-2'>
            <img src={flag} className='w-8 h-8'></img>
            <a href='https://github.com/IzcoatlRamirez'>Nationality:Mexican</a>
        </div>

        <div className='flex flex-row mt-2'>
            <img src={eng} className='w-8 h-8'></img>
            <a href='https://github.com/IzcoatlRamirez'>English 50%</a>
        </div>

        <div className='flex flex-row mt-2'>
            <img src={esp} className='w-8 h-8'></img>
            <a href='https://github.com/IzcoatlRamirez'>Espanish 100%</a>
        </div>

        <div className='text-lg mt-2 mb-2'>References:</div>

        <div>John Smith, Data Science Manager, john.smith@example.com</div>
        <div>Emily Johnson, Machine Learning Researcher, emily.johnson@example.com</div>

    </div>

    </div>

  )
}

export default ContacInformation