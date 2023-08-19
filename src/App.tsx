import Name from "./components/Name"
import Role from "./components/Role"
import Greeting from "./components/Greeting"
import Picture from "./components/Picture"
import CircleSkill from "./components/CircleSkill"
import ContacInformation from "./components/ContacInformation"

function App() {
  return (
    <div className='bg-neutral-200 h-screen flex flex-col'>
     <div className="h-1/4">
      <Name/>
      <Role/>
     </div>
     <div className="h-3/4 flex flex-row">
      <div className="w-1/4">
      <Picture/>
      <ContacInformation/>
      </div>
      <div className="w-3/4 ml-14">
      <Greeting/>
      <div className="h-2/5 flex flex-row">
      <CircleSkill text='Tensorflow 90%'/>
      <CircleSkill text="Pytorch 85%"/>
      <CircleSkill text="Scikit-Learn: 90%"/>
      </div>
      <div className="w-4/5">
      <div className="text-yellow-500">Education:</div>

      Master's Degree in Computer Science, Stanford University, [Year]
      Bachelor's Degree in Electrical Engineering, Massachusetts Institute of Technology (MIT), [Year]
      Currently pursuing a Ph.D. in Machine Learning, University of California, Berkeley
      </div>
      <div className="w-3/4">
      <div className="text-yellow-500"> Work Experience:</div>

      Data Scientist at [Meta], [2019]
      Developed predictive models to optimize customer targeting, resulting in a 15% increase in sales.
      Collaborated with cross-functional teams to deploy machine learning solutions in production.
      </div>
      <div className="w-4/5">
      <div className="text-yellow-500"> Project Experience:</div>

        Image Recognition System, [2022]
            Implemented a convolutional neural network for image classification achieving 90% accuracy.
        Sentiment Analysis App, [2020]
            Developed a web app using Flask that performs sentiment analysis on user-generated text.
      </div>
      
      </div>


     </div>
    </div>
  )
}

export default App
