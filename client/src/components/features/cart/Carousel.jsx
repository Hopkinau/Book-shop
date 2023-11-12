import * as styles from './Carousel.css';

export default function Carousel() {
  return (
    <>
      <div className={styles.carousel}>
        <img
          className={styles.carouselImg}
          src='https://images.unsplash.com/photo-1476234251651-f353703a034d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='reading book'
        />
        <blockquote className={styles.testimonial}>
          <p className={styles.testimonialText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            placeat porro dicta, suscipit omnis quo odio, illum commodi, quasi
            similique ea ipsa libero! Inventore similique officiis mollitia
            quisquam, laborum totam.
          </p>
          <p className={styles.testimonialAuthor}>Maria de Alemeida</p>
          <p className={styles.testimonialJob}>
            Senior Product Manager at EDP Comerical
          </p>
        </blockquote>
        <button className={styles.btnLeft}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className={styles.btnIcon}
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5'
            />
          </svg>
        </button>
        <button className={styles.btnRight}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className={styles.btnIcon}
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
        <div className={styles.dots}>
          <button className={styles.dotFill}>&nbsp;</button>
          <button className={styles.dot}>&nbsp;</button>
          <button className={styles.dot}>&nbsp;</button>
          <button className={styles.dot}>&nbsp;</button>
        </div>
      </div>
    </>
  );
}
