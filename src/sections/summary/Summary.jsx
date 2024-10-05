import '../summary/summary.css'
import data from './data'

const Summary = ()=>{

        return (
            <div id="home" data-aos="fade-in">
                <div className="container summary__container">
                    <ul>
                        {data.map((item, index)=>{
                            if(index%2===0){
                               return <li key={item}>{item}</li>
                            }                            
                            })}
                    </ul>
                    <ul>
                        {data.map((item, index)=>{
                            if(index%2!==0){
                               return <li key={item}>{item}</li>
                            }                            
                            })}
                    </ul>
                </div>
          </div>
        )
}

export default Summary