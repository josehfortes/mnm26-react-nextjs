import styles from './card.module.css'

import Button from '../button/button'

export default function Card({ description }) {
  return (
    <div className={styles['card']}>
      <img className={styles['card-image']} src="/images/illustration-hero.svg" />
      <div className={styles['card-container']}>
        <h1>Order Summary</h1>
        <p className={styles['card-text']}>{description}</p>
        <div className={styles['plan-card']}>
          <img src="/images/icon-music.svg" />
          <div className={styles['plan-info']}>
            <h4>Annual Plan</h4>
            $59.99/year
          </div>
          <a href="#">Change</a>
        </div>
        <div className={styles['card-button']}>
          <Button primary>Proceed to Payment</Button>
          <Button>Cancel Order</Button>
        </div>
      </div>
    </div>
  )
}
