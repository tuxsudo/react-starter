import Helmet from 'react-helmet';
import styles from './Error.css';

const NotFound = ({title="Error...", subtitle, children}) => (
    <section className={styles.container}>
        <Helmet title={title} />
        <header className={styles.header}>
            <h1 className={styles.title}>Not Found</h1>
            {subtitle && (
                <h2 className={styles.subtitle}>{subtitle}</h2>
            )}
        </header>
        <div>{children}</div>
    </section>
);



export default NotFound;
