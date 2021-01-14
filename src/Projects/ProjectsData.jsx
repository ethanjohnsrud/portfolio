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
import umdAliveStories from '../Assets/umdAlive-user-stories.jpg';
import umdAliveCommits from '../Assets/umdAlive-github-commit-history.mp4';
import mealCatalog from '../Assets/meal-catalog.png';
import mealMeal from '../Assets/meal-meal.png';
import mealMenu from '../Assets/meal-menu.png';
import mealMake from '../Assets/meal-make.png';
import mealError from '../Assets/meal-error.png';
import mealShopping from '../Assets/meal-shopping.png';

//NOTE :: Content must be 16 x 9 ratio
//NOTE :: Content must be image/vertical-scroll of .png/.jpg OR type video of .mp4

const projects = [ //Target no spaces or Caps
    {target: 'concept-environment', title: 'Concept Environment', github: '', hours: 300,
        tech: ['react', 'web', 'node', 'express', 'socket'],
        pages: [
            {target: 'concept-environment-slide1', content: conceptTree, type: 'image', description: 'Fasetto Project: A collaborative place where ideas can be developed and explored.'},
            {target: 'concept-environment-slide2', content: conceptLogin, type: 'image', description: 'Multiple users are can join different sessions and create a mind tree.  Prior to opening a session, users may select a version, revert or branch to a new session. '},
            {target: 'concept-environment-slide3', content: conceptSingle, type: 'image', description: 'Starting with an original idea, users can expand and grow with more detailed concepts.  Graphically drawing relations provided the needed insight for new innovation.'},
            {target: 'concept-environment-slide4', content: conceptVersion, type: 'video', description: 'Special features include Version Control with the ability to view, branch, or revert any version.  For each version, the edit conducted and by whom is recorded for reference.  In addition, ability to Zoom and just between Map and Hierarchy View, allow for greater accessibility to users.'},
            {target: 'concept-environment-slide5', content: conceptPoster, type: 'vertical-scroll', description: 'Conducted crowd-source research for Concept Environment applications, as well as additional requested features.  Also, created a marketing poster to reach a greater audience.'},
    ]},
    {target: 'gravity-editor', title: 'Gravity Editor', github: '', hours: 70,
        tech: ['react', 'web', 'slate'],
        pages: [
            {target: 'gravity-editor-slide1', content: editorHeader, type: 'image', description: 'Fasetto Project: Fasetto Collaborative Text Editor enables users of the Gravity Platform to construct, share, and amend documents.  Fasetto Editor allows multiple users to simultaneously edit documents with real-time data syncing.  This will empower users to make changes to papers and form directly on the Gravity system during meeting presentations and conference calls raising productivity and efficiency in the workplace.'},
            {target: 'gravity-editor-slide2', content: editorFeatures, type: 'image', description: 'Gained in depth experience using Slate-js framework and API interface.  Parsed and interpreted nodes (text block sections) and leaves (character strings) to achieve desire styling.'},
            {target: 'gravity-editor-slide4', content: editorPoster, type: 'vertical-scroll', description: ''},
    ]},
    {target: 'meal-planning', title: 'Meal Planner', github: '', hours: 250,
        tech: ['java', 'javafx'],
        pages: [
            {target: 'meal-planning-slide1', content: mealCatalog, type: 'image', description: 'A complex Meal Planning application; comprised of a Catalog list of meals and ingredients, which can then be formed together into Meals to become apart of a Menu.  Menus can be saved, loaded, and sent to a corresponding Shopping  List to be generated.'},
            {target: 'meal-planning-slide2', content: mealMeal, type: 'image', description: 'Displays all the properties of a meal for new and editing purposes.  Ingredients can be added or removed; as well as: ID #, Name, and boolean properties may be set.'},
            {target: 'meal-planning-slide3', content: mealMenu, type: 'image', description: 'Displays the current menu, selected from drop down menu.  Checkboxes select meal to add selected catalog meal to, and indicators display nutrition contents in each meal.'},
            {target: 'meal-planning-slide4', content: mealMake, type: 'image', description: 'Displays meals drop down categories of packable vs dining, and combines appropriate meal combinations including of a fruit, vegetable, carbohydrate base, and protein.  Sorting is based on popularity ranking and time since last used.  Then selects five meals by: first meal from top 20%, second top 40%...fifth meal from all meals.  Same method for corresponding vegetable and fruit.  This elevates preferences while also promoting variety.'},
            {target: 'meal-planning-slide5', content: mealShopping, type: 'image', description: 'Displays quantified ingredients from meals in the current menu.  Quantities may be adjusted, items removed and custom items added to the shopping list.  When Menu is exported, the shopping list is adhered to the text document for printing.'},
            {target: 'meal-planning-slide6', content: mealError, type: 'image', description: 'Created a variety of pop-up notifications for confirmations and verifications.  All catch statements report to error displaying method, which gives a description and location method originated.  Errors can then be dismissed individually or exported to a dedicated  error log text file with a note for later handling.'},
    ]},
    {target: 'umd-alive', title: 'UMD Alive', github: 'https://github.com/ethanjohnsrud/UMD-Alive-Software-Engineering-3541/', hours: 100,
        tech: ['agile', 'android', 'java'],
        pages: [
            {target: 'umd-alive-slide1', content: umdAliveProfile, type: 'image', description: 'Agile Scrum Team Oriented Project as apart of Software Engineering Class.   Our team  Core features include school google authentication login, club event postings, and inter club messaging.'},
            {target: 'umd-alive-slide2', content: umdAliveChess, type: 'image', description: 'Club administrator has the power to moderate club chat, by deleting any or all messages among members.  They also have the power to post upcoming club events and manage membership.'},
            {target: 'umd-alive-slide3', content: umdAliveEsports, type: 'image', description: 'Conversely, members of a club have limited control only being able to delete their own messages in the chat.  However, they are able to view upcoming events and the club members list.'},
            {target: 'umd-alive-slide4', content: umdAliveStories, type: 'vertical-scroll', description: ''},
            {target: 'umd-alive-slide5', content: umdAliveCommits, type: 'video', description: 'Our team used github version control to manage our project files.  I became familiar with git commands, practicing frequent commits, and managing version conflicts.'},

    ]},


];
export default projects;