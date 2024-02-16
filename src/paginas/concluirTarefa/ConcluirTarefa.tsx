import { useEffect, useState } from "react";

function ConcluirTarefa() {
    const [concluida, setConcluida] = useState(false);
    const [tarefa, setTarefa] = useState('');

    useEffect(() => {
        if (concluida) {
            setTarefa('Parabéns! Você concluiu a tarefa.');
        }
    }, [concluida]);

    return (
        <div>
            <h1>Tarefa</h1>
            <h3>{tarefa}</h3>
            <p>Conclua  a tarefa!</p>
            <button onClick={() => setConcluida(true)}>Concluir Tarefa</button>
        </div>
    )
}

export default ConcluirTarefa;