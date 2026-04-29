import styles from './style.module.css';

type ExemploProps = {
    children: React.ReactNode;
};

export function Exemplo({ children }: ExemploProps) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                boina
                {children}
            </div>
        </div>
    );
}