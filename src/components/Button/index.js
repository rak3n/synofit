import React from 'react'
import styles from './style.module.css';

function Button({ text='Button', className, ...rest }) {
  const classNameArg=[styles.container];
  if(className){
    classNameArg.push(className.split(' ').filter(itm=>itm.trim()))
  }
  return (
    <div className={classNameArg.join(' ')} {...rest}>{text}</div>
  )
}

export default Button