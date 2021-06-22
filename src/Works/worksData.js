import largeGithubImage from "../images/gitHub-repoLarge.png"
import smallGitHubImage from "../images/gitHub-repoSmall.png"
import javascriptLogo from "../images/javascript-logo.svg"
import largeBlogImage from "../images/projectImage-large.png"
import smallBlogImage from "../images/projectImage-small.png"
import djangoLogo from "../images/django.png"
import largeRoboF from "../images/RobotFriends-Large.png"
import smallRoboF from "../images/RobotFriends-small.png"
import reactLogo from "../images/react.png"

const workObject = [
    {
        imageLarge: largeGithubImage,
        imageSmall : smallGitHubImage,
        name : "Github Repo Page",
        text : "Github repository clone built  with Github Graphql api",
        languageImage1 : javascriptLogo,
        languageName1 : "Javascript",
        languageImage2 : "",
        languageName2 : "",
        link : "https://github-repo-page.netlify.app/",
        id : 1
    },

    {
        imageLarge: largeBlogImage,
        imageSmall : smallBlogImage,
        name : "Devlo",
        text : "Blog built with Django a Python framework",
        languageImage1 : djangoLogo,
        languageName1 : "Django",
        languageImage2 : "",
        languageName2 : "",
        link : "http://tammibriggs-blog.herokuapp.com/",
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