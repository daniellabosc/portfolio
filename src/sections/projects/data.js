import {FaAward} from 'react-icons/fa'
import {TbBooks} from 'react-icons/tb'
import {BiHappyHeartEyes} from 'react-icons/bi'


const data = [
    {id: 1, icon: <FaAward/>, job:'Rocket Mortgage', title: 'Software Engineer', 
        points:["Worked with React to build and maintain applications",
            "Used HTML/CSS to customize the appearance of bots including responsive design",
            "Built lambdas and services in Node on AWS",
            "Worked within Sharepoint to build and style Einstein bots",
            "Used Terraform to build servers and Circle CI for deployments"],
    desc: 'As part of a high-performance team of talented engineers I worked on chat and SMS applications using Node, React, AWS, Salesforce and Watson. I also worked with HTML and CSS to customize the appearance of a bot, and when maintaining our internal management application. A primary focus of this work is to capture and share lead data with our partners. Our apps also determined how to best serve the customer when making direct transfers from the chat client to a live agent. ',
    tech:['React', 'HTML', "CSS", 'Node', 'AWS', "Salesforce"]
    },
    {id: 2, icon: <TbBooks/>, job: 'Tixora', title: 'Software Engineer', 
    points: ["Worked with Angular on an application",
"Used HTML/CSS to customize the UI and build responsive views",
"Consumed and built API endpoints",
"Customized an import script in Javascript",
"Used SQL and Sequilize",
"Integrated a payment system using Node"],
    
    desc: 'As a contractor for this startup company, I worked with Angular, Node, and Google Cloud. I was instrumental in making changes and updates to the React application which serves as a portal for agency users of the system. This involved integrating data from API calls which I implemented on the front-end and built on the back-end. I was also involved in adding new payment systems capabilities to the application. ',
    tech: ["Angular", "HTML", "CSS", "Node", "Google Cloud", "SQL", "Sequelize"]},
    {id: 3, icon: <BiHappyHeartEyes/>, title: 'Frontend Developer', job: 'Switch', 
    points:["Worked with Vue and Vuex on several applications",
"Used HTML/CSS to customize the UI and build responsive views",
"Integrated Quasar components"
        ],
    
    desc: 'During my time at Switch I worked with a dynamic group of engineers to build front-end applications for this company. I was responsible for building and maintaining software created with Vue and Vuex. I built views using CSS, SASS and Responsive Design and implemented API consumers in the front-end of the application. I customized and used design components from Quasar. I also worked on the Customer Portal, DCIM, and Intranet projects. I was also the team lead on the Customer Portal project. ',
    tech: ["Vue", "Vuex", "HTML", "CSS"]},
    {id: 4, icon: <BiHappyHeartEyes/>, title: 'Software Engineer', job: 'Responsive Software', 
    points:["Worked with React on several applications",
"Worked with Angular on several application",
"Used HTML/CSS to customize the UI and create responsive views",
"Built API's with Node and PHP",
"Wrote backend code in PHP",
"Built and utilized MySQL databases",
"Consumed API calls",
"Used JQuery and Bootstrap"],
    
    desc: 'As the owner of this design studio, I had the opportunity to work with a number of technologies across multiple front-end and full stack applications. I worked with a high degree of autonomy to handle customer requirements while working directly with them. The tech stacks ranged from JQuery to Angular and React for front-end, to Node and PHP for back-end. I also worked with MySQL and Mongo.  For responsive design I often used Bootstrap.',
    tech:["React", "Angular", "Node", "SQL", "PHP"]}
      
]



    export default data;