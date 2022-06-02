import React from 'react'
import styled from 'styled-components'
import icon_1 from '../assets/images/login/icon_1.png'
import icon_2 from '../assets/images/login/icon_2.png'
import icon_3 from '../assets/images/login/icon_3.png'
import icon_4 from '../assets/images/login/icon_4.png'

const Content = () => {
  return (
    <ContentSection>
      <h3>Enhance your Child's Learning Ability</h3>
      <ul className='features'>
        <li className='single_feature'>
          <div className='feature_img'>
            <img src={icon_1} alt='' />
          </div>
          <div className='feature_content'>
            <h4>High Quality Videos</h4>
            <p>1000+ hours of engaging videos covering all concepts.</p>
          </div>
        </li>
        <li className='single_feature'>
          <div className='feature_img'>
            <img src={icon_2} alt='' />
          </div>
          <div className='feature_content'>
            <h4>High Quality Videos</h4>
            <p>1000+ hours of engaging videos covering all concepts.</p>
          </div>
        </li>
        <li className='single_feature'>
          <div className='feature_img'>
            <img src={icon_3} alt='' />
          </div>
          <div className='feature_content'>
            <h4>High Quality Videos</h4>
            <p>1000+ hours of engaging videos covering all concepts.</p>
          </div>
        </li>
        <li className='single_feature'>
          <div className='feature_img'>
            <img src={icon_4} alt='' />
          </div>
          <div className='feature_content'>
            <h4>High Quality Videos</h4>
            <p>1000+ hours of engaging videos covering all concepts.</p>
          </div>
        </li>
      </ul>
    </ContentSection>
  )
}

const ContentSection = styled.div`
  .single_feature {
    width: 100%;
    display: flex;
    gap: 1rem;
    padding-top: 30px;
  }

  .feature_img img {
    width: 40px;
  }
  .feature_content {
    width: 100%;
  }
  .feature_content p {
    font-weight: 400;
    font-size: 0.9rem;
    padding-top: 0.7rem;
  }
  @media (min-width: 790px) {
    h3 {
      font-size: 1.8rem;
    }
    .feature_img img {
      width: 60px;
    }
  }
`

export default Content
