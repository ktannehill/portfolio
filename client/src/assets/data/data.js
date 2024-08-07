import phase1LG from '../images/phase1LG.jpg'
import phase1MD from '../images/phase1MD.jpg'
import phase1SM from '../images/phase1SM.jpg'
import phase2LG from '../images/phase2LG.jpg'
import phase2MD from '../images/phase2MD.jpg'
import phase2SM from '../images/phase2SM.jpg'
import phase3LG from '../images/phase3LG.jpg'
import phase3MD from '../images/phase3MD.jpg'
import phase3SM from '../images/phase3SM.jpg'
import phase4LG from '../images/phase4LG.jpg'
import phase4MD from '../images/phase4MD.jpg'
import phase4SM from '../images/phase4SM.jpg'
import phase5LG from '../images/phase5LG.jpg'
import phase5MD from '../images/phase5MD.jpg'
import phase5SM from '../images/phase5SM.jpg'

const PROJECTS = [
    {
        'id': 1,
        'images': [phase1LG, phase1MD, phase1SM],
        'title': 'Community Events Calendar',
        'summary': 'A dynamic, community-driven events calendar powered by vanilla JavaScript. Users can effortlessly browse upcoming happenings, update their RSVP status, and even create new events - all within a seamless single-page experience.',
        "link": "https://github.com/joeylee08/phaseoneproject",
        "highlights": [
            "Developed a fully functional events calendar with view, create, edit, and RSVP functionality",
            "Implemented JavaScript event listeners and DOM manipulation for an intuitive, interactive UI",
            "Leveraged JSON Server for real-time data persistence and attendance tracking",
            "Empowered users with advanced filtering and sorting capabilities to easily navigate events",
            "Demonstrated strong collaboration and time management to deliver a polished app despite team changes"
        ],
        'description': [
            "During our first deep dive into JavaScript at Flatiron School, my teammate and I set out to create a single-page web app that would make it a breeze for community members to stay in the loop on upcoming events. With just a week to work our magic, we leveraged vanilla JS, DOM manipulation, and the power of JSON Server to deliver a dynamic, user-friendly calendar packed with functionality.", 
            "As the more experienced designer of the pair, I took the lead on crafting a clean, responsive interface using CSS Grid, complete with a handy sticky header to keep navigation easy. My teammate and I then got to work fetching our events data, sorting by date, and rendering them as custom cards - allowing users to easily browse, filter, and toggle their RSVP status for each happening.",
            "But we didn't stop there. Drawing on our newfound JavaScript skills, we implemented a suite of interactive features powered by slick event listeners. Users could dive into event details via pop-up modals, and even create their own events to share with the community. And thanks to our trusty db.json file, all of these updates were persisted in real-time, keeping our calendar fresh and up-to-date.",
            "Though we faced the challenge of losing our third teammate, my partner and I pushed forward, leveraging strong communication and collaboration to deliver a polished, functional SPA that we're incredibly proud of. This project not only solidified our JavaScript prowess, but also our ability to work through adversity and ship quality products under tight timelines."
        ],
        'tech': ['JavaScript', 'json-server', 'CSS', 'HTML'],
    },
    {
        'id': 2,
        'images': [phase2LG, phase2MD, phase2SM],
        'title': 'Puppy PlayDate',
        'summary': 'A React-powered app that puts a delightful spin on matchmaking - this time, for our four-legged friends. Puppy PlayDate connects pet owners, facilitating furry playdates and fostering joyful connections between pups and their humans.',
        "link": "https://github.com/anthonyBosek/puppyPlayDate",
        "highlights": [
            "Developed a dynamic, reusable form component that conditionally rendered for creating new pet profiles or updating existing ones",
            "Implemented full CRUD functionality using a JSON Server and RESTful API",
            "Leveraged React Router to provide seamless in-app navigation for users",
            "Integrated MUI Snackbars to deliver friendly, readable error handling",
            "Facilitated effective communication and collaboration within the development team"
        ],
        'description': [
            "During a fast-paced, one-week project sprint, my team and I set out to create a dynamic single-page application using React, React Router, and JSON Server. We decided to develop a fun dog socialization platform inspired by the beloved (or not) dating app, Tinder.", 
            "With the project requirements in hand, we got to work building out our vision for what we dubbed Puppy PlayDate. The goal was to leverage React and React Router to craft a seamless, engaging user experience where pet owners could create profiles for their furry friends, browse potential playmates, and manage their matches with ease. And of course, we had to make sure to implement GET and POST functionality using our JSON Server.",
            "As part of the development team, I contributed to various aspects of bringing Puppy PlayDate to life. One of the areas I really focused on was designing and implementing a dynamic, reusable form component. This bad boy could conditionally render, allowing owners to create brand new pet profiles or quickly update existing ones, while smoothly handling all the necessary POST and PATCH requests to our API.",
            "Additionally, when communication challenges arose within the team, I took it upon myself to facilitate collaborative discussions, ensuring everyone's contributions were heard and valued. With the support of my partners, I also integrated some handy MUI Snackbars for providing friendly, readable error handling - no confusing error messages here!",
            "Through our collective efforts, we successfully delivered a robust, polished dog socialization application that exceeded expectations. By going above and beyond by incorporating full CRUD functionality, we created a truly engaging user experience. The final presentation of our project was a hit, impressing both our peers and instructor with its technical oompf and fun, user-friendly execution.",
            "This project provided invaluable insights into effective communication and collaboration, reinforcing the importance of maintaining a supportive, productive team dynamic - even when the timeline is tight. I'm proud of what we accomplished and grateful for the opportunity to work alongside such a talented group."
        ],
        'tech': ['React', 'React Router', 'JavaScript', 'Material-UI (MUI)', 'bcrypt', 'Yup', 'json-server', 'CSS'],
    },
    {
        'id': 3,
        'images': [phase3LG, phase3MD, phase3SM],
        'title': 'The Zen of Jeopardy',
        'summary': 'Experience the thrill of the classic TV game show Jeopardy, now brought to life in your command line interface! Test your knowledge, select categories, and keep score as you navigate this interactive trivia adventure.',
        "link": "https://github.com/zachtalmadge/the-zen-of-jeopardy",
        "highlights": [
            "Recreate the excitement and challenge of the iconic game show Jeopardy in a Command Line Interface (CLI) format.",
            "Engage players with interactive menus, category selection, real-time question answering, and scorekeeping, simulating the authentic Jeopardy experience.",
            "Enhance the visual aesthetics and user experience with custom styling using the Rich library, adding nostalgia and fun to the terminal.",
            "Implemented database functionality to keep track of game progress, ensuring users can seamlessly continue playing where they left off."
        ],
        'description': [
            "For our Phase 3 project, my team decided to develop a captivating command-line game inspired by the classic TV show Jeopardy. With just a week to bring our vision to life, we set out to create an engaging and immersive gaming experience that would showcase our newfound Python skills.", 
            "At the core of our app was a SQLite3 database that stored all the game data and user profiles, allowing players to pick up right where they left off, even after closing the app. To handle this data storage and retrieval, we leveraged Object-Relational Mapping (ORM) techniques, defining Python classes to represent key game entities like Categories, Questions, and Players.",
            "But our goal wasn't just to meet the project requirements – we wanted to craft a truly enjoyable CLI experience. So we put a ton of thought into designing an intuitive interface and implementing engaging game mechanics that would keep players hooked. From category selection to answering questions and tracking scores, every aspect was carefully crafted to bring the thrill of Jeopardy into the command line.",
            "To enhance the user experience, we designed a friendly CLI interface with interactive menus and input validation. We utilized the Rich library to emulate the look and feel of the Jeopardy board, creating a fun and visually appealing experience for players. Throughout the development process, we iteratively refactored our codebase to improve readability and maintainability, ensuring scalability for future enhancements.",
            "The culmination of our efforts resulted in The Zen of Jeopardy!, a CLI game that encapsulated the excitement of the beloved TV show. Despite initial challenges in collaboration and version control on Git and GitHub, we persevered and overcame these hurdles, learning valuable lessons in teamwork and project management along the way. Through this experience, we not only honed our technical skills but also strengthened our ability to work collaboratively in a team setting. Some ideas for expansion include allowing users to play multiple different games, and creating their own Jeopardy categories and questions."
        ],
        'tech': ['Python', 'SQLite', 'Rich', 'Git'],
    },
    {
        'id': 4,
        'images': [phase4LG, phase4MD, phase4SM],
        'title': 'CovenCraft',
        'summary': 'Discover an enchanting world where witches gather to explore magickal crafts and forge connections. Save your favorite creations and join a community united by creativity and camaraderie.',
        "link": "https://github.com/Reilly-737/CovenCraft",
        "highlights": [
            "Engineered Flask-SQLAlchemy backend for efficient data management and RESTful routes.",
            "Implemented bcrypt password hashing for secure user authentication.",
            "Employed Formik and Yup for robust frontend form validation and data integrity.",
            "Utilized React Router for intuitive navigation between platform sections.",
            "Crafted responsive web design with CSS Flexbox, Grid, and enchanting custom transitions."
        ],
        'description': [
            "Our coven of developers was driven by a collective passion for crafting and creativity when we set out on a week-long sprint to develop CovenCraft - an enchanting social platform built for the modern witch community. What started as a simple idea for a crafting website quickly took on a life of its own as we imbued it with mystical vibes, creating a vibrant virtual hub for witches to connect over magickal crafts.", 
            "Our mission was to design and develop a robust Flask API backend paired with an intuitive React frontend to form the technical foundation for CovenCraft's world of witchcraft. Guided by the project specs, we aimed to craft an immersive user experience complete with smooth navigation, solid backend capabilities, and a responsive frontend look that even muggles couldn't resist.",
            "We channeled our full-stack skills into brewing up the backend architecture, utilizing Flask-SQLAlchemy to define data models, serve up RESTful routes, and implement secure user authentication using bcrypt password hashing. With an eye for detail, we ensured data integrity through comprehensive form validation powered by Formik and Yup.",
            "For the frontend, we summoned React Router to guide users through CovenCraft using intuitive navigation. CSS Flexbox and Grid enabled us to achieve responsive web design, while custom CSS transitions added a touch of enchantment to the user experience.",
            "CovenCraft emerged as a bewitching social platform, inviting witches to explore magickal crafts and forge community connections. It stands as a testament to our collective vision and determination, marking a significant milestone in our developer journey. Through blending Flask and React, we delivered a polished product that I hope becomes a haven for witches seeking inspiration and camaraderie.",
            "Building CovenCraft proved to be a valuable learning experience, marking my entry into the realm of full-stack development. Overcoming challenges such as circular imports, database model design, and frontend-backend integration pushed me to expand my technical skills and problem-solving abilities. This project not only added some new entries to my technical spellbook but also honed my collaborative skills, reinforcing the importance of teamwork in achieving our goals.",
            "Looking ahead, our roadmap includes implementing a commenting system to inspire collaboration, as well as empowering witches to share their own creations with the whole community. With an emphasis on inclusive, positive moderation practices, we're committed to nurturing an enriching environment where all feel welcome."
        ],
        'tech': [
            'React', 'Python', 'Flask-SQLAlchemy', 'Formik', 'Yup', 'bcrypt', 'React Router', 'JavaScript', 'CSS (Flexbox, Grid)'
        ],
    },
    {
        'id': 5,
        'images': [phase5LG, phase5MD, phase5SM],
        'title': 'Paws-ibilities Rescue',
        'summary': "Empower volunteers, connect pets, and make a difference! Explore adoptable pets, sign up for events, and foster meaningful connections with this full-stack web app. Join us in creating paw-sitive impacts, one rescue at a time.",
        "link": "https://github.com/ktannehill/pawsibilitiesRescue",
        "highlights": [
            "Streamlined user interactions with easy-to-use forms and error handling, powered by Formik and Yup.",
            "Enhanced user experience with smooth navigation and seamless data management, utilizing Redux state management.",
            "Ensured data integrity and security with robust backend validations implemented using Marshmallow.",
            "Improved user engagement through automated email notifications for account verification and event updates, integrated via Flask-Mail.",
            "Committed to best coding practices, following principles of efficiency and maintainability with adherence to DRY and SOLID principles."
        ],
        'description': [
            "As a long-time animal lover who spent years working in vet clinics, I wanted to combine my passions for pets and coding into one nifty project. With my family's involvement in pet rescues providing ample inspiration, I decided to create a full-stack web app to connect volunteers with rescue fur-babies and adoption events.", 
            "For my final solo capstone project at Flatiron, I needed to implement a Flask/SQLAlchemy backend with complex database relationships, build a React frontend with routing and state management, integrate full CRUD functionality following RESTful conventions, and integrating new technologies beyond the curriculum. Rather than just checking boxes, I channeled my creative vision into a compelling concept.", 
            "I dreamed up Paw-sibilities Rescue - and I had just three weeks to design, develop and deploy this full-stack application from the ground up. To tackle this, I first meticulously architected a multi-model SQLAlchemy database with a robust many-to-many relationship seamlessly managing volunteer registrations across events.", 
            "On the frontend, I constructed a snazzy React interface with client-side routing and Redux state management between components. But I wanted to exceed the basic specs and unleash my full creativity.", 
            "By independently integrating Flask-Mail, I enabled automated email communications for user verification and event notifications - a self-taught feature significantly enhancing engagement. I also implemented thorough Marshmallow data validation and error handling throughout.", 
            "The result was the successful launch of Paw-sibilities Rescue to rave reviews praising the responsive design and robust features uniting the pet rescue community. This allowed me to showcase not just my full-stack talents, but also my drive to create purposeful applications that have a positive real-world impact.", 
            "And I'm just getting started! I'm envisioning enhancements like password resets, foster request flows, and easy image upload for all the cute pup pics. Because if coding can help more rescue pets find forever homes, you can bet I'm ready to recruit my technical savviness for that cause."
        ],
        'tech': [
            "React", "Flask-SQLAlchemy", "Redux", "Marshmallow", "Flask-Mail", "Mailtrap", "PostgreSQL", "Render", "React Router", "bcrypt", "JavaScript", "Material-UI (MUI)", "HTML/CSS", "Node.js"
        ],
    }
]

export default PROJECTS