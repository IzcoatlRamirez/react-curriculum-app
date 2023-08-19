import '../App.css'

interface CircleSkillProps {
    text: string;
  }

const CircleSkill = ({ text }: CircleSkillProps) => {
  return (
    <div className="circle">
        <div className='text-prop'>
            {text}
        </div>
    </div>
  )
}

export default CircleSkill