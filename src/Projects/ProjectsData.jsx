//Technologies Logos
//Guideline: Logo Images saved: 140px Tall 16-png transparent background
import github from '../Assets/github-logo.png';
import scrum from '../Assets/agile-scrum-logo.png';
import oop from '../Assets/oop-logo.png';
import linux from '../Assets/linux-logo.png';
import web from '../Assets/web-logo.png';
import react from '../Assets/react-logo.png';
import node from '../Assets/node-logo.png';
import dart from '../Assets/dart-logo.png';
import flutter from '../Assets/flutter-logo.png';
import c from '../Assets/C++-logo.png';
import java from '../Assets/java-logo.png';
import javafx from '../Assets/javafx-logo.png';
import express from '../Assets/express-logo.png';
import slate from '../Assets/slate.png';
import bootstrap from '../Assets/bootstrap.png';
import socket from '../Assets/socket-logo.png';
import android from '../Assets/android-studio-logo.png';
import hooks from '../Assets/hooks.png';
import photoshop from '../Assets/photoshop.png';
import illustrator from '../Assets/illustrator.png';
import pi from '../Assets/raspberry-pi-logo.png';
import redux from '../Assets/redux-logo.png';
import sqlLite from '../Assets/sql-lite-logo.png';

//Carousel Content
//Guidelines: 1280px x 720px == 16:9 ratio
//Note: Vertical Scroll: maxWidth: 1200px
//Send Through https://www.tinypng.com && https://www.videosmaller.com/ && https://www.ilovepdf.com/compress_pdf
import conceptLogin from '../Assets/conceptEnvirnoment-login.png';
import conceptSingle from '../Assets/conceptEnvirnoment-single.png';
import conceptTree from '../Assets/conceptEnvirnoment-tree.png';
import conceptPoster from '../Assets/conceptEnvironmentPoster.png';
import conceptVersion from '../Assets/conceptEnvironment-versionDemo.mp4';
import editorPoster from '../Assets/collaborativeEditorPoster.png';
import editorHeader from '../Assets/fasettoEditor-top.png';
import editorFeatures from '../Assets/fasettoEditor-bottom.png';
import umdAliveProfile from '../Assets/umdAlive-profile.png';
import umdAliveEsports from '../Assets/umdAlive-esports.png';
import umdAliveChess from '../Assets/umdAlive-chess.png';
import umdAliveStories from '../Assets/umdAlive-user-stories.png';
import umdAliveCommits from '../Assets/umdAlive-github-commit-history.mp4';
import mealCatalog from '../Assets/meal-catalog.png';
import mealMeal from '../Assets/meal-meal.png';
import mealMenu from '../Assets/meal-menu.png';
import mealMake from '../Assets/meal-make.png';
import mealError from '../Assets/meal-error.png';
import mealShopping from '../Assets/meal-shopping.png';
import pacmanBoard from '../Assets/pacman-board.png';
import pacmanDemo from '../Assets/pacman-demo.mp4';
import pacmanCharacter from '../Assets/pacman-character.png';
import pacmanEnemy from '../Assets/pacman-enemy.png';
import pacmanScatter from '../Assets/pacman-scatter.png';
import pacmanException from '../Assets/pacman-exceptions.png';
import projectManager from '../Assets/project-manager.png';
import recordManager from '../Assets/record-manager.png';
import projectReference from '../Assets/project-manager-reference.png';
import projectTimer from '../Assets/project-manager-timer-demo.mp4';
import recordFilter from '../Assets/record-manager-filter.png';
import eatMenu from '../Assets/eatMenu.png';
import eatMeal from '../Assets/eatMeal.png';
import eatIngredient from '../Assets/eatIngredient.png';
import eatSettings from '../Assets/eatSettings.png';
import eatEdit from '../Assets/eatEdit.png';
import eatIntro from '../Assets/eatIntro.png';
import eatGenerateScript from '../Assets/eat-generate-script.mp4';
import terrariumControl from '../Assets/terrarium-control.png';
import terrariumPi from '../Assets/terrarium-pi.png';
import terrariumAuthentication from '../Assets/terrarium-authentication.png';
import terrariumHistory from '../Assets/terrarium-history.png';
import terrariumDemo from '../Assets/terrarium-console-demo.mp4';
import terrariumPortalDevices from '../Assets/terrarium-portal-devices.png';
import terrariumPortalTablet from '../Assets/terrarium-portal-tablet.png';
import terrariumPortalError from '../Assets/terrarium-portal-error.png';



//NOTE :: Content must be 16 x 9 ratio
//NOTE :: Content must be image/vertical-scroll of .png/.jpg OR type video of .mp4
//NOTE :: type == 'additional-features' is {target: '', type: 'additional-features', features: ['test feature 1','test feature 2','test feature 3']}
//NOTE :: First Page should be still image for Demo Slideshow

const projects = [ //Target no spaces or Caps
    {target: 'terrarium-portal', title: 'Terrarium Portal', github: 'https://github.com/ethanjohnsrud/terrarium-demo', hours: 150, caption: 'Realtime Environment Management', demo: 'https://terrarium-demo.netlify.app/',
        tech: ['react', 'web', 'node', 'redux', 'sql-lite', 'express', 'photoshop', ],
        pages: [
            {target: 'terrarium-portal-devices', content: terrariumPortalDevices, type: 'image', description: 'Total redesign featuring intuitive graphical interface and modular abstract server design.  Increasing levels of user complexity from immediate toggle buttons, group tags, and detailed scheduling; converging through a priority queue.'},
            {target: 'terrarium-portal-tablet', content: terrariumPortalTablet, type: 'image', description: 'Climate condition and effects are controlled with a raspberry pi.  All settings can be changed remotely stored in JSON file and SQL database.  Depending on the impact, three levels of authentication are required and verified by the server.'},
            {target: 'terrarium-portal-error', content: terrariumPortalError, type: 'image', description: 'When climate conditions are exceeded; server reacts by overriding schedules and display flashes red; if unsuccessful an email is broadcasted prompting intervention.  All user interaction and operational exceptions are recorded in log file.'},
            {target: 'terrarium-portal-additional-features', type: 'additional-features', features: [
                'Dynamic Historical Graph',
                'Control Light Color and Brightness',
                'Special Effect Programs',
                '2D Tracking Camera & Stream'
            ]}
    ]},
    {target: 'concept-environment', title: 'Concept Environment', github: '', hours: 325, caption: 'Fasetto Project: Collaborative Development',
        tech: ['react', 'web', 'node', 'express', 'socket', 'illustrator'],
        pages: [
            {target: 'concept-environment-tree', content: conceptTree, type: 'image', description: 'Fasetto Project: A collaborative place where ideas can be developed and explored.'},
            {target: 'concept-environment-login', content: conceptLogin, type: 'image', description: 'Multiple users can join different sessions and create a mind tree.  Prior to opening a session, users may select a version, revert or branch to a new session. '},
            {target: 'concept-environment-single', content: conceptSingle, type: 'image', description: 'Starting with an original idea, users can expand and grow with more detailed concepts.  Graphically drawing relations provided the needed insight for new innovation.'},
            {target: 'concept-environment-versions', content: conceptVersion, type: 'video', description: 'Special features include Version Control with the ability to view, branch, or revert any version.  For each version, the edit conducted and by whom is recorded for reference.  In addition, ability to Zoom and switch between Map and Hierarchy View, allow for greater accessibility to users.'},
            {target: 'concept-environment-poster', content: conceptPoster, type: 'vertical-scroll', description: 'Conducted crowd-source research for Concept Environment applications, as well as additional requested features.  Also, created a marketing poster to reach a greater audience.'},
    ]},
    {target: 'what-to-eat', title: 'What to Eat?', github: 'https://github.com/ethanjohnsrud/what-to-eat', hours: 350, caption: 'Analytical Optimization and Cost Efficiency',
        tech: ['flutter', 'dart', 'oop', 'illustrator', 'photoshop'],
        pages: [
            {target: 'what-to-eat-intro', content: eatIntro, type: 'image', description: 'Evolution of original Meal Planning JavaFx application, What to Eat?, embodies similar path of Catalog to Menu to Shopping List; but with a focus around recommendations through machine learning.'},
            {target: 'what-to-eat-menu', content: eatMenu, type: 'image', description: 'Meal Recommendations are primarily based on pantry stock, users preferences, and recent menus, with a goal of balancing variety to reduce expenses.  Menu screen displays each day of the menu as a list of meals, each containing a nested list of ingredients.  Each meal accrues expected cost and servings proportionally; in addition to displaying food types fulfilled.  While marking a meal complete, deducts ingredients from pantry; pictured on right.'},
            {target: 'what-to-eat-meal', content: eatMeal, type: 'image', description: 'Catalog view displays meal properties, statistics, and ingredient combinations with alternatives.  Pictured on Right, is summarized Meal selection when manually adding from the Menu.  Likewise, throughout the application \'Name Tags\' for information and controls can be removed for a more condensed and slick interface; pictured in blue text, center vs left.'},
            {target: 'what-to-eat-ingredient', content: eatIngredient, type: 'image', description: 'Ingredients Catalog as well as Pantry, operate reusing the same display and sorting management view as Meals.  Menu Items and Pantry on right, are linked back to the Catalog to reduce duplicate information and properties.   Displayed along the bottom are sorting toggle buttons with options including: cost, popularity, recent, pantry quantity, pantry expiration date, protein, carbohydrate, vegetable, fruit, sweet.'},
            {target: 'what-to-eat-setting', content: eatSettings, type: 'image', description: 'Intentionally, no App Bar is included for a cleaner interface with scrolling lists.  App Drawer retrieved from swiping right contains easy navigation to sections as well as settings toggles.  Furthermore, when entering settings for feature pictured left; a partial bottom popup is implemented, as opposed to traditionally navigating  to a separate page.  This helps the user not get taken away from the main screen and maintain focus.  Similarity, the smooth user flow of the Shopping List on right, provides easily accessible price tracking and unit management.'},
            {target: 'what-to-eat-edit', content: eatEdit, type: 'image', description: 'Edit Screens for: ingredients, meals, pantry items, menus, menu days, menu meals, and menu items; themselves all are uniform tile layouts.  All properties are viewable and editable in this easy to access format.  Using the most '},
            {target: 'what-to-eat-generate-script', content: eatGenerateScript, type: 'video', description: 'Created a nodejs script to read an Excel CSV file and export as a Dart object List.  This was a challenging process to negate special characters against Excel\'s formatting,  supporting a variety of attribute types: from numbers, to dates, to embedded lists of strings.  However once successful, the script proved to be effective at operating universally for all varieties of objects for production and testing purposes.'},
            {target: 'what-to-eat-additional-features', type: 'additional-features', features: [
                'Integrated Calorie Tracking',
                'Simplified Shopping List with Gesture Integration',
                'Leftovers Management within Pantry',
                'Searching and Barcode Scanning',
                'Notification Reminders and Prompts',
                'Firebase Cloud Management'
            ]}
    ]},
    {target: 'project-manager', title: 'Project Manager', github: 'https://github.com/ethanjohnsrud/project-manager', hours: 100, caption: 'Development Planning and Bug History',
        tech: ['react', 'web', 'node', 'express', 'socket', 'oop', 'illustrator'],
        pages: [
            {target: 'project-manager', content: projectManager, type: 'image', description: 'Nested structure of projects, tasks, and entries; enables detailed goal outlining and progress tracking.  Additionally calculates and subtotals accumulated time spent into corresponding project value.'},
            {target: 'project-manager-records', content: recordManager, type: 'image', description: 'Personal Stack Overflow, as a digital record keeping resource for future projects.  For big and small reoccurring issues, by making a note I can easily and efficiently look up the solution or reference; as opposed to going through an old code base or relearning through documentation which can be quite time consuming.'},
            {target: 'project-manager-filter', content: recordFilter, type: 'image', description: 'Project Manager can filter with tags for technologies and also search through text.  Smart search algorithm awards higher ranking to a match of a tag or title as opposed to deep in the description.'},
            {target: 'project-manager-reference', content: projectReference, type: 'image', description: 'Solved, yet troubling entries can be sent over to the records side automatically.  Linking to the original, instantly creates a new record, includes a copy of the entry, and stack trace to where occurred in Project Manager.'},
            {target: 'project-manager-timer', content: projectTimer, type: 'video', description: 'Project Manager includes a timer to record entries of time spent on tasks.  This allows more accurate time tracking for evaluation analysis and direct feature valuing.'},
            {target: 'project-manager-additional-features', type: 'additional-features', features: [
                'Advanced Text Styling: bold, italic, underline, color, highlighting',
                'Markup Language Styling Support',
                'Image and Code Embedding',
                'Move to Cloud Based Hosting',
                'Mobile App: TO-DO List Style Interface',
                'Export project stats to PDF report'
            ]}
    ]},
    {target: 'umd-alive', title: 'UMD Alive', github: 'https://github.com/ethanjohnsrud/UMD-Alive-Software-Engineering-3541/', hours: 100, caption: 'School Club Organization and Messaging',
    tech: ['agile', 'android', 'java'],
    pages: [
        {target: 'umd-alive-profile', content: umdAliveProfile, type: 'image', description: 'Agile Scrum Team Oriented Project as apart of Software Engineering Class.   Our team\'s core features include school google authentication login, club event postings, and inter club messaging.'},
        {target: 'umd-alive-chess', content: umdAliveChess, type: 'image', description: 'Club administrator has the power to moderate club chat, by deleting any or all messages among members.  They also have the power to post upcoming club events and manage membership.'},
        {target: 'umd-alive-esports', content: umdAliveEsports, type: 'image', description: 'Conversely, members of a club have limited control; only being able to delete their own messages in the chat.  Also viewing upcoming events and the club members list.'},
        {target: 'umd-alive-stories', content: umdAliveStories, type: 'vertical-scroll', description: ''},
        {target: 'umd-alive-commits', content: umdAliveCommits, type: 'video', description: 'Our team used github version control to manage our project files.  I became familiar with git commands, practicing frequent commits, and managing version conflicts.'},
    ]},
    {target: 'terrarium-control', title: 'Terrarium Control', github: 'https://github.com/ethanjohnsrud/project-manager', hours: 50, caption: 'Automation and Remote API Control', demo: 'https://terrarium-control-demo.netlify.app/',
        tech: ['pi', 'web', 'node', 'express', 'photoshop'],
        pages: [
            {target: 'terrarium-control-control', content: terrariumControl, type: 'image', description: 'Responsive and Pure HTML and CSS user interface.  Controls device outlets through express server and API interface.  Manages terrarium environment based on sensor readings and analysis.'},
            {target: 'terrarium-control-pi', content: terrariumPi, type: 'image', description: 'Server runs off a Raspberry Pi, controlling power through GPIO regulated switches.  Learned principles of electricity and hardware design.'},
            {target: 'terrarium-control-console', content: terrariumDemo, type: 'video', description: 'Terrarium conditions and settings are displayed through an animated console.'},
            {target: 'terrarium-control-authentication', content: terrariumAuthentication, type: 'image', description: 'Email alerts when conditions reach beyond a threshold and responsive actions failed to stabilize conditions.  Also, API password authentication against environment managed variables.'},
            {target: 'terrarium-control-history', content: terrariumHistory, type: 'image', description: 'History recorded and summarized for conditions and events at regular scheduled intervals.'},
            {target: 'terrarium-control-additional-features', type: 'additional-features', features: [
                'AI Voice Control',
                'Display and Control Console',
                'Network Security Integration',
                'Graph Trend Analysis',
                'Machine Learning Trends for accurate predictions during hardware failure',
            ]}
    ]},
    {target: 'gravity-editor', title: 'Gravity Editor', github: '', hours: 70, caption: 'Fasetto Project: Rich Text Editor',
        tech: ['react', 'hooks', 'web', 'slate', 'illustrator'],
        pages: [
            {target: 'gravity-editor-header', content: editorHeader, type: 'image', description: 'Fasetto Project: Fasetto Collaborative Text Editor enables users of the Gravity Platform to construct, share, and amend documents.  Fasetto Editor allows multiple users to simultaneously edit documents with real-time data syncing.  This will empower users to develop business documents directly on the Gravity system during meeting presentations and conference calls; drastically raising productivity and efficiency in the workplace.'},
            {target: 'gravity-editor-features', content: editorFeatures, type: 'image', description: 'Text styling features were achieved through first isolating and tagging a group of characters, before applying styling.  Gained an in-depth experience using Slate-js framework and API interface.  Parsed and interpreted nodes (text block sections) and leaves (character strings) to achieve desire styling.'},
            {target: 'gravity-editor-poster', content: editorPoster, type: 'vertical-scroll', description: ''},
            {target: 'gravity-editor-additional-features', type: 'additional-features', features: [
                'Hyperlinks, Tables, Video Embedding',
                'Local Image Upload',
                'Version Control and Undo / Redo',
                'Document Controls: owner, users, edit tracking',
            ]}
    ]},
    {target: 'meal-planning', title: 'Meal Planner', github: 'https://github.com/ethanjohnsrud/meal-planning', hours: 250, caption: 'Menu Building and Shopping List Generation',
        tech: ['java', 'javafx', 'oop'],
        pages: [
            {target: 'meal-planning-catalog', content: mealCatalog, type: 'image', description: 'A complex Meal Planning application; comprised of a catalog list of meals and ingredients, formed into a Menu, and sent to a corresponding Shopping List.'},
            {target: 'meal-planning-meal', content: mealMeal, type: 'image', description: 'All the properties of a meal may be changed for new and editing purposes.'},
            {target: 'meal-planning-menu', content: mealMenu, type: 'image', description: 'Menu development screen is designed for ingredients and meals to be organized for easy menu assembly.  Second section checkboxes mark menu meals for new items to be inserted.  Similarity, letter indicators specify meal catagories fulfilled.'},
            {target: 'meal-planning-make', content: mealMake, type: 'image', description: 'Make Meals enables meals to be preassembled with multiple ingredients before inserting into the menu.  Also incorporated random and recommended meal suggestions. Meal recommendations are based on popularity ranking and time since last used.'},
            {target: 'meal-planning-shopping', content: mealShopping, type: 'image', description: 'Shopping List displays quantified ingredients from meals in the current menu.  Quantities may be adjusted, items removed, and custom items added to the shopping list.  When Menu is exported, the shopping list is adhered to the text document for printing.'},
            {target: 'meal-planning-error', content: mealError, type: 'image', description: 'Created a variety of pop-up notifications for confirmations and verifications.  For instance, all try-catch statements report to a global error displaying method, which gives a description and location trace.  Errors can then be dismissed individually or exported to a dedicated log for later handling.'},
    ]},
    {target: 'pacman', title: 'Pac-Man', github: 'https://github.com/ethanjohnsrud/pac-man', hours: 150, caption: 'Terminal Based Game with Complex Strategy',
        tech: ['c++', 'linux', 'oop'],
        pages: [
            {target: 'pacman-board', content: pacmanBoard, type: 'image', description: 'Pac-Man was the first large project I completed outside of class in a C++ terminal.  I studied the logic of the games original designers\' to best replicate the classic game, while also making it my own.'},
            {target: 'pacman-demo', content: pacmanDemo, type: 'video', description: 'Unique approach for UI, the board completely reprints after every play.  In replicating the original game, enemies pursue a few spaces ahead of the player, resulting in a checkmate style takedown.  Also, in accordance with historic game play, the enemies alternate between chase and scatter modes at difficultly based intervals.'},
            {target: 'pacman-character', content: pacmanCharacter, type: 'image', description: 'Introduction with game control commands, options to activate statistics, and ability to set difficulty which determines the number of enemies and their speed for each level.  Player entered \‘w\’ for upwards, the program proceeds in verifying the  location for  obstructions like board walls or another enemy character; since successful the character is moved and the coin is collected, replacing the previous location with an empty space.'},
            {target: 'pacman-enemy', content: pacmanEnemy, type: 'image', description: 'I Developed an AI algorithm and that could have multiple instantiations while operating independently. Enemies move in the same fashion as the character, in testing locations before advancing.  Furthermore, after a new enemy is created it follows preset movements to spread out before beginning the chase.'},
            {target: 'pacman-scatter', content: pacmanScatter, type: 'image', description: 'Chase vs Scatter Mode: The game play is compromised of continuously switching back and forth between chase mode and scatter mode.  The intervals are based on the games set difficulty.  Similarly, Enemies scatter away from the character in the same fashion, from their target location; during bonus-time, after a cherry is eaten.'},
            {target: 'pacman-exception', content: pacmanException, type: 'image', description: 'Enemy Movement Exceptions: Due to the nature of the Pac-Man board, there are a lot of caverns the enemies get stuck while in direct pursuit of their target.  The solution is executing preset routines to get out of the position and continue their pursuit of the character.  The second set of exceptions #19-26 are related to the character and enemy matching in same vertical column or horizontal row.  Provides preset movements to allow the enemy to go around and continue perusing the character.'},
    ]},
];


//Technologies Logo
const technologies = new Map();
technologies.set('github', {title: 'Git Hub', link: 'https://github.com/', icon: github, background: 'var(--grey)'});
technologies.set('agile', {title: 'Agile Scrum', link: 'https://www.scrum.org/resources/what-is-scrum', icon: scrum, background: 'var(--grey)'});
technologies.set('oop', {title: 'Object Oriented Programming', link: 'https://searchapparchitecture.techtarget.com/definition/object-oriented-programming-OOP', icon: oop, background: 'var(--grey)'});
technologies.set('linux', {title: 'Linux Environment', link: 'https://www.linux.org/', icon: linux, background: 'var(--grey)'});
technologies.set('web', {title: 'JavaScript HTML CSS', link: 'https://www.ecma-international.org/', icon: web, background: 'var(--grey)'});
technologies.set('react', {title: 'React JS', link: 'http://reactjs.org', icon: react, background: 'var(--grey)'});
technologies.set('node', {title: 'Node JS', link: 'https://nodejs.org/en/', icon: node, background: 'var(--grey)'});
technologies.set('flutter', {title: 'Flutter', link: 'https://flutter.dev/', icon: flutter, background: 'var(--grey)'});
technologies.set('dart', {title: 'Dart', link: 'https://dart.dev/', icon: dart, background: 'var(--grey)'});
technologies.set('c++', {title: 'C++', link: 'https://www.cplusplus.com/', icon: c, background: 'var(--grey)'});
technologies.set('java', {title: 'Java', link: 'https://www.java.com/en/', icon: java, background: 'var(--grey)'});
technologies.set('javafx', {title: 'JavaFX', link: 'https://openjfx.io/', icon: javafx, background: 'var(--grey)'});
technologies.set('socket', {title: 'Socket.IO', link: 'https://socket.io/', icon: socket, background: 'var(--grey)'});
technologies.set('express', {title: 'Express-js', link: 'https://expressjs.com/', icon: express, background: 'var(--grey)'});
technologies.set('slate', {title: 'Slate-js', link: 'https://docs.slatejs.org/', icon: slate, background: 'var(--grey)'});
technologies.set('bootstrap', {title: 'Bootstrap', link: 'https://getbootstrap.com/', icon: bootstrap, background: 'var(--grey)'});
technologies.set('android', {title: 'Android Studio', link: 'https://developer.android.com/studio/', icon: android, background: 'var(--grey)'});
technologies.set('hooks', {title:'React Hooks', link: 'https://reactjs.org/docs/hooks-overview.html', icon: hooks, background: 'var(--grey)'});
technologies.set('photoshop', {title:'Adobe Photoshop', link: 'https://www.adobe.com/products/photoshop.html', icon: photoshop, background: 'var(--grey)'});
technologies.set('illustrator', {title:'Adobe Illustrator', link: 'https://www.adobe.com/products/illustrator.html', icon: illustrator, background: 'var(--grey)'});
technologies.set('pi', {title: 'Raspberry Pi', link: 'https://www.raspberrypi.org/about/', icon: pi, background: 'var(--grey)'});
technologies.set('redux', {title: 'Redux', link: 'https://react-redux.js.org/', icon: redux, background: 'var(--grey)'});
technologies.set('sql-lite', {title: 'SQL Lite', link: 'https://www.sqlite.org/features.html', icon: sqlLite, background: 'var(--grey)'});


export {projects, technologies};
