import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../tabsList/react-tabs.css';
import '../tabsList/tabsList.css'
import data from "../tabsList/data";
import projectData from '../projects/data'
import TabItem from '../../components/TabItem'

const TabsList = ()=>{

    return (
    
    <section>
      <div className="tabsList__container">
    <Tabs>
        <TabList>
          {data.map((item)=><Tab>{item}</Tab>)}
        </TabList>

{
                        projectData.map(item => (
                            <TabPanel key={item.id} className="tabsList__card">
                                <h5>{item.job} - {item.title}</h5>
                                <p className="tabsList__desc">{item.desc}</p>
                                {item.tech.length > 0 && 
                                <div  className="tabsList__cloud">
                                {item.tech.map((point)=><span key={point}>{point}</span>)}
                                </div>}
                            </TabPanel>
                        ))
                    } 
        
        
      </Tabs></div></section>)
}
export default TabsList