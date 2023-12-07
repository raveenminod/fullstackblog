import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <Image width={100} height={100} src="https://images.pexels.com/photos/19384411/pexels-photo-19384411/free-photo-of-early-sunrise-at-mesa-arch.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt=" Testing Image"/>
    </div>
  ) 
}
