import React from 'react'
import { StartWorkContainer } from './StartWork.styled'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

type Props = {}

const StartWork = (props: Props) => {
  return (
      <StartWorkContainer>
          <h2>Start your workout</h2>
          <ul>
              <li>
                  <span className='number'>1</span>
                  <p><span>Create a personal library: </span>
                      add the books you intend to read to it.
                  </p>
              </li>
              <li>
                  <span className='number'>2</span>
                  <p><span>Create your first workout: </span>
                      define a goal, choose a period, start training.</p>
              </li>
          </ul>
          <NavLink to="/library"><span className='link'>My lybrary</span>
          <FaArrowRight />
          </NavLink>
    </StartWorkContainer>
  )
}

export default StartWork