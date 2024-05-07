import React from 'react'
import { StartWorkContainer } from '../StartWork/StartWork.styled'

type Props = {}

const Quete = (props: Props) => {
  return (
     <StartWorkContainer className='queteCont'>
          <ul className='queteList'>
              <li className='quete'>
                  <span className='ractangle'></span>
                  <p>
                      "Books are <span>windows </span>
                      to the world, and reading is a journey
                      into the unknown."
                  </p>
              </li>
          </ul>
          </StartWorkContainer>
  )
}

export default Quete