import React from 'react'
import styled from 'styled-components'
import SubscribeImage from '../../assets/images/homeDashboard/subscribe.png'
import UpcomingImage from '../../assets/images/homeDashboard/upcoming_classes.png'
import EbookImage from '../../assets/images/homeDashboard/ebook_section.png'
import NoData from '../../assets/images/homeDashboard/no_data.png'
import Ebook1 from '../../assets/images/homeDashboard/ebook-1.jpg'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { BiChevronRight, BiChevronLeft, BiArrowBack } from 'react-icons/bi'
import { FiLink2 } from 'react-icons/fi'
import LocationImg from '../../assets/images/homeDashboard/location.png'
import ShareImg from '../../assets/images/homeDashboard/share.png'
import '@splidejs/react-splide/css'

import { subjectList } from '../../utils/CountryList'

const Home = () => {
  return (
    <>
      <Main>
        <section className='subjects'>
          <div className='container'>
            <h3>Subjects</h3>
            <ul className='subject_grid'>
              {subjectList.map((subject, i) => {
                return (
                  <li key={i}>
                    <img src={subject.img} alt='' />
                    <h1>{subject.name}</h1>

                    <div></div>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
        <section className='subscribe'>
          <div className='container'>
            <div className='content'>
              <img src={SubscribeImage} alt='' />
              <div className='details'>
                <h3>Make Your Child a Genius</h3>
                <p>
                  Access to High Quality Educational Video in National and Local
                  Languages
                </p>
              </div>
            </div>
            <button>Subscribe Now</button>
          </div>
        </section>
        <section className='live_classes'>
          <div className='container'>
            <div className='top'>
              <div className='left'>
                <img src={UpcomingImage} alt='' />
                <h3>Upcoming Live Classes</h3>
              </div>
              <span>See All</span>
            </div>
            <img src={NoData} alt='' className='no_data' />
          </div>
        </section>
        <section className='ebooks'>
          <div className='container'>
            <div className='top'>
              <div className='left'>
                <img src={EbookImage} alt='' />
                <h3>E-book</h3>
              </div>
              <span>See All</span>
            </div>
            <h4>
              Deepen your knowledge! Gain access to exciting books and learning
              material.
            </h4>
            <Splide
              hasTrack={false}
              aria-label='...'
              options={{
                arrows: 2,
                rewind: true,
                pagination: false,
                // width: 800,
                gap: '1rem',
                perPage: 5,
                breakpoints: {
                  640: {
                    perPage: 1,
                  },
                  800: {
                    perPage: 2,
                  },
                  900: {
                    perPage: 3,
                  },
                  1400: {
                    perPage: 4,
                  },
                },
              }}
            >
              <ul className='ebook_lists'>
                <SplideTrack>
                  <SplideSlide>
                    <article>
                      <img src={Ebook1} alt='' />
                      <div className='content'>
                        <h1>The New Washing...</h1>
                        <p>Kindness in the heart of leaders is very... </p>
                      </div>
                    </article>
                  </SplideSlide>
                  <SplideSlide>
                    <article>
                      <img src={Ebook1} alt='' />
                      <div className='content'>
                        <h1>The New Washing...</h1>
                        <p>Kindness in the heart of leaders is very... </p>
                      </div>
                    </article>
                  </SplideSlide>
                  <SplideSlide>
                    <article>
                      <img src={Ebook1} alt='' />
                      <div className='content'>
                        <h1>The New Washing...</h1>
                        <p>Kindness in the heart of leaders is very... </p>
                      </div>
                    </article>
                  </SplideSlide>
                  <SplideSlide>
                    <article>
                      <img src={Ebook1} alt='' />
                      <div className='content'>
                        <h1>The New Washing...</h1>
                        <p>Kindness in the heart of leaders is very... </p>
                      </div>
                    </article>
                  </SplideSlide>
                  <SplideSlide>
                    <article>
                      <img src={Ebook1} alt='' />
                      <div className='content'>
                        <h1>The New Washing...</h1>
                        <p>Kindness in the heart of leaders is very... </p>
                      </div>
                    </article>
                  </SplideSlide>
                  <SplideSlide>
                    <article>
                      <img src={Ebook1} alt='' />
                      <div className='content'>
                        <h1>The New Washing...</h1>
                        <p>Kindness in the heart of leaders is very... </p>
                      </div>
                    </article>
                  </SplideSlide>
                  <SplideSlide>
                    <article>
                      <img src={Ebook1} alt='' />
                      <div className='content'>
                        <h1>The New Washing...</h1>
                        <p>Kindness in the heart of leaders is very... </p>
                      </div>
                    </article>
                  </SplideSlide>
                </SplideTrack>
              </ul>
              {/* <div className={`splide__arrows`}>
                <BiChevronRight
                  className={`splide__arrow splide__arrow--next`}
                  role='button'
                />
                <BiChevronLeft
                  className={`splide__arrow splide__arrow--prev`}
                  role='button'
                />
              </div> */}
            </Splide>

            <div className='contact'>
              <div className='location'>
                <img src={LocationImg} alt='' />
                <div className='content'>
                  <h3>Tessas Place</h3>
                  <p>
                    Know more about how we are making an impact on the future of
                    learning.
                  </p>
                </div>
              </div>
              <div className='location'>
                <img src={ShareImg} alt='' />
                <div className='content'>
                  <h3>Tessas Place</h3>
                  <p>
                    Know more about how we are making an impact on the future of
                    learning.
                  </p>
                  <button>
                    <FiLink2 />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Main>
    </>
  )
}

const Main = styled.main`
  .subjects {
    .container {
      padding: 20px 20px;
      @media (min-width: 670px) {
        padding: 20px 10px;
      }

      @media (min-width: 816px) {
        padding: 20px 80px;
      }
      @media (min-width: 1100px) {
        max-width: 1300px;
        margin: 0 auto;
      }
      h3 {
        position: relative;
        display: inline-block;
      }
      h3:before {
        position: absolute;
        content: '';
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 3px;
        background: #9ad81d;
      }
      ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin-top: 40px;

        @media (min-width: 1050px) {
          grid-template-columns: repeat(3, 1fr);
        }

        @media (min-width: 1200px) {
          grid-template-columns: repeat(4, 1fr);
        }
        li {
          position: relative;
          background: linear-gradient(45deg, #ffb336 0%, #ff4a29 100%);
          height: 200px;
          border-radius: 1rem;
          overflow: hidden;
          padding-top: 10px;
          padding-left: 20px;
          div {
            position: absolute;
            background: linear-gradient(98deg, #ffb336 2%, #ff4a29 100%);
            width: 96px;
            height: 96px;
            top: -48px;
            right: -48px;
            border-radius: 50%;
          }
          img {
            width: 50px;
          }
          h1 {
            color: white;
            font-weight: 600;
            font-size: 1rem;
          }
        }
        li:nth-child(2) {
          background: linear-gradient(45deg, #08adf7 0%, #323ec8 100%);
          div {
            background: linear-gradient(98deg, #08adf7 2%, #323ec8 100%);
          }
        }
        li:nth-child(3) {
          background: linear-gradient(45deg, #e125d9 0%, #970780 100%);
        }
        li:nth-child(4) {
          background: linear-gradient(45deg, #f76092 0%, #ed175d 100%);
        }
      }
    }
  }

  .subscribe {
    .container {
      margin: 20px 20px;
      background: linear-gradient(to right, #449603 0%, #9ad81d 100%);
      border-radius: 10px;
      padding: 20px 10px;
      color: white;
      @media (min-width: 869px) {
        margin: 20px 80px;
      }
      @media (min-width: 1169px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1150px;
        margin: 0 auto;
        padding: 20px 50px;
        .content {
          display: flex;
          gap: 1rem;
          width: 70%;
          img {
            width: 50px;
            height: 50px;
          }
        }
        button {
          max-width: 20%;
        }
      }
      .content {
        p {
          font-weight: 500;
        }
      }
      button {
        background: white;
        width: 100%;
        border: none;
        padding: 20px 0px;
        font-size: 1.4rem;
        text-transform: capitalize;
        font-weight: bold;
        margin-top: 30px;
        border-radius: 5px;
        color: green;
      }
    }
  }
  .live_classes {
    .container {
      position: relative;
      padding: 20px 20px;
      @media (min-width: 869px) {
        padding: 20px 80px;
      }
      @media (min-width: 1169px) {
        max-width: 1150px;
        margin: 0 auto;
        padding: 20px 50px;
      }
    }

    .no_data {
      padding-left: 80px;
      width: 200px;
    }
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 50px;
      span {
        font-size: 1rem;
        font-weight: 600;
        color: #449603;
      }
    }
    .left {
      display: flex;
      align-items: center;
      gap: 1rem;
      img {
        width: 40px;
      }
      h3 {
        position: relative;
        font-size: 1rem;
        /* display: inline-block; */
      }
      h3:before {
        position: absolute;
        content: '';
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 3px;
        background: #9ad81d;
      }
    }
  }
  .ebooks {
    padding-top: 50px;
    .container {
      position: relative;
      padding: 20px 20px;
      @media (min-width: 869px) {
        padding: 20px 80px;
      }
      @media (min-width: 1169px) {
        max-width: 1150px;
        margin: 0 auto;
        padding: 20px 50px;
      }
      h4 {
        font-size: 1rem;
        line-height: 2rem;
      }
    }
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      span {
        font-size: 1rem;
        font-weight: 600;
        color: #449603;
      }
    }
    .left {
      display: flex;
      align-items: center;
      gap: 1rem;
      img {
        width: 40px;
      }
      h3 {
        position: relative;
        font-size: 1rem;
      }
      h3:before {
        position: absolute;
        content: '';
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 3px;
        background: #9ad81d;
      }
    }
    .ebook_lists {
      padding: 30px 50px 0px 50px;
      width: 100%;
      article {
        border: 1px solid #9ad81d;
        display: flex;
        flex-direction: column;
      }
      img {
        align-self: center;
        width: 150px;
      }
      .content {
        padding: 10px 10px;
        color: white;
        margin-top: 10px;
        background: linear-gradient(to right, #449603 0%, #9ad81d 100%);
      }
    }
    .contact {
      padding: 40px 10px;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      @media (min-width: 1005px) {
        flex-direction: row;
        gap: 3rem;
      }
    }
    .location {
      border-radius: 10px;
      border: 1px solid #c8c8c8;
      display: flex;
      gap: 0.5rem;
      padding: 10px 10px;
      position: relative;

      img {
        width: 40px;
        height: 40px;
      }
      .content {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        button {
          position: absolute;
          right: 10px;
          background: black;
          color: white;
          display: flex;
          align-items: center;
          gap: 1rem;
          border: none;
          padding: 10px 20px;
          border-radius: 10px;
        }
      }
    }
  }
`

export default Home
