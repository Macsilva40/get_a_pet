import { useState } from 'react'
import api from '../../../utils/api'

import styles from './AddPet.module.css'

// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/* components */
import PetForm from '../../form/PetForm'



/* hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'

function AddPet() {
    return (
        <section className={styles.addpet_header}>
            <div>
                <h1>Cadastre um Pet</h1>
                <p>Depois ele ficará disponível para adoção</p>
            </div>
            <PetForm />
        </section>
    )
}

export default AddPet