import styles from './AddPet.module.css'

function AddPet() {
    return (
        <section className={styles.addpet_header}>
            <div>
                <h1>Cadastre um Pet</h1>
                <p>Depois ele ficará disponível para adoção</p>
            </div>
            <p>formulário</p>
        </section>
    )
}

export default AddPet