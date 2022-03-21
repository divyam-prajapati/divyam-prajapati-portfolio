import React from 'react'
import './projects.css' 
import FR from '../../assets/projects/FR.png'
import WM from '../../assets/projects/WM.png'
import ET from '../../assets/projects/ET.png'


const Projects = () => {
  return (
    <div className='portfolio__projects section__padding' id='projects'>
      <div className='portfolio__projects-content'>
        <h1 className='gradient__text'>
          Projects
        </h1>
        <div>

          <div className='portfolio__projects-content-container'>
            <div className='portfolio__projects-content-img'>
              <img src={FR} alt="FR"/>
            </div>
            <div className="portfolio__projects-content-body">
              <p>
                <b>Face Recognition & QR Based Checkins System</b><br/><br />
                It was our 5<sup>th</sup> semester minor project in which we made a web app using Django, it is a security checkins system which can be used at events, meetings, seminars, etc .
              </p>
              <a href="https://github.com/divyam-prajapati/checkins.git" className='button'  target="__blank">
              https://github.com/divyam-prajapati/checkins.git 
              </a>
            </div>
          </div>

          <div className='portfolio__projects-content-container'>
            <div className='portfolio__projects-content-img'>
              <img src={WM} alt="WM"/>
            </div>
            <div className="portfolio__projects-content-body">
              <p>
                <b>Wealth Manager</b><br/><br />
                It was our 4<sup>th</sup> semester mini project in which we made a web app using Django, It is a money tracking application which can help you manage your income, expenses and also keep a track of your assets.
              </p>
              <a href="https://github.com/divyam-prajapati/Wealth-Manager.git" className='button'  target="__blank">
                https://github.com/divyam-prajapati/Wealth-Manager.git
              </a>
            </div>
          </div>

          <div className='portfolio__projects-content-container'>
            <div className='portfolio__projects-content-img'>
              <img src={ET} alt="ET"/>
            </div>
            <div className="portfolio__projects-content-body">
              <p>
                <b>Expense Tracker</b><br/><br />
                It was a 3<sup>th</sup> semester mini project in which we made this android app using native Java in android studio, It is a basic daily expense tracking application.
              </p>
              <a href="https://github.com/divyam-prajapati/Expense-Tracker.git" className='button'  target="__blank">
                https://github.com/divyam-prajapati/Expense-Tracker.git
              </a>
            </div>
          </div>
            
        </div>
      </div>
    </div>
  )
}

export default Projects