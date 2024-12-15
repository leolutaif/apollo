import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Social() {
    const [data, setData] = useState({
        twitterLink: "",
        telegramLink: "",
        tokenCA: "",
        pumpLink: ""
    });

    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // Faz a requisição à API
        const fetchData = async () => {
            try {
                const response = await axios.get('https://apitoreturnca.onrender.com/api/purchaseData');
                const result = response.data;
                
                // Atualiza o estado com os dados da API
                setData({
                    twitterLink: result.twitterLink,
                    telegramLink: result.telegramLink,
                    tokenCA: result.tokenCA,
                    pumpLink: result.link
                });
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error);
            }
        };

        fetchData();
    }, []);

    const traco = "->";

    // Função para copiar o tokenCA
    const copyToClipboard = () => {
        navigator.clipboard.writeText(data.tokenCA).then(() => {
            setCopied(true);
            // Mostra a mensagem "Copiado!" por alguns segundos
            setTimeout(() => setCopied(false), 2000);
        }).catch(err => {
            console.error("Erro ao copiar o texto: ", err);
        });
    };

    return (
        <div className="env">
            <div className="Social">
                <a target='_blank' href={data.twitterLink} className="sociais" rel="noreferrer">Twitter {traco}</a>
                <a target='_blank' href={data.telegramLink} className="sociais" rel="noreferrer">Telegram {traco}</a>
                <a target='_blank' href={data.pumpLink} className="sociais" rel="noreferrer">PumpFun {traco}</a>
            </div>
            <div className="ca" onClick={copyToClipboard} style={{ cursor: 'pointer' }}>
                CA: {data.tokenCA} {copied && <span style={{ color: 'green' }}> (Copied!)</span>}
            </div>
        </div>
    );
}

export default Social;
