import React from 'react';
import Groovy from '../../images/groovy.PNG'
import Projects from '../projects'
import quiz from '../../images/quiz.PNG'
import planner from '../../images/planner.PNG'
/* import port from '../../images/port.JPG' */
import burger from '../../images/burger.PNG'
import fit from '../../images/fit.PNG'
import code from '../../images/code.PNG'
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
        name: 'Node Handlebars App',
        deployed:'https://dry-mountain-01547.herokuapp.com/?id=5ef5136dea57c80018fa1ed0',
        github: 'https://github.com/Brushing1215/handlebarsHW',
        image:burger
    },
    {
        name: 'Fitness Tracker App',
        deployed:'https://andrewpaulgreer.github.io/Project1/',
        github: 'https://github.com/Brushing1215/fitnessTrackerHW',
        image:fit
    },
    {
        name: 'Code Quiz',
        deployed: 'https://brushing1215.github.io/Codequiz/',
        github: 'https://github.com/Brushing1215/Codequiz',
        image:code
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