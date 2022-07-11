import React from 'react'
import { useParams } from 'react-router-dom'

import './courseDetails.css'

const CourseDetails = () => {
  const { course } = useParams()
  
  return (
    <div className='container mt-3'>
      <div className='courseDetails__body'>
        <div className='section'>
          <div className='courseDetails__body-title'>
            <h2>{course}</h2>
          </div>
        </div>
        <div className='section'>
          <h3>Chapitre 1. Le gros derch de Victor Pont</h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque auctor ex hendrerit mi facilisis laoreet. Vivamus libero sem, iaculis id venenatis ac, vestibulum a urna. 
            Donec sit amet sodales neque. Aenean lacus augue, lacinia in elementum non, ultricies vitae quam. 
            Nunc volutpat tellus ac molestie aliquet. Donec sed rutrum nisi. 
            Nam pharetra maximus augue, sit amet hendrerit ligula cursus id.
          </span>
        </div>
        <div className='section'>
          <h3>Chapitre 2. Olexandre le magnifique</h3>
          <span>Mauris et ullamcorper felis. Aenean viverra ipsum ac sem ultrices volutpat vitae in metus. Quisque bibendum libero quis massa lacinia hendrerit. 
            Morbi libero magna, vulputate a tortor egestas, condimentum luctus enim. Phasellus feugiat, massa bibendum tincidunt volutpat, ante est fermentum nulla, eget lacinia lorem nibh accumsan ligula. Vestibulum nec consequat velit, hendrerit congue diam. 
            Duis eget eros rutrum, sollicitudin mauris id, suscipit elit. In hac habitasse platea dictumst. 
            Nullam imperdiet sollicitudin nisi vitae sollicitudin. Donec eu nisi vel metus fermentum tempus at ac dui. 
            Vestibulum quis nibh dolor. Donec venenatis mauris nulla, eu semper odio hendrerit id.
          </span>
        </div>
        <div className='section'>
          <h3>Chapitre 3. Milf chaude dans ta région</h3>
          <span>Curabitur ac ultricies libero. Donec enim orci, condimentum maximus lorem eu, volutpat ultricies leo. Nunc dictum diam et elit suscipit, in dictum nisi ornare. Vestibulum auctor dictum purus ut pretium. Duis eu quam purus. Morbi viverra libero nisl, ac commodo risus lacinia pretium. Proin sit amet velit a ipsum luctus eleifend. Morbi sed vulputate eros.</span>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails