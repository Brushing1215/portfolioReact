import React from 'react';
import Groovy from '../../images/groovy.PNG'
import Projects from '../projects'
import quiz from '../../images/quiz.PNG'
import planner from '../../images/planner.PNG'
const projects=[
    {
        name: 'Groovy Music App',
        deployed:'https://andrewpaulgreer.github.io/Project1/',
        github: 'https://github.com/andrewpaulgreer/Project1',
        image:Groovy
    },
    {
        name: 'Quiz Stack',
        deployed:'https://quiz-stack.herokuapp.com/',
        github: 'https://github.com/graysondeese/QuizStack',
        image:quiz
    },
    {
        name: 'Day Planner App',
        deployed:'https://brushing1215.github.io/dayplanner/',
        github: 'https://github.com/Brushing1215/dayplanner',
        image:planner
    },
    {
        name: 'Groovy Music App',
        deployed:'https://andrewpaulgreer.github.io/Project1/',
        github: 'https://github.com/andrewpaulgreer/Project1',
        image:Groovy
    },
    {
        name: 'Groovy Music App',
        deployed:'https://andrewpaulgreer.github.io/Project1/',
        github: 'https://github.com/andrewpaulgreer/Project1',
        image:Groovy
    },
    {
        name: 'Groovy Music App',
        deployed:'https://andrewpaulgreer.github.io/Project1/',
        github: 'https://github.com/andrewpaulgreer/Project1',
        image:Groovy
    },
]
    




const Portfolio =()=>{
    return(

        <div className="container mt-5">
            <div className="row">
                {
                    projects.map(project=><Projects project={project}/>)
                }
            </div>
        </div>
    )
}
export default Portfolio