import styles from './WrapperContainer.module.css'


export default function WrapperContainer({ children }) {
    return (
        <div className={styles.wrapperContainerMain}>
            {children}
        </div>
    )
}