import classNames from 'classnames'
import styles from './button.module.css'

export default function Button({ children, primary }) {
  return (
    <button className={
      classNames(
        styles['button'], {
        [styles['btn-primary']]: primary
      }
      )}
    >
      {children}
    </button>
  )
}
