import largeGithubImage from "../images/gitHub-repoLarge.png"
import smallGitHubImage from "../images/gitHub-repoSmall.png"
import javascriptLogo from "../images/javascript-logo.svg"
import largeSaiownImage from "../images/saiown.png"
import smallSaiownImage from "../images/saiown-small.png"
import largeRoboF from "../images/RobotFriends-Large.png"
import smallRoboF from "../images/RobotFriends-small.png"
import reactLogo from "../images/react.png"

const workObject = [
    {
        imageLarge: largeGithubImage,
        imageSmall : smallGitHubImage,
        name : "Github Repo Page",
        text : "Github repository clone built  with Github Graphql API.",
        languageImage1 : javascriptLogo,
        languageName1 : "Javascript",
        languageImage2 : "",
        languageName2 : "",
        link : "https://github-repo-page.netlify.app/",
        id : 1
    },

    {
        imageLarge: largeSaiownImage,
        imageSmall : smallSaiownImage,
        name : "Saiown",
        text : "React app that fetches news data from Hacker News API.",
        languageImage1 : reactLogo,
        languageName1 : "React",
        languageImage2 : "",
        languageName2 : "",
        link : "https://hacker-newsapp.netlify.app/",
        id: 2
    },

    {
        imageLarge: largeRoboF,
        imageSmall : smallRoboF,
        name : "Robot Friends",
        text : "React app that fetches data from an external API",
        languageImage1 : reactLogo,
        languageName1 : "React",
        languageImage2 : "",
        languageName2 : "",
        link : "https://robotfriends-react.netlify.app/",
        id : 3
    }
]

export default workObject