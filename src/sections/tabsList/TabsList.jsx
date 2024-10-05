import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import data from "../tabsList/data";
import projectData from '../projects/data'
import TabItem from '../../components/TabItem'

const TabsList = ()=>{

    return (<Tabs>
        <TabList>
          {data.map((item)=><Tab>{item}</Tab>)}
        </TabList>

{
                        projectData.map(item => (
                            <TabPanel key={item.id} className="projects__card">
                                <h5>{item.job} - {item.title}</h5>
                                {item.points.length > 0 && 
                                <ul>
                                {item.points.map((point, index)=><li key={index}>{point}</li>)}
                                </ul>}
                                <p className="projects__desc">{item.desc}</p>
                            </TabPanel>
                        ))
                    } 
        
        
      </Tabs>)
}
export default TabsList