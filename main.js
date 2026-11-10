/**
 * DATA CHATBOT - MAIN CONTROLLER
 * Persona: Tenente Comandante Data (U.S.S. Enterprise NCC-1701-D)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Avatar Configurations ---
  // Sostituisci questi percorsi con i link corretti o i file locali delle immagini
  const AVATAR_USER = "";
  const AVATAR_BOT = "./data.jpg";



  // --- DOM Elements ---
  const chatMessages = document.getElementById('chatMessages');
  const chatForm = document.getElementById('chatForm');
  const messageInput = document.getElementById('messageInput');
  const sendBtn = document.getElementById('sendBtn');
  const micBtn = document.getElementById('micBtn');
  const attachBtn = document.getElementById('attachBtn');
  const emojiBtn = document.getElementById('emojiBtn');
  const searchBtn = document.getElementById('searchBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  const closeSearchBtn = document.getElementById('closeSearchBtn');
  const attachmentCard = document.getElementById('attachmentCard');
  const fileModal = document.getElementById('fileModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const callBtn = document.getElementById('callBtn');
  const videoBtn = document.getElementById('videoBtn');
  const optionsBtn = document.getElementById('optionsBtn');
  const suggestionsRow = document.getElementById('suggestionsRow');


  // --- LCARS Sound Synthesizer (Web Audio API) ---
  class LCARSCommunicator {
    constructor() {
      this.audioCtx = null;
    }

    init() {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.audioCtx = new AudioContext();
        }
      }
    }

    playChirp(type = 'incoming') {
      try {
        this.init();
        if (!this.audioCtx) return;
        if (this.audioCtx.state === 'suspended') {
          this.audioCtx.resume();
        }

        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        const now = this.audioCtx.currentTime;

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        if (type === 'incoming') {
          // Double two-tone chirp
          osc.type = 'sine';
          osc.frequency.setValueAtTime(880, now);
          osc.frequency.exponentialRampToValueAtTime(1320, now + 0.08);
          gain.gain.setValueAtTime(0.06, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
          osc.start(now);
          osc.stop(now + 0.15);
        } else if (type === 'outgoing') {
          // Soft confirmation beep
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(1040, now);
          osc.frequency.exponentialRampToValueAtTime(660, now + 0.09);
          gain.gain.setValueAtTime(0.05, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
          osc.start(now);
          osc.stop(now + 0.11);
        }
      } catch (e) {
        // Fallback silently if audio is blocked by browser policy
      }
    }
  }

  const soundFx = new LCARSCommunicator();

  // --- Helper: Format Current Time (HH:MM) ---
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Imposta l'orario attuale sul primo messaggio del bot
  const initialTimeEl = document.getElementById('initial-time');
  if (initialTimeEl) {
    initialTimeEl.textContent = getCurrentTime();
  }

  // --- Helper: Auto Scroll Messages ---
  const scrollToBottom = (smooth = true) => {
    chatMessages.scrollTo({
      top: chatMessages.scrollHeight,
      behavior: smooth ? 'smooth' : 'auto'
    });
  };

  // --- Knowledge & Persona of Lieutenant Commander Data ---
  const dataResponses = {
    greetings: [
      "Saluti. La mia rete positronica è pienamente operativa. Come posso assisterti nei compiti odierni a bordo della U.S.S. Enterprise?",
      "Buongiorno. Ho completato l'inizializzazione delle mie routine analitiche. Quali parametri richiedono la mia attenzione?",
      "Salute a te. Sono a tua disposizione per eseguire calcoli, pianificare turni o analizzare report con una precisione del 99.98%."
    ],
    picard: [
      "Il Capitano Jean-Luc Picard ripone grande fiducia nell'efficienza logica e nella diplomazia. Egli ricorda spesso che 'la storia giudicherà le nostre intenzioni'. Desideri che inoltri una nota alla sua cabina?",
      "Il Capitano Picard mi ha insegnato molto sulla natura umana e sull'importanza delle scelte etiche oltre la pura computazione."
    ],
    spot: [
      "Spot è il mio felino domestico. È una gatta, sebbene i suoi modelli comportamentali siano spesso imprevedibili e non conformi alle regole della pura logica. Le ho composto una poesia intitolata 'Ode a Spot'.",
      "Il legame con il mio felino Spot continua ad essere un interessante caso di studio sulla reciprocità emotiva degli esseri viventi."
    ],
    emotions: [
      "Non provo emozioni nel senso biologico del termine, a meno che il chip emozionale del Dr. Soong non sia innestato. Tuttavia, trovo l'esperienza umana e i suoi paradossi affascinanti.",
      "Comprendo il concetto di sentimento attraverso l'osservazione scientifica. Se dovessi provare felicità, questo momento di collaborazione sarebbe un candidato plausibile."
    ],
    calculations: [
      "Il mio cervello positronico elabora circa sessanta trilioni di operazioni al secondo. L'analisi preliminare indica una probabilità di riuscita pari al 98.45%.",
      "Esaminando le variabili stocastiche, i dati suggeriscono un trend favorevole. Consiglio di procedere secondo i protocolli della Flotta Stellare."
    ],
    enterprise: [
      "La U.S.S. Enterprise NCC-1701-D è una nave stellare di classe Galaxy. Tutti i sottosistemi di navigazione, propulsione a curvatura e supporto vitale sono operativi a livello ottimale.",
      "I sensori a lungo raggio dell'Enterprise non rilevano anomalie nel settore circostante. Il personale di plancia è in servizio regolare."
    ]
  };

  // --- Data's Intelligence Engine ---
  const generateDataReply = (userText) => {
    const text = userText.toLowerCase().trim();

    if (text.includes('sintesi') || text.includes('riassum') || text.includes('report') || text.includes('q3')) {
      return {
        type: 'rich_summary',
        text: "Ho completato l'elaborazione del Report Vendite Q3. Ecco l'analisi esecutiva ricavata dai sensori aziendali:",
        points: [
          "Fatturato complessivo: +18.4% rispetto al target della Flotta",
          "Margine operativo stabilizzato al 34.2% con picco nel segmento Enterprise",
          "Nessuna dispersione riscontrata nelle allocazioni di budget trimestrali"
        ],
        extra: "Desideri che invii il documento alla commissione o che prepari le slide per la riunione delle 15:30?"
      };
    }

    if (text.includes('riunione') || text.includes('meeting') || text.includes('15:30') || text.includes('calendario')) {
      return {
        type: 'text',
        text: "Ho verificato la disponibilità della Sala Conferenze 1 e sincronizzato gli inviti per le 15:30 con i calendari di Google, Outlook e la rete interna dell'Enterprise. Tutti i partecipanti hanno ricevuto la notifica."
      };
    }

    if (text.includes('marco') || text.includes('email') || text.includes('posta')) {
      return {
        type: 'text',
        text: "Messaggio subspaziale inoltrato a Marco. Ho allegato il prospetto sintetico e impostato una priorità standard con tracciamento di lettura abilitato."
      };
    }

    if (text.includes('kpi') || text.includes('metriche') || text.includes('statistiche')) {
      return {
        type: 'rich_summary',
        text: "Ecco i tre Indicatori Chiave di Prestazione (KPI) estratti per il trimestre:",
        points: [
          "Customer Acquisition Cost (CAC): ridotto dell'11.2%",
          "Lifetime Value (LTV): incremento stimato di 1.4x",
          "Net Retention Rate: 108.6% nei sistemi federati"
        ],
        extra: "L'indice di stabilità finanziaria è superiore alla media standard del 94.7%."
      };
    }

    if (text.includes('q2') || text.includes('confronta') || text.includes('differenza')) {
      return {
        type: 'text',
        text: "Dal confronto differenziale emerge che il Q3 supera il Q2 di 4.6 punti percentuali netti, grazie all'ottimizzazione dei flussi di fornitura avviata dal Tenente La Forge nella divisione logistica."
      };
    }

    if (text.includes('picard') || text.includes('capitano')) {
      return { type: 'text', text: pickRandom(dataResponses.picard) };
    }

    if (text.includes('spot') || text.includes('gatto') || text.includes('animale')) {
      return { type: 'text', text: pickRandom(dataResponses.spot) };
    }

    if (text.includes('emozion') || text.includes('senti') || text.includes('umano') || text.includes('felice')) {
      return { type: 'text', text: pickRandom(dataResponses.emotions) };
    }

    if (text.includes('enterprise') || text.includes('nave') || text.includes('curvatura')) {
      return { type: 'text', text: pickRandom(dataResponses.enterprise) };
    }

    if (text.includes('ciao') || text.includes('salve') || text.includes('buongiorno') || text.includes('buonasera')) {
      return { type: 'text', text: pickRandom(dataResponses.greetings) };
    }

    if (text.includes('grazie') || text.includes('ottimo') || text.includes('perfetto')) {
      return {
        type: 'text',
        text: "È mio dovere e soddisfazione logica esserti utile. Rimango in attesa delle tue ulteriori istruzioni operative."
      };
    }

    // Default analytical Star Trek response
    return {
      type: 'text',
      text: `Ho analizzato la tua richiesta: "${userText}". I miei banchi di memoria indicano una conformità logica ottimale. Procedo con la memorizzazione nei registri dell'Enterprise NCC-1701-D.`
    };
  };

  const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // --- Create & Append User Message ---
  const appendUserMessage = (text) => {
    const row = document.createElement('div');
    row.className = 'message-row user-row';
    const time = getCurrentTime();

    row.innerHTML = `
      <div class="user-bubble-container">
        <div class="message-bubble user-bubble">
          <div class="bubble-text">${escapeHTML(text)}</div>
          <div class="bubble-meta">
            <span class="message-time">${time}</span>
            <span class="read-receipt" title="Trasmesso">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
                <polyline points="24 6 13 17 11 15"></polyline>
              </svg>
            </span>
          </div>
        </div>
        <img src="${AVATAR_USER}" alt="User Avatar" class="chat-avatar user-avatar">
      </div>
    `;

    chatMessages.appendChild(row);
    scrollToBottom();
    soundFx.playChirp('outgoing');
  };

  // --- Typing Indicator ---
  const showTypingIndicator = () => {
    const row = document.createElement('div');
    row.className = 'message-row bot-row typing-row';
    row.id = 'typingIndicator';
    row.innerHTML = `
      <div class="bot-bubble-container">
        <img src="${AVATAR_BOT}" alt="Data Avatar" class="chat-avatar bot-avatar">
        <div class="typing-bubble">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
      </div>
    `;
    chatMessages.appendChild(row);
    scrollToBottom();
    return row;
  };

  const removeTypingIndicator = () => {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
      indicator.remove();
    }
  };

  // --- Create & Append Bot Message ---
  const appendBotMessage = (replyData) => {
    removeTypingIndicator();
    const row = document.createElement('div');
    row.className = 'message-row bot-row';
    const time = getCurrentTime();

    let contentHTML = '';

    if (replyData.type === 'rich_summary') {
      const pointsList = replyData.points.map(pt => `<li>${escapeHTML(pt)}</li>`).join('');
      contentHTML = `
        <div class="bubble-text">${escapeHTML(replyData.text)}</div>
        <div class="nested-feature-card">
          <ul class="feature-list">
            ${pointsList}
          </ul>
        </div>
        ${replyData.extra ? `<div class="bubble-text" style="margin-top: 10px;">${escapeHTML(replyData.extra)}</div>` : ''}
      `;
    } else {
      contentHTML = `<div class="bubble-text">${escapeHTML(replyData.text)}</div>`;
    }

    row.innerHTML = `
      <div class="bot-bubble-container">
        <img src="${AVATAR_BOT}" alt="Data Avatar" class="chat-avatar bot-avatar">
        <div class="message-bubble bot-bubble">
          ${contentHTML}
          <div class="bubble-meta">
            <span class="message-time">${time}</span>
          </div>
        </div>
      </div>
    `;

    chatMessages.appendChild(row);
    scrollToBottom();
    soundFx.playChirp('incoming');
  };

  // --- Trigger Bot Response Flow ---
  const handleBotInteraction = (inputText) => {
    showTypingIndicator();

    // Realistic computation delay of Data's positronic brain
    const delay = Math.floor(Math.random() * 600) + 700;

    setTimeout(() => {
      const reply = generateDataReply(inputText);
      appendBotMessage(reply);
    }, delay);
  };

  // --- Form Submission Handler ---
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = messageInput.value.trim();
    if (!text) return;

    appendUserMessage(text);
    messageInput.value = '';
    messageInput.focus();

    handleBotInteraction(text);
  });

  // --- Action Pills Click Handler ---
  document.addEventListener('click', (e) => {
    const pill = e.target.closest('.action-pill');
    if (pill) {
      const action = pill.getAttribute('data-action');
      if (action === 'genera_sintesi') {
        appendUserMessage("Genera sintesi esecutiva delle metriche del Q3.");
        handleBotInteraction("sintesi");
      } else if (action === 'fissa_riunione') {
        appendUserMessage("Pianifica la riunione per oggi alle 15:30 con il team.");
        handleBotInteraction("riunione 15:30");
      } else if (action === 'scarica_allegato') {
        openModal();
      }
    }
  });

  // --- Suggestion Chips Click Handler ---
  suggestionsRow.addEventListener('click', (e) => {
    const chip = e.target.closest('.suggestion-chip');
    if (chip) {
      const text = chip.innerText.trim();
      appendUserMessage(text);
      handleBotInteraction(text);
    }
  });

  // --- Modal (PDF Document Preview) ---
  const openModal = () => {
    fileModal.classList.add('active');
    soundFx.playChirp('incoming');
  };

  const closeModal = () => {
    fileModal.classList.remove('active');
  };

  if (attachmentCard) {
    attachmentCard.addEventListener('click', openModal);
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  fileModal.addEventListener('click', (e) => {
    if (e.target === fileModal) {
      closeModal();
    }
  });

  // --- Search Feature Overlay ---
  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.toggle('active');
    if (searchOverlay.classList.contains('active')) {
      searchInput.focus();
    }
  });

  closeSearchBtn.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    resetSearchHighlights();
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const bubbles = document.querySelectorAll('.message-bubble');

    bubbles.forEach(bubble => {
      const bubbleText = bubble.innerText.toLowerCase();
      if (query.length > 1 && bubbleText.includes(query)) {
        bubble.style.outline = '2px solid #b8f93a';
        bubble.style.boxShadow = '0 0 12px rgba(184, 249, 58, 0.6)';
      } else {
        bubble.style.outline = 'none';
        bubble.style.boxShadow = '';
      }
    });
  });

  const resetSearchHighlights = () => {
    document.querySelectorAll('.message-bubble').forEach(b => {
      b.style.outline = 'none';
      b.style.boxShadow = '';
    });
  };

  // --- Header Action Buttons (Subspace Call & Video) ---
  const showToast = (msg) => {
    let toast = document.getElementById('chatToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'chatToast';
      toast.style.cssText = `
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #0b2d49;
        color: #b8f93a;
        padding: 10px 18px;
        border-radius: 9999px;
        border: 1px solid rgba(184, 249, 58, 0.4);
        font-size: 0.82rem;
        font-weight: 700;
        z-index: 100;
        box-shadow: 0 10px 30px rgba(0,0,0,0.6);
        transition: opacity 0.3s ease;
      `;
      chatMessages.parentElement.appendChild(toast);
    }
    toast.innerText = msg;
    toast.style.opacity = '1';
    soundFx.playChirp('incoming');
    setTimeout(() => {
      toast.style.opacity = '0';
    }, 2800);
  };

  callBtn.addEventListener('click', () => {
    showToast("Canale vocale subspaziale collegato con la plancia.");
  });

  videoBtn.addEventListener('click', () => {
    showToast("Schermo principale (Viewscreen) agganciato.");
  });

  optionsBtn.addEventListener('click', () => {
    showToast("Diagnostica di livello 1 del nucleo positronico: OK.");
  });

  // --- Voice / Mic Simulation ---
  let isRecording = false;
  micBtn.addEventListener('click', () => {
    soundFx.init();
    isRecording = !isRecording;
    if (isRecording) {
      micBtn.classList.add('recording');
      messageInput.placeholder = "In ascolto vocale (Dì qualcosa)...";
      soundFx.playChirp('outgoing');

      // Simulate speech-to-text after 3 seconds
      setTimeout(() => {
        if (isRecording) {
          isRecording = false;
          micBtn.classList.remove('recording');
          messageInput.placeholder = "Scrivi un messaggio...";
          messageInput.value = "Data, effettua una scansione diagnostica completa.";
          messageInput.focus();
        }
      }, 2600);
    } else {
      micBtn.classList.remove('recording');
      messageInput.placeholder = "Scrivi un messaggio...";
    }
  });

  // --- Attachment Simulation ---
  attachBtn.addEventListener('click', () => {
    soundFx.playChirp('outgoing');
    appendUserMessage("Caricamento registro sensori: Telemetria_Stellare.dat");
    setTimeout(() => {
      appendBotMessage({
        type: 'text',
        text: "File di telemetria ricevuto. I dati mostrano normali fluttuazioni di plasma nel condotto warp. Nessuna anomalia riscontrata."
      });
    }, 800);
  });

  // --- Emoji Shortcut ---
  emojiBtn.addEventListener('click', () => {
    const emojis = ['🖖', '⭐', '🚀', '🤖', '📊', '📈', '✨'];
    const randomEmoji = pickRandom(emojis);
    messageInput.value += ` ${randomEmoji}`;
    messageInput.focus();
  });

  // --- HTML Sanitizer ---
  function escapeHTML(str) {
    const div = document.createElement('div');
    div.innerText = str;
    return div.innerHTML;
  }


});

