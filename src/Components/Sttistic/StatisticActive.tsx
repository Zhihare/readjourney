import React from 'react'
import { LeftContainer, RightContainer, SAC, SAList, SATitle } from './StatisticAction.styled'
import icons from '../../img/symbol-defs.svg';
import { FaRegHourglass } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
type Props = {}

const StatisticAction = (props: Props) => {
  return (
      <>
          <SATitle>
              <h2>Progress</h2>
              <div>
                  <button>
                     <FaRegHourglass />
                  </button>
                  <button>
                       <svg width={20} height={20}>
                                <use href={icons + '#icon-pie-chart-02'}></use>
                      </svg>
                  </button>
              </div>
          </SATitle>
          <SAC>
              <SAList>
                  <li> 
                      <LeftContainer>
                          <h5>21.10.2023</h5>
                          <p>7.6%</p>
                          <span>29 minutes</span>
                          <div></div>
                      </LeftContainer>
                      <RightContainer>
                          <p className='pages'>42 pages</p>
                          <div>
                              <img src={require('../../img/block.png')} alt="graphick" />
                              <button><RiDeleteBin5Line /></button>
                          </div>
                              <span>45 pages per hour</span>
                          
                      </RightContainer>
                  </li>
                  <li> 
                      <LeftContainer>
                          <h5>21.10.2023</h5>
                          <p>7.6%</p>
                          <span>29 minutes</span>
                          <div></div>
                      </LeftContainer>
                      <RightContainer>
                          <p className='pages'>42 pages</p>
                          <div>
                              <img src={require('../../img/block.png')} alt="graphick" />
                              <button><RiDeleteBin5Line /></button>
                          </div>
                              <span>45 pages per hour</span>
                          
                      </RightContainer>
                  </li>
                   <li> 
                      <LeftContainer>
                          <h5>21.10.2023</h5>
                          <p>7.6%</p>
                          <span>29 minutes</span>
                          <div></div>
                      </LeftContainer>
                      <RightContainer>
                          <p className='pages'>42 pages</p>
                          <div>
                              <img src={require('../../img/block.png')} alt="graphick" />
                              <button><RiDeleteBin5Line /></button>
                          </div>
                              <span>45 pages per hour</span>
                          
                      </RightContainer>
                  </li>
             </SAList>
          </SAC>
          </>
  )
}

export default StatisticAction