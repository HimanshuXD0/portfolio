import shopeasy from '../../assests/projects/shopeasy.png'
import blessedBasket from "../../assests/projects/blessedbaskets.png"
import crytography from "../../assests/projects/crytography.png"
import kk from "../../assests/projects/kk.png"
import gg from "../../assests/projects/gg.png"
import BG from "../../assests/projects/BG.png"
import cc from "../../assests/projects/cc.png"
export const projectsData =[
    {
        id: 1,
        name: 'Travelific',
        description: "This mern website goal is to provide the platform for traveling enthusiasts and tour and travel agency to commiuncate over each other by providing their requriment and budget respectively • Firstly i designed the idea to implement this approch and start with making ui/ux using reactJS (Used Redux saga state management throught the app) then by following the frontend requirement i wrote the backend in nodejs on express js framework with MongoDB and created the desired secure apis , afterward i made the application live by deploying on render.com • Authentication login/signup (token based API's ) • Scalable/Robust (use MongoDB atlas) • Having admin panel mobile app (written in FLUTTER)",
        tools: ['React Js', 'Redux-Saga', 'Node Js','Javascript' ,'MongoDB Compass','MongoDb Atlas' ,'Postman' ,'Express Js'],
        role: 'Backend',
        code: 'https://github.com/HimanshuXD0/Travelific',
        demo: 'https://travelific.onrender.com/',
        image: blessedBasket,
    },
    {
        id: 2,
        name: 'eKalakaar',
        description: "The eKalakaar App connects traditional Indian artists with opportunities from corporations, NGOs, hotels, and more, empowering them with visibility, fair pay, and skill development. It offers curated performances, supports cultural heritage, and has served top brands. Free to register, eK provides job listings, portfolio tools, and updates for artists.",
        tools: ['Flutter','Dart' ,'Firebase'],
        role: 'Fullstack',
        code: 'https://github.com/eKalakaar20/eKalakaar',
        demo: 'https://play.google.com/store/apps/details?id=com.tanxe.android.ekalakaar_app',
        image: kk,
    },
    {
        id: 3,
        name: 'Groupie',
        description: "The hybrid mobile app is developed using Flutter, leveraging Firebase for cloud storage and enabling authentication through Google. It features a group chatting functionality with real-time updates, ensuring a dynamic and interactive user experience. • Started taking the Architecture of project and start writting the front code followed by bakend integartion • Send and Recieve Data from Server interacted UI/UX",
        tools: ['Flutter', 'Figma', 'Dart','Firebase'],
        role: 'Frontend',
        code: 'https://github.com/HimanshuXD0/Groupie',
        demo: 'https://www.mediafire.com/file/atz5wl1wunkgj71/Groupie.apk/file',
        image: gg,
    },
    {
        id: 4,
        name: 'Newsify',
        description: "Newsify is the news tracking application written in Kotlin 3 yrs back by me it is pure native app for android uses the api to fetch the data from the source and disply it on the recycler view",
        tools: ['Kotlin','Api Consumption'],
        role: 'Fullstack',
        code: 'https://github.com/HimanshuXD0/Newsify',
        demo: 'https://drive.google.com/file/d/18zhyYNf9IY7JGAmU_b7PqyBZ70rwm3oR/view?usp=sharing',
        image: shopeasy,
    },
    {
        id: 5,
        name: 'Ceverything',
        description: "Ceverything is the multi service platform app which provides the bookings of hotel, food, pay bills, Flight Tickets, Hospitality Services on just one platform itself basically it is as of now frontend part only that will showcase my frontend ablity to write the figma file as it is",
        tools: ['Flutter','Dart','Figma'],
        role: 'Frontend',
        code: 'https://github.com/HimanshuXD0/Ceverything',
        demo: 'https://www.mediafire.com/file/4zqzbl7awpnnqx0/Ceverything.apk/file',
        image: cc,
    },
    {
        id: 6,
        name: 'CRM',
        description: "CRM is the Online Work management platform by which employes can work togther without missing the the tasks. Having inbuilt chating functionality to being in the connection on work user can check in check out online by time",
        tools: ['Flutter','Dart','Figma'],
        role: 'Frontend',
        code: 'https://github.com/HimanshuXD0/CRM',
        demo: 'https://drive.google.com/file/d/1jtsZUUNlquDjgFRhJHsDOCillz5msifH/view?usp=sharing',
        image: BG,
    },
]