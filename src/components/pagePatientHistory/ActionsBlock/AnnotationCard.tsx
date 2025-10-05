import { useState, type Dispatch, type SetStateAction } from "react";
import type { PatientData, TeamNoteInteraction } from "../../../types/Patient";

export interface AnnotationCardProps {
    setPatient: Dispatch<SetStateAction<PatientData | null>>;
}

export function AnnotationCard({ setPatient }: AnnotationCardProps) {
    const [newNote, setNewNote] = useState('');

    const handleSaveNote = () => {
        if (newNote.trim() === '') return;
        
        const newInteraction: TeamNoteInteraction = {
        id: Date.now().toString(), // ID único temporário
        type: 'ANOTACAO_EQUIPE',
        date: new Date().toLocaleDateString('pt-BR'),
        time: new Date().toLocaleTimeString('pt-BR'),
        note: newNote.trim(), // RNF03 (Anotações): Na implementação real, você SANITIZARIA o texto aqui.
        userId: 'user123',
        userName: 'senha',
        };
        
        setPatient(prevState => {
        if (!prevState) return null;
        return {
            ...prevState, // Mantém todos os dados anteriores do paciente
            history: [newInteraction, ...prevState.history], // Adiciona a nova anotação ao histórico (RN05 - Anotações)
        };
        });

        // 3. Limpa o campo e notifica o usuário (RNF01 - Anotações)
        setNewNote('');
        alert('Anotação salva com sucesso!');
        
        // Na implementação real: Chamada à API para persistir no backend.
    };
    return(
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">AÇÕES E REGISTRO</h2>
            <textarea
                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                placeholder="Registrar novas observações... (opcional)"
                value={newNote}
                    // Atualiza o estado 'newNote' a cada tecla digitada
                onChange={(e) => setNewNote(e.target.value)}
            />
            <button
                onClick={handleSaveNote}
                className="mt-2 w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                disabled={newNote.trim() === ''}
            >
            <span className="mr-2">Salvar Anotação</span> 
            </button>
        </div>
    );
}