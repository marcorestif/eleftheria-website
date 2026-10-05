/* ==========================================================================
   Eleftheria site — translation dictionary + DOM switcher.
   Mirrors the app's localStorage-first language strategy (frontend/src/i18n.js)
   without pulling in i18next.
   ========================================================================== */

(function () {
  'use strict';

  var STORE_KEY = 'vostok_site_lang';
  var FALLBACK = 'en';

  /* ── Dictionaries ──────────────────────────────────────────────────── */

  var T = {};

  /* ---------------------------------------------------------------- EN */
  T.en = {
    meta: {
      title: 'Eleftheria — The AI workspace that never phones home',
      description:
        'Self-hosted AI workspace. Document-grounded chat, an agentic coding IDE, and a design studio in one interface — running entirely on your infrastructure.',
    },
    nav: { hubs: 'Workspaces', infra: 'Infrastructure', models: 'Models', platform: 'Platform', pricing: 'Pricing', faq: 'FAQ', cta: 'Join waitlist' },
    hero: {
      eyebrow: 'Security. Independence. Precision.',
      l1: 'The AI workspace',
      l2: 'that <em>never</em>',
      l3: 'phones home.',
      lede:
        'Document-grounded chat, an agentic coding IDE, and a design studio — plus translate and MCP hubs — one interface, running entirely inside your own network. Your models. Your hardware. Your rules.',
      ctaPrimary: 'Join waitlist',
      ctaSecondary: 'See what it does',
      note: 'Air-gap capable — works with zero outbound connectivity',
    },
    slot: {
      hero: 'Workspace overview',
      chat: 'Chat with artifact panel',
      code: 'IDE: tree, editor, agent',
      design: 'Design canvas & tool rail',
      translate: 'Translate projects',
      models: 'Model catalog & providers',
    },
    stats: {
      context: 'Token context window',
      formats: 'Canvas & print formats',
      hubs: 'Product hubs, one interface',
      bytes: 'Bytes sent to third parties',
    },
    hubs: {
      eyebrow: 'Product hubs',
      title: 'One interface, <em>seven hubs.</em>',
      lede:
        'Seven product hubs share one login, one permission model, and one set of files. Chat, code, design, and translate are the daily drivers — and they hand work off to each other.',
      open: 'Join the waitlist',
      chat: {
        tab: 'Chat',
        title: 'Answers grounded in your documents',
        lede:
          'Drop in a PDF, contract, or spreadsheet and ask questions against it. Retrieval runs on pgvector inside your database — the source text never leaves the machine it landed on.',
        c1: 'Knowledge Archives',
        c2: 'Vision',
        c3: 'Answer verification',
        c4: 'Artifacts panel',
        c5: 'Attachments',
      },
      code: {
        tab: 'Eleftheria Code',
        title: 'An agent that plans before it builds',
        lede:
          'Three modes, deliberately separated. Plan investigates and writes a spec without touching a file. Build implements it. Ask answers questions read-only. Every session gets an isolated workspace with its own git history.',
        c1: 'Plan · Build · Ask',
        c2: 'Git & repo clone',
        c3: 'Monaco editor',
        c4: 'Live preview',
        c5: 'ZIP export',
      },
      design: {
        tab: 'Eleftheria Design',
        title: 'From brief to working prototype',
        lede:
          'Scope a design through guided questions, and Eleftheria writes a DESIGN.md contract plus a self-contained HTML prototype. Edit it on a multi-page canvas, then hand the whole thing to Eleftheria Code to build for real.',
        c1: 'Multi-page canvas',
        c2: 'Draw tools',
        c3: '30+ formats',
        c4: 'Brand extraction',
        c5: 'Handoff to Code',
        c6: 'Share',
        c7: 'Image workflow',
        c8: 'Background removal',
      },
      translate: {
        tab: 'Translate',
        title: 'Translation that stays on your stack',
        lede:
          'Run document and text translation on the same models you already host. Set languages, tone, and multi-pass workflows — without sending content to a third-party SaaS.',
        c1: 'Language pairs',
        c2: 'Multi-pass workflows',
        c3: 'Document projects',
        c4: 'Your models',
        c5: 'Same privacy rules',
      },
      more: {
        mcp: {
          t: 'MCP',
          d: 'Connect Model Context Protocol tool servers so agents can call your internal APIs and databases under group permissions.',
        },
        projects: {
          t: 'Projects',
          d: 'Organize chats, files, and code workspaces under shared project boundaries for teams.',
        },
        artifacts: {
          t: 'Artifacts',
          d: 'Structured outputs from any hub — tables, charts, and documents you can export or reopen later.',
        },
      },
    },
    models: {
      eyebrow: 'Models & API',
      title: 'Your models. <em>Your keys.</em> Your rules.',
      lede:
        'Bring your own OpenAI-compatible inference, govern what each group can call, and automate the platform with bearer tokens — local-first, with optional cloud providers when egress is allowed.',
      p1: {
        t: 'Bring your own models',
        d: 'Point chat, embeddings, and reranking at vLLM, llama-server, Ollama, or any OpenAI-compatible endpoint you operate.',
      },
      p2: {
        t: 'Provider registry',
        d: 'Local is the default. Optionally register OpenAI, Gemini, DeepSeek, Groq, or Azure when your policy allows outbound traffic.',
      },
      p3: {
        t: 'Per-group permissions',
        d: 'Map LDAP groups to model catalogs and hub access so teams only see the inference you approve.',
      },
      p4: {
        t: 'API keys',
        d: 'Issue wbr_ bearer tokens for REST and WebSocket scripting — the same auth boundary as the web UI.',
      },
    },
    infra: {
      eyebrow: 'Your perimeter',
      title: 'Runs <em>where you do.</em>',
      lede:
        'Every component ships in your Docker Compose stack. Inference hits model endpoints you operate. Turn on air-gap mode and outbound access is disabled at the application layer.',
      diagramAlt: 'Eleftheria architecture inside your network boundary',
      p1: {
        t: 'Air-gap mode',
        d: 'Web search is disabled at the source, model weights load from local cache, and the data-analysis sandbox runs with networking switched off entirely.',
      },
      p2: {
        t: 'Your models, your silicon',
        d: 'Point Eleftheria at any OpenAI-compatible endpoint. Chat, embeddings, and reranking are configured independently, so you can mix model sizes per workload.',
      },
      p3: {
        t: 'Isolation by default',
        d: 'Each user gets their own coding workspace on disk. Spreadsheet analysis executes in a throwaway container with no network route out.',
      },
      dg: {
        internet: 'Public internet',
        network: 'Your network',
        nginx: 'TLS + static',
        api: 'app + RAG',
        db: 'embeddings & history',
        llm: 'your models',
        agent: 'coding agent',
        foot: 'No outbound calls · No telemetry · No vendor account',
      },
    },
    platform: {
      eyebrow: 'Platform',
      title: 'Built for <em>more than one</em> person.',
      lede:
        'Eleftheria is a multi-tenant deployment, not a desktop toy. Identity, permissions, and auditing are part of the product rather than an enterprise upsell.',
      c1: { t: 'LDAP & Active Directory', d: 'Authenticate against directory infrastructure you already run, and map existing groups straight onto Eleftheria roles.' },
      c2: { t: 'Per-group model permissions', d: 'Decide which groups reach which models, and gate the Code and Design workspaces independently per user.' },
      c3: { t: 'Knowledge Archives', d: 'Curated document collections, maintained centrally and attachable to any conversation.' },
      c4: { t: 'Sandboxed analysis', d: 'Spreadsheets are handled by a pandas agent inside a container with no network access.' },
      c5: { t: 'MCP tool servers', d: 'Register Model Context Protocol servers once and expose them to chat and coding agents under the same permission model.' },
      c6: { t: 'Everything exports', d: 'Conversations to Word, artifacts to PDF and Excel, designs to PNG, PDF, and HTML, projects to ZIP. Nothing is trapped in the product.' },
      c7: { t: 'Answer verification', d: 'Run a response past several verifier models and a judge, then surface a confidence rating next to the answer.' },
    },
    cmp: {
      eyebrow: 'The trade',
      title: 'What you give up by <em>staying home.</em>',
      lede:
        'An honest comparison. Hosted suites ship faster and have bigger models. Eleftheria gives you the one thing they structurally cannot.',
      them: {
        kicker: 'Hosted AI suites',
        name: "Someone else's computer",
        1: 'Your documents are processed on infrastructure you cannot inspect',
        2: 'Models change under you, with no way to pin a version',
        3: 'Offline is not a supported state',
        4: 'Per-seat pricing that scales with your headcount',
        5: 'Data residency is a contract clause, not an architecture',
      },
      us: {
        name: 'Your computer',
        1: 'Documents are embedded and stored in your own Postgres instance',
        2: 'You choose the weights and upgrade on your schedule',
        3: 'Air-gap mode is a first-class, tested configuration',
        4: 'Add users without adding invoices',
        5: 'Data residency is wherever you racked the server',
      },
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Software licence. <em>Your</em> infrastructure.',
      lede:
        'On-premise licence for European teams. You run the hardware and models — we licence the workspace. Prices in EUR, net of VAT.',
      note: 'Full data sovereignty · Air-gap capable · GDPR DPA included · Reverse-charge VAT for EU B2B',
      perMonth: '/ month',
      popular: 'Most popular',
      custom: 'Custom',
      cta: 'Join waitlist',
      ctaEnt: 'Talk to sales',
      foot:
        '~€20 / user / month effective across paid tiers. Module add-ons from €3–€6 / user / month. LLM inference costs are yours — local or cloud providers you configure. Annual billing default; monthly +15%.',
      starter: {
        name: 'Starter',
        tag: 'Core platform for small teams',
        meta: '€5,880 / year · up to 25 users',
        f1: 'Chat, RAG & Knowledge Archives',
        f2: 'Multi-model registry & MCP',
        f3: 'LDAP / AD & air-gap mode',
        f4: 'Email support (48h)',
      },
      pro: {
        name: 'Professional',
        tag: 'Add AI translation workflows',
        meta: '€11,880 / year · up to 50 users',
        f1: 'Everything in Starter',
        f2: 'Vostok Translate hub',
        f3: 'Glossaries & bilingual export',
        f4: 'Email support (24h)',
      },
      suite: {
        name: 'Full Suite',
        tag: 'All four modules, one platform',
        meta: '€23,880 / year · up to 100 users',
        f1: 'Everything in Professional',
        f2: 'Vostok Design studio',
        f3: 'Vostok Code agent IDE',
        f4: 'Business hours + Slack',
      },
      ent: {
        name: 'Enterprise',
        tag: 'Unlimited scale, dedicated support',
        meta: 'Unlimited users · from €48,000 / year',
        f1: 'All modules + custom integrations',
        f2: 'Dedicated CSM & SLA',
        f3: 'On-site & AI Act assessment',
        f4: 'Public-sector discount available',
      },
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Before you ask',
      q1: {
        q: 'Does anything leave my network?',
        a: 'Only if you let it. Web search is the single feature that reaches outward, and air-gap mode disables it at the application layer. Inference goes to endpoints you configure, which are normally containers in the same Compose stack. There is no telemetry and no vendor account.',
      },
      q2: {
        q: 'What hardware does this need?',
        a: 'The application tier is modest — FastAPI, Postgres, and nginx run comfortably on a small server. The real requirement is whatever GPU capacity your chosen models need. Because chat and embedding endpoints are configured separately, you can run a large chat model on one machine and a small embedding model elsewhere.',
      },
      q3: {
        q: 'Which models can I use?',
        a: 'Anything behind an OpenAI-compatible API. The provider registry defaults to local llama-server or vLLM; you can add optional cloud providers when egress is allowed. Embeddings default to BGE-M3. Swapping a model is a configuration change, not a migration.',
      },
      q4: {
        q: 'How is this different from a chat UI on top of a local model?',
        a: 'The retrieval pipeline, the coding agent with real filesystem and git access, the design studio that emits working prototypes, and the multi-user permission layer. A chat wrapper gives you a text box. Eleftheria gives you three production workspaces that share state.',
      },
      q5: {
        q: 'Can the coding agent actually run code?',
        a: 'Yes. Build mode has shell and file-write access inside a workspace scoped to that session and user. Plan and Ask modes are read-only by design, so you can investigate a codebase with no risk of modification.',
      },
      q6: {
        q: 'What happens to my data if I stop using it?',
        a: 'It stays on your disks, because it never went anywhere else. Chats export to Word, artifacts to PDF and Excel, designs to PNG, PDF, and HTML, and code projects to ZIP. The database is ordinary Postgres you can dump.',
      },
      q7: {
        q: 'Does it support single sign-on?',
        a: 'LDAP and Active Directory integration is built in, including group mapping onto roles and model permissions. Local username and password accounts also work, with registration toggleable.',
      },
      q8: {
        q: 'How do I try it?',
        a: 'The whole stack is a Docker Compose file. Bring up the services, point the configuration at your model endpoints, and open the app in a browser.',
      },
      q9: {
        q: 'Can I call Eleftheria from scripts?',
        a: 'Yes. Create API keys in the admin UI — wbr_ bearer tokens work against REST and WebSocket endpoints with the same group permissions as your user account.',
      },
      q10: {
        q: 'Is there a dedicated translate hub?',
        a: 'Yes. The Translate hub runs document and text translation on your configured models, with the same local-first privacy guarantees as chat — no third-party translation API required.',
      },
    },
    cta: {
      title: 'Keep the work. <em>Keep the data.</em>',
      lede: 'One deployment. Seven hubs. Nothing leaving the building.',
      primary: 'Join waitlist',
      secondary: 'Read the overview',
    },
    footer: {
      tag: 'A self-hosted AI workspace where chat, code, and design share one interface — and your data never leaves your network.',
      product: 'Product',
      resources: 'Resources',
      start: 'Get started',
      overview: 'Overview deck',
      open: 'Join waitlist',
      signin: 'Sign in',
      rights: '© 2026 Eleftheria. Security. Independence. Precision.',
      built: 'Self-hosted by design.',
    },
    wait: {
      title: 'Join the waitlist',
      lede:
        'Eleftheria rolls out to one team at a time. Leave an email and we will get in touch about access.',
      emailLabel: 'Work email',
      placeholder: 'you@company.com',
      submit: 'Request access',
      sending: 'Sending…',
      successTitle: 'You are on the list',
      successBody:
        'Thanks — we have your address and will reach out when a slot opens for your team.',
      errInvalid: 'Enter a valid email address.',
      errRate: 'Too many attempts. Please try again in a minute.',
      errGeneric: 'Could not send that. Please try again.',
      privacy: 'Stored on our own server. No third-party trackers, no mailing lists.',
      close: 'Close',
    },
  };

  /* ---------------------------------------------------------------- IT */
  T.it = {
    meta: {
      title: 'Eleftheria — Il workspace AI che resta dentro le tue mura',
      description:
        'Workspace AI self-hosted. Chat basata sui tuoi documenti, un IDE con agente di coding e uno studio di design in una sola interfaccia — interamente sulla tua infrastruttura.',
    },
    nav: { hubs: 'Workspace', infra: 'Infrastruttura', models: 'Modelli', platform: 'Piattaforma', pricing: 'Prezzi', faq: 'FAQ', cta: 'Iscriviti' },
    hero: {
      eyebrow: 'Sicurezza. Indipendenza. Precisione.',
      l1: 'Il workspace AI',
      l2: 'che resta <em>dentro</em>',
      l3: 'le tue mura.',
      lede:
        'Chat basata sui tuoi documenti, un IDE con agente di coding e uno studio di design — più hub Traduzione e MCP — una sola interfaccia, interamente dentro la tua rete. I tuoi modelli. Il tuo hardware. Le tue regole.',
      ctaPrimary: 'Iscriviti alla lista',
      ctaSecondary: 'Scopri cosa fa',
      note: 'Compatibile con reti isolate — funziona senza alcuna connessione in uscita',
    },
    slot: {
      hero: 'Panoramica del workspace',
      chat: 'Chat con pannello artefatti',
      code: 'IDE: albero, editor, agente',
      design: 'Canvas di design e barra strumenti',
      translate: 'Progetti Translate',
      models: 'Catalogo modelli e provider',
    },
    stats: {
      context: 'Finestra di contesto in token',
      formats: 'Formati canvas e stampa',
      hubs: 'Hub prodotto, un\'interfaccia',
      bytes: 'Byte inviati a terze parti',
    },
    hubs: {
      eyebrow: 'Hub prodotto',
      title: "Un'interfaccia, <em>sette hub.</em>",
      lede:
        'Sette hub prodotto condividono login, permessi e file. Chat, codice e design sono i driver quotidiani — e si passano il lavoro a vicenda.',
      open: 'Iscriviti alla lista',
      chat: {
        tab: 'Chat',
        title: 'Risposte fondate sui tuoi documenti',
        lede:
          'Carica un PDF, un contratto o un foglio di calcolo e fai domande su di esso. Il retrieval gira su pgvector dentro il tuo database — il testo originale non lascia mai la macchina su cui è arrivato.',
        c1: 'Archivi di conoscenza',
        c2: 'Visione',
        c3: 'Verifica delle risposte',
        c4: 'Pannello artefatti',
        c5: 'Allegati',
      },
      code: {
        tab: 'Eleftheria Code',
        title: 'Un agente che pianifica prima di costruire',
        lede:
          'Tre modalità, volutamente separate. Plan indaga e scrive una specifica senza toccare un file. Build la implementa. Ask risponde in sola lettura. Ogni sessione ha un workspace isolato con la propria cronologia git.',
        c1: 'Plan · Build · Ask',
        c2: 'Git e clone del repo',
        c3: 'Editor Monaco',
        c4: 'Anteprima live',
        c5: 'Esportazione ZIP',
      },
      design: {
        tab: 'Eleftheria Design',
        title: 'Dal brief al prototipo funzionante',
        lede:
          'Definisci un design tramite domande guidate e Eleftheria scrive un contratto DESIGN.md più un prototipo HTML autonomo. Modificalo su un canvas multipagina, poi passa tutto a Eleftheria Code per realizzarlo davvero.',
        c1: 'Canvas multipagina',
        c2: 'Strumenti di disegno',
        c3: 'Oltre 30 formati',
        c4: 'Estrazione del brand',
        c5: 'Passaggio a Code',
        c6: 'Condivisione',
        c7: 'Flusso immagini',
        c8: 'Rimozione sfondo',
      },
      translate: {
        tab: 'Translate',
        title: 'Traduzione che resta sul tuo stack',
        lede:
          'Esegui traduzione di documenti e testi sugli stessi modelli che già ospiti. Imposta lingue, tono e flussi multi-pass — senza inviare contenuti a un SaaS di terzi.',
        c1: 'Coppie di lingue',
        c2: 'Flussi multi-pass',
        c3: 'Progetti documento',
        c4: 'I tuoi modelli',
        c5: 'Stesse regole di privacy',
      },
      more: {
        mcp: {
          t: 'MCP',
          d: 'Collega server di strumenti Model Context Protocol così gli agenti chiamano API e database interni con i permessi di gruppo.',
        },
        projects: {
          t: 'Progetti',
          d: 'Organizza chat, file e workspace di codice in confini di progetto condivisi per i team.',
        },
        artifacts: {
          t: 'Artefatti',
          d: 'Output strutturati da ogni hub — tabelle, grafici e documenti da esportare o riaprire.',
        },
      },
    },
    models: {
      eyebrow: 'Modelli e API',
      title: 'I tuoi modelli. <em>Le tue chiavi.</em> Le tue regole.',
      lede:
        'Porta inferenza compatibile OpenAI, governa cosa può chiamare ogni gruppo e automatizza la piattaforma con token bearer — local-first, con provider cloud opzionali quando l\'egress è consentito.',
      p1: {
        t: 'Porta i tuoi modelli',
        d: 'Punta chat, embedding e reranking a vLLM, llama-server, Ollama o qualsiasi endpoint compatibile OpenAI che gestisci.',
      },
      p2: {
        t: 'Registro provider',
        d: 'Il locale è predefinito. Registra opzionalmente OpenAI, Gemini, DeepSeek, Groq o Azure quando la policy consente traffico in uscita.',
      },
      p3: {
        t: 'Permessi per gruppo',
        d: 'Mappa i gruppi LDAP a cataloghi di modelli e accesso agli hub così i team vedono solo l\'inferenza che approvi.',
      },
      p4: {
        t: 'Chiavi API',
        d: 'Emetti token bearer wbr_ per script REST e WebSocket — lo stesso confine di autenticazione della UI web.',
      },
    },
    infra: {
      eyebrow: 'Il tuo perimetro',
      title: 'Gira <em>dove giri tu.</em>',
      lede:
        'Ogni componente viaggia nel tuo stack Docker Compose. L\'inferenza usa endpoint di modelli che gestisci tu. Attiva la modalità isolata e l\'accesso in uscita viene disabilitato a livello applicativo.',
      diagramAlt: 'Architettura di Eleftheria dentro il perimetro della tua rete',
      p1: {
        t: 'Modalità isolata',
        d: 'La ricerca web viene disattivata alla fonte, i pesi dei modelli si caricano dalla cache locale e la sandbox di analisi dati gira con il networking completamente spento.',
      },
      p2: {
        t: 'I tuoi modelli, il tuo silicio',
        d: 'Punta Eleftheria a qualsiasi endpoint compatibile con OpenAI. Chat, embedding e reranking si configurano in modo indipendente, così puoi combinare modelli di dimensioni diverse per ogni carico di lavoro.',
      },
      p3: {
        t: 'Isolamento di default',
        d: 'Ogni utente ha il proprio workspace di coding su disco. L\'analisi dei fogli di calcolo gira in un container usa-e-getta senza alcuna rotta di rete verso l\'esterno.',
      },
      dg: {
        internet: 'Internet pubblica',
        network: 'La tua rete',
        nginx: 'TLS + statico',
        api: 'app + RAG',
        db: 'embedding e cronologia',
        llm: 'i tuoi modelli',
        agent: 'agente di coding',
        foot: 'Nessuna chiamata in uscita · Nessuna telemetria · Nessun account fornitore',
      },
    },
    platform: {
      eyebrow: 'Piattaforma',
      title: 'Pensato per <em>più di una</em> persona.',
      lede:
        'Eleftheria è un deployment multi-tenant, non un giocattolo da desktop. Identità, permessi e audit fanno parte del prodotto, non sono un upsell enterprise.',
      c1: { t: 'LDAP e Active Directory', d: 'Autentica contro l\'infrastruttura di directory che già usi e mappa i gruppi esistenti direttamente sui ruoli di Eleftheria.' },
      c2: { t: 'Permessi sui modelli per gruppo', d: 'Decidi quali gruppi raggiungono quali modelli e abilita i workspace Code e Design in modo indipendente per ogni utente.' },
      c3: { t: 'Archivi di conoscenza', d: 'Raccolte di documenti curate, gestite centralmente e collegabili a qualsiasi conversazione.' },
      c4: { t: 'Analisi in sandbox', d: 'I fogli di calcolo sono gestiti da un agente pandas dentro un container senza accesso alla rete.' },
      c5: { t: 'Server strumenti MCP', d: 'Registra i server Model Context Protocol una volta ed esponili a chat e agenti di coding con lo stesso modello di permessi.' },
      c6: { t: 'Tutto si esporta', d: 'Conversazioni in Word, artefatti in PDF ed Excel, design in PNG, PDF e HTML, progetti in ZIP. Niente resta intrappolato nel prodotto.' },
      c7: { t: 'Verifica delle risposte', d: 'Fai passare una risposta attraverso più modelli verificatori e un giudice, poi mostra un livello di affidabilità accanto alla risposta.' },
    },
    cmp: {
      eyebrow: 'Lo scambio',
      title: 'A cosa rinunci <em>restando a casa.</em>',
      lede:
        'Un confronto onesto. Le suite hosted rilasciano più in fretta e hanno modelli più grandi. Eleftheria ti dà l\'unica cosa che loro, strutturalmente, non possono dare.',
      them: {
        kicker: 'Suite AI hosted',
        name: 'Il computer di qualcun altro',
        1: 'I tuoi documenti vengono elaborati su infrastrutture che non puoi ispezionare',
        2: 'I modelli cambiano sotto di te, senza poter fissare una versione',
        3: 'Il funzionamento offline non è uno stato supportato',
        4: 'Prezzi per postazione che crescono con il numero di dipendenti',
        5: 'La residenza dei dati è una clausola contrattuale, non un\'architettura',
      },
      us: {
        name: 'Il tuo computer',
        1: 'I documenti vengono vettorializzati e salvati nella tua istanza Postgres',
        2: 'Scegli tu i pesi e aggiorni secondo i tuoi tempi',
        3: 'La modalità isolata è una configurazione di prima classe e testata',
        4: 'Aggiungi utenti senza aggiungere fatture',
        5: 'La residenza dei dati è dove hai messo il server in rack',
      },
    },
    pricing: {
      eyebrow: 'Prezzi',
      title: 'Licenza software. <em>La tua</em> infrastruttura.',
      lede:
        'Licenza on-premise per team europei. Voi gestite hardware e modelli — noi forniamo il workspace. Prezzi in EUR, IVA esclusa.',
      note: 'Sovranità dei dati · Air-gap · DPA GDPR incluso · Reverse charge IVA per B2B UE',
      perMonth: '/ mese',
      popular: 'Più richiesto',
      custom: 'Su misura',
      cta: 'Iscriviti',
      ctaEnt: 'Parla con le vendite',
      foot:
        '~€20 / utente / mese effettivi sui piani a pagamento. Add-on moduli da €3–€6 / utente / mese. I costi LLM sono vostri — provider locali o cloud. Fatturazione annuale di default; mensile +15%.',
      starter: {
        name: 'Starter',
        tag: 'Piattaforma core per team piccoli',
        meta: '€5.880 / anno · fino a 25 utenti',
        f1: 'Chat, RAG e Knowledge Archives',
        f2: 'Registro multi-modello e MCP',
        f3: 'LDAP / AD e modalità air-gap',
        f4: 'Supporto email (48h)',
      },
      pro: {
        name: 'Professional',
        tag: 'Aggiungi la traduzione AI',
        meta: '€11.880 / anno · fino a 50 utenti',
        f1: 'Tutto di Starter',
        f2: 'Hub Vostok Translate',
        f3: 'Glossari ed export bilingue',
        f4: 'Supporto email (24h)',
      },
      suite: {
        name: 'Suite Completa',
        tag: 'Tutti e quattro i moduli',
        meta: '€23.880 / anno · fino a 100 utenti',
        f1: 'Tutto di Professional',
        f2: 'Studio Vostok Design',
        f3: 'IDE agente Vostok Code',
        f4: 'Orario lavorativo + Slack',
      },
      ent: {
        name: 'Enterprise',
        tag: 'Scala illimitata, supporto dedicato',
        meta: 'Utenti illimitati · da €48.000 / anno',
        f1: 'Tutti i moduli + integrazioni custom',
        f2: 'CSM dedicato e SLA',
        f3: 'On-site e assessment AI Act',
        f4: 'Sconto settore pubblico disponibile',
      },
    },
    faq: {
      eyebrow: 'Domande',
      title: 'Prima che tu lo chieda',
      q1: {
        q: 'Qualcosa esce dalla mia rete?',
        a: 'Solo se lo permetti. La ricerca web è l\'unica funzione che guarda verso l\'esterno e la modalità isolata la disattiva a livello applicativo. L\'inferenza va verso endpoint che configuri tu, normalmente container nello stesso stack Compose. Non c\'è telemetria né account fornitore.',
      },
      q2: {
        q: 'Che hardware serve?',
        a: 'Il livello applicativo è leggero: FastAPI, Postgres e nginx girano comodamente su un server piccolo. Il requisito vero è la capacità GPU richiesta dai modelli che scegli. Poiché gli endpoint di chat ed embedding si configurano separatamente, puoi far girare un modello di chat grande su una macchina e un modello di embedding piccolo altrove.',
      },
      q3: {
        q: 'Quali modelli posso usare?',
        a: 'Qualsiasi cosa dietro un\'API compatibile con OpenAI. Il registro provider usa di default llama-server o vLLM locali; puoi aggiungere provider cloud opzionali quando l\'egress è consentito. Gli embedding usano BGE-M3 di default. Cambiare modello è una modifica di configurazione, non una migrazione.',
      },
      q4: {
        q: 'In cosa differisce da una UI di chat sopra un modello locale?',
        a: 'La pipeline di retrieval, l\'agente di coding con accesso reale a filesystem e git, lo studio di design che produce prototipi funzionanti e il livello di permessi multi-utente. Un wrapper di chat ti dà una casella di testo. Eleftheria ti dà tre workspace di produzione che condividono lo stato.',
      },
      q5: {
        q: 'L\'agente di coding esegue davvero il codice?',
        a: 'Sì. La modalità Build ha accesso a shell e scrittura file dentro un workspace limitato a quella sessione e a quell\'utente. Le modalità Plan e Ask sono in sola lettura per scelta, così puoi esplorare un codebase senza rischio di modifiche.',
      },
      q6: {
        q: 'Che fine fanno i miei dati se smetto di usarlo?',
        a: 'Restano sui tuoi dischi, perché non sono mai andati altrove. Le chat si esportano in Word, gli artefatti in PDF ed Excel, i design in PNG, PDF e HTML, i progetti di codice in ZIP. Il database è un normale Postgres di cui puoi fare il dump.',
      },
      q7: {
        q: 'Supporta il single sign-on?',
        a: 'L\'integrazione con LDAP e Active Directory è inclusa, con mappatura dei gruppi su ruoli e permessi sui modelli. Funzionano anche gli account locali con username e password, con registrazione attivabile o disattivabile.',
      },
      q8: {
        q: 'Come lo provo?',
        a: 'L\'intero stack è un file Docker Compose. Avvia i servizi, punta la configurazione ai tuoi endpoint di modelli e apri l\'app nel browser.',
      },
      q9: {
        q: 'Posso chiamare Eleftheria da script?',
        a: 'Sì. Crea chiavi API nell\'admin — i token bearer wbr_ funzionano su REST e WebSocket con gli stessi permessi di gruppo del tuo account.',
      },
      q10: {
        q: 'C\'è un hub dedicato alla traduzione?',
        a: 'Sì. L\'hub Traduzione esegue traduzione di documenti e testi sui modelli configurati, con le stesse garanzie local-first della chat — senza API di traduzione di terze parti.',
      },
    },
    cta: {
      title: 'Tieni il lavoro. <em>Tieni i dati.</em>',
      lede: 'Un solo deployment. Sette hub. Niente che esce dall\'edificio.',
      primary: 'Iscriviti alla lista',
      secondary: 'Leggi la panoramica',
    },
    footer: {
      tag: 'Un workspace AI self-hosted dove chat, codice e design condividono una sola interfaccia — e i tuoi dati non lasciano mai la tua rete.',
      product: 'Prodotto',
      resources: 'Risorse',
      start: 'Inizia',
      overview: 'Presentazione',
      open: 'Iscriviti alla lista',
      signin: 'Accedi',
      rights: '© 2026 Eleftheria. Sicurezza. Indipendenza. Precisione.',
      built: 'Self-hosted per scelta.',
    },
    wait: {
      title: 'Iscriviti alla lista d\'attesa',
      lede:
        'Eleftheria viene attivato un team alla volta. Lascia un\'email e ti contatteremo per l\'accesso.',
      emailLabel: 'Email di lavoro',
      placeholder: 'nome@azienda.com',
      submit: 'Richiedi accesso',
      sending: 'Invio…',
      successTitle: 'Sei in lista',
      successBody:
        'Grazie — abbiamo il tuo indirizzo e ti scriveremo appena si libera un posto per il tuo team.',
      errInvalid: 'Inserisci un indirizzo email valido.',
      errRate: 'Troppi tentativi. Riprova tra un minuto.',
      errGeneric: 'Invio non riuscito. Riprova.',
      privacy: 'Salvata sul nostro server. Nessun tracker di terze parti, nessuna newsletter.',
      close: 'Chiudi',
    },
  };

  /* ---------------------------------------------------------------- RU */
  T.ru = {
    meta: {
      title: 'Eleftheria — ИИ-платформа, которая никогда не выходит наружу',
      description:
        'Self-hosted ИИ-платформа. Чат по вашим документам, IDE с агентом-разработчиком и дизайн-студия в одном интерфейсе — полностью на вашей инфраструктуре.',
    },
    nav: { hubs: 'Рабочие среды', infra: 'Инфраструктура', models: 'Модели', platform: 'Платформа', pricing: 'Тарифы', faq: 'Вопросы', cta: 'В список ожидания' },
    hero: {
      eyebrow: 'Безопасность. Независимость. Точность.',
      l1: 'ИИ-платформа,',
      l2: 'которая <em>никогда</em>',
      l3: 'не выходит наружу.',
      lede:
        'Чат по вашим документам, IDE с агентом-разработчиком и дизайн-студия — плюс хабы перевода и MCP — один интерфейс, работающий целиком внутри вашей сети. Ваши модели. Ваше железо. Ваши правила.',
      ctaPrimary: 'В список ожидания',
      ctaSecondary: 'Посмотреть возможности',
      note: 'Работает в изолированном контуре — без единого исходящего соединения',
    },
    slot: {
      hero: 'Обзор рабочей среды',
      chat: 'Чат с панелью артефактов',
      code: 'IDE: дерево, редактор, агент',
      design: 'Холст дизайна и панель инструментов',
      translate: 'Проекты перевода',
      models: 'Каталог моделей и провайдеры',
    },
    stats: {
      context: 'Токенов в контекстном окне',
      formats: 'Форматов холста и печати',
      hubs: 'Продуктовые хабы, один интерфейс',
      bytes: 'Байт передано третьим сторонам',
    },
    hubs: {
      eyebrow: 'Продуктовые хабы',
      title: 'Один интерфейс, <em>семь хабов.</em>',
      lede:
        'Семь продуктовых хабов делят один вход, одну модель прав и общие файлы. Чат, код и дизайн — основные инструменты каждый день, и они передают работу друг другу.',
      open: 'В список ожидания',
      chat: {
        tab: 'Чат',
        title: 'Ответы, опирающиеся на ваши документы',
        lede:
          'Загрузите PDF, договор или таблицу и задавайте вопросы по ним. Поиск идёт через pgvector внутри вашей базы данных — исходный текст никогда не покидает машину, на которую он попал.',
        c1: 'Базы знаний',
        c2: 'Работа с изображениями',
        c3: 'Проверка ответов',
        c4: 'Панель артефактов',
        c5: 'Вложения',
      },
      code: {
        tab: 'Eleftheria Code',
        title: 'Агент, который сначала планирует',
        lede:
          'Три режима, намеренно разделённые. Plan изучает проект и пишет спецификацию, не трогая файлы. Build реализует её. Ask отвечает на вопросы только для чтения. Каждая сессия получает изолированную рабочую папку со своей историей git.',
        c1: 'Plan · Build · Ask',
        c2: 'Git и клонирование репозиториев',
        c3: 'Редактор Monaco',
        c4: 'Живой предпросмотр',
        c5: 'Экспорт в ZIP',
      },
      design: {
        tab: 'Eleftheria Design',
        title: 'От брифа до рабочего прототипа',
        lede:
          'Опишите задачу через наводящие вопросы, и Eleftheria напишет контракт DESIGN.md и самостоятельный HTML-прототип. Отредактируйте его на многостраничном холсте и передайте всё в Eleftheria Code для реальной сборки.',
        c1: 'Многостраничный холст',
        c2: 'Инструменты рисования',
        c3: 'Более 30 форматов',
        c4: 'Извлечение брендбука',
        c5: 'Передача в Code',
        c6: 'Поделиться',
        c7: 'Работа с изображениями',
        c8: 'Удаление фона',
      },
      translate: {
        tab: 'Перевод',
        title: 'Перевод, который остаётся у вас',
        lede:
          'Запускайте перевод документов и текста на тех же моделях, что уже крутите у себя. Языки, тон и многопроходные процессы — без отправки контента в чужой SaaS.',
        c1: 'Языковые пары',
        c2: 'Многопроходные процессы',
        c3: 'Документные проекты',
        c4: 'Ваши модели',
        c5: 'Те же правила приватности',
      },
      more: {
        mcp: {
          t: 'MCP',
          d: 'Подключайте серверы инструментов Model Context Protocol, чтобы агенты вызывали внутренние API и базы с правами групп.',
        },
        projects: {
          t: 'Проекты',
          d: 'Объединяйте чаты, файлы и рабочие среды кода в общих границах проекта для команд.',
        },
        artifacts: {
          t: 'Артефакты',
          d: 'Структурированные результаты из любого хаба — таблицы, диаграммы и документы для экспорта или повторного открытия.',
        },
      },
    },
    models: {
      eyebrow: 'Модели и API',
      title: 'Ваши модели. <em>Ваши ключи.</em> Ваши правила.',
      lede:
        'Подключайте совместимый с OpenAI инференс, управляйте доступом групп и автоматизируйте платформу bearer-токенами — local-first, с опциональными облачными провайдерами при разрешённом egress.',
      p1: {
        t: 'Свои модели',
        d: 'Направляйте чат, эмбеддинги и reranking на vLLM, llama-server, Ollama или любой совместимый с OpenAI эндпоинт под вашим контролем.',
      },
      p2: {
        t: 'Реестр провайдеров',
        d: 'По умолчанию — локально. При необходимости регистрируйте OpenAI, Gemini, DeepSeek, Groq или Azure, если политика разрешает исходящий трафик.',
      },
      p3: {
        t: 'Права по группам',
        d: 'Сопоставляйте группы LDAP с каталогами моделей и доступом к хабам, чтобы команды видели только одобренный инференс.',
      },
      p4: {
        t: 'API-ключи',
        d: 'Выдавайте bearer-токены wbr_ для REST и WebSocket — тот же контур аутентификации, что и в веб-интерфейсе.',
      },
    },
    infra: {
      eyebrow: 'Ваш периметр',
      title: 'Работает <em>там же, где вы.</em>',
      lede:
        'Все компоненты поставляются в вашем стеке Docker Compose. Инференс идёт на те эндпоинты моделей, которыми управляете вы. Включите изолированный режим — и исходящий доступ отключается на уровне приложения.',
      diagramAlt: 'Архитектура Eleftheria внутри периметра вашей сети',
      p1: {
        t: 'Изолированный режим',
        d: 'Веб-поиск отключается в источнике, веса моделей загружаются из локального кеша, а песочница анализа данных работает с полностью выключенной сетью.',
      },
      p2: {
        t: 'Ваши модели, ваше железо',
        d: 'Направьте Eleftheria на любой эндпоинт, совместимый с OpenAI. Чат, эмбеддинги и переранжирование настраиваются независимо, поэтому под каждую задачу можно взять модель своего размера.',
      },
      p3: {
        t: 'Изоляция по умолчанию',
        d: 'У каждого пользователя своя рабочая папка на диске. Анализ таблиц выполняется в одноразовом контейнере без маршрута во внешнюю сеть.',
      },
      dg: {
        internet: 'Публичный интернет',
        network: 'Ваша сеть',
        nginx: 'TLS + статика',
        api: 'приложение + RAG',
        db: 'эмбеддинги и история',
        llm: 'ваши модели',
        agent: 'агент-разработчик',
        foot: 'Нет исходящих вызовов · Нет телеметрии · Нет аккаунта у вендора',
      },
    },
    platform: {
      eyebrow: 'Платформа',
      title: 'Сделано <em>не для одного</em> человека.',
      lede:
        'Eleftheria — это многопользовательское развёртывание, а не настольная игрушка. Учётные записи, права и аудит входят в продукт, а не продаются отдельно как enterprise-функции.',
      c1: { t: 'LDAP и Active Directory', d: 'Аутентификация через каталог, который у вас уже работает, с прямым сопоставлением существующих групп на роли Eleftheria.' },
      c2: { t: 'Права на модели по группам', d: 'Решайте, каким группам доступны какие модели, и открывайте среды Code и Design независимо для каждого пользователя.' },
      c3: { t: 'Базы знаний', d: 'Кураторские подборки документов, которые ведутся централизованно и подключаются к любому разговору.' },
      c4: { t: 'Анализ в песочнице', d: 'Таблицы обрабатывает агент на pandas внутри контейнера без доступа к сети.' },
      c5: { t: 'Серверы инструментов MCP', d: 'Зарегистрируйте серверы Model Context Protocol один раз и откройте их чату и агентам разработки с той же моделью прав.' },
      c6: { t: 'Всё выгружается', d: 'Разговоры в Word, артефакты в PDF и Excel, дизайны в PNG, PDF и HTML, проекты в ZIP. Ничто не остаётся запертым в продукте.' },
      c7: { t: 'Проверка ответов', d: 'Прогоните ответ через несколько моделей-проверяющих и арбитра, а затем покажите рядом с ответом оценку уверенности.' },
    },
    cmp: {
      eyebrow: 'Размен',
      title: 'Чем вы жертвуете, <em>оставаясь дома.</em>',
      lede:
        'Честное сравнение. Облачные платформы выпускают функции быстрее и располагают более крупными моделями. Eleftheria даёт то единственное, чего они не могут дать по своей природе.',
      them: {
        kicker: 'Облачные ИИ-платформы',
        name: 'Чужой компьютер',
        1: 'Ваши документы обрабатываются на инфраструктуре, которую нельзя проверить',
        2: 'Модели меняются без вашего участия, зафиксировать версию невозможно',
        3: 'Работа офлайн не поддерживается в принципе',
        4: 'Оплата за каждое рабочее место растёт вместе со штатом',
        5: 'Место хранения данных — пункт договора, а не архитектура',
      },
      us: {
        name: 'Ваш компьютер',
        1: 'Документы векторизуются и хранятся в вашем собственном Postgres',
        2: 'Вы сами выбираете веса и обновляетесь в своём темпе',
        3: 'Изолированный режим — полноценная, протестированная конфигурация',
        4: 'Добавляйте пользователей, не добавляя счетов',
        5: 'Данные лежат там, где вы поставили сервер в стойку',
      },
    },
    pricing: {
      eyebrow: 'Тарифы',
      title: 'Лицензия на ПО. <em>Ваша</em> инфраструктура.',
      lede:
        'On-premise лицензия для европейских команд. Вы обеспечиваете железо и модели — мы лицензируем workspace. Цены в EUR, без НДС.',
      note: 'Суверенитет данных · Air-gap · GDPR DPA включён · Reverse charge НДС для B2B в ЕС',
      perMonth: '/ мес.',
      popular: 'Популярный',
      custom: 'Индивидуально',
      cta: 'В список ожидания',
      ctaEnt: 'Связаться с продажами',
      foot:
        '~€20 / пользователь / мес. по платным тарифам. Дополнения модулей от €3–€6 / пользователь / мес. Стоимость LLM — ваша. Ежегодная оплата по умолчанию; ежемесячная +15%.',
      starter: {
        name: 'Starter',
        tag: 'Базовая платформа для небольших команд',
        meta: '€5 880 / год · до 25 пользователей',
        f1: 'Чат, RAG и Knowledge Archives',
        f2: 'Мультимодельный реестр и MCP',
        f3: 'LDAP / AD и air-gap режим',
        f4: 'Email-поддержка (48ч)',
      },
      pro: {
        name: 'Professional',
        tag: 'Добавьте AI-перевод',
        meta: '€11 880 / год · до 50 пользователей',
        f1: 'Всё из Starter',
        f2: 'Hub Vostok Translate',
        f3: 'Глоссарии и двуязычный экспорт',
        f4: 'Email-поддержка (24ч)',
      },
      suite: {
        name: 'Полный пакет',
        tag: 'Все четыре модуля',
        meta: '€23 880 / год · до 100 пользователей',
        f1: 'Всё из Professional',
        f2: 'Студия Vostok Design',
        f3: 'Агент IDE Vostok Code',
        f4: 'Рабочие часы + Slack',
      },
      ent: {
        name: 'Enterprise',
        tag: 'Неограниченный масштаб',
        meta: 'Без лимита пользователей · от €48 000 / год',
        f1: 'Все модули + кастомные интеграции',
        f2: 'Выделенный CSM и SLA',
        f3: 'Выезд и оценка AI Act',
        f4: 'Скидка для госсектора',
      },
    },
    faq: {
      eyebrow: 'Вопросы',
      title: 'Прежде чем вы спросите',
      q1: {
        q: 'Что-нибудь покидает мою сеть?',
        a: 'Только если вы это разрешите. Веб-поиск — единственная функция, смотрящая наружу, и изолированный режим отключает её на уровне приложения. Инференс идёт на эндпоинты, которые настраиваете вы, обычно это контейнеры в том же стеке Compose. Телеметрии нет, аккаунта у вендора нет.',
      },
      q2: {
        q: 'Какое железо нужно?',
        a: 'Прикладной слой нетребователен: FastAPI, Postgres и nginx спокойно работают на небольшом сервере. Реальное требование — это объём GPU, нужный выбранным вами моделям. Поскольку эндпоинты чата и эмбеддингов настраиваются отдельно, крупную модель чата можно держать на одной машине, а небольшую модель эмбеддингов — на другой.',
      },
      q3: {
        q: 'Какие модели можно использовать?',
        a: 'Любые за API, совместимым с OpenAI. Реестр провайдеров по умолчанию использует локальные llama-server или vLLM; при разрешённом egress можно добавить облачные провайдеры. Для эмбеддингов по умолчанию используется BGE-M3. Смена модели — это изменение конфигурации, а не миграция.',
      },
      q4: {
        q: 'Чем это отличается от чат-интерфейса поверх локальной модели?',
        a: 'Конвейером поиска, агентом-разработчиком с реальным доступом к файловой системе и git, дизайн-студией, которая выдаёт рабочие прототипы, и многопользовательским слоем прав. Обёртка над чатом даёт вам поле ввода. Eleftheria даёт три рабочие среды промышленного уровня с общим состоянием.',
      },
      q5: {
        q: 'Агент действительно может выполнять код?',
        a: 'Да. В режиме Build есть доступ к оболочке и записи файлов внутри рабочей папки, ограниченной этой сессией и этим пользователем. Режимы Plan и Ask намеренно доступны только для чтения, поэтому изучать код можно без риска что-либо изменить.',
      },
      q6: {
        q: 'Что станет с данными, если я перестану пользоваться системой?',
        a: 'Они останутся на ваших дисках, потому что никуда и не уходили. Чаты выгружаются в Word, артефакты — в PDF и Excel, дизайны — в PNG, PDF и HTML, проекты кода — в ZIP. База данных — обычный Postgres, с которого можно снять дамп.',
      },
      q7: {
        q: 'Поддерживается ли единый вход?',
        a: 'Интеграция с LDAP и Active Directory встроена, включая сопоставление групп с ролями и правами на модели. Локальные учётные записи с логином и паролем тоже работают, а регистрацию можно включить или выключить.',
      },
      q8: {
        q: 'Как это попробовать?',
        a: 'Весь стек — это файл Docker Compose. Поднимите сервисы, укажите в конфигурации свои эндпоинты моделей и откройте приложение в браузере.',
      },
      q9: {
        q: 'Можно вызывать Eleftheria из скриптов?',
        a: 'Да. Создайте API-ключи в админке — bearer-токены wbr_ работают с REST и WebSocket с теми же правами группы, что и у вашей учётной записи.',
      },
      q10: {
        q: 'Есть отдельный хаб перевода?',
        a: 'Да. Хаб перевода обрабатывает документы и текст на настроенных моделях с теми же local-first гарантиями приватности, что и чат — без стороннего API перевода.',
      },
    },
    cta: {
      title: 'Сохраните работу. <em>Сохраните данные.</em>',
      lede: 'Одно развёртывание. Семь хабов. Ничто не покидает здание.',
      primary: 'В список ожидания',
      secondary: 'Читать обзор',
    },
    footer: {
      tag: 'Self-hosted ИИ-платформа, где чат, код и дизайн живут в одном интерфейсе, а ваши данные никогда не покидают вашу сеть.',
      product: 'Продукт',
      resources: 'Материалы',
      start: 'Начать',
      overview: 'Презентация',
      open: 'В список ожидания',
      signin: 'Войти',
      rights: '© 2026 Eleftheria. Безопасность. Независимость. Точность.',
      built: 'Self-hosted по замыслу.',
    },
    wait: {
      title: 'Запись в список ожидания',
      lede:
        'Eleftheria подключается по одной команде за раз. Оставьте адрес — мы напишем вам о доступе.',
      emailLabel: 'Рабочая почта',
      placeholder: 'name@company.com',
      submit: 'Запросить доступ',
      sending: 'Отправка…',
      successTitle: 'Вы в списке',
      successBody:
        'Спасибо — адрес сохранён. Мы напишем, как только освободится место для вашей команды.',
      errInvalid: 'Введите корректный адрес электронной почты.',
      errRate: 'Слишком много попыток. Повторите через минуту.',
      errGeneric: 'Отправить не удалось. Попробуйте снова.',
      privacy: 'Хранится на нашем сервере. Без сторонних трекеров и рассылок.',
      close: 'Закрыть',
    },
  };

  /* ---------------------------------------------------------------- EL */
  T.el = {
    meta: {
      title: 'Eleftheria — Ο χώρος εργασίας AI που δεν βγαίνει ποτέ έξω',
      description:
        'Αυτο-φιλοξενούμενος χώρος εργασίας AI. Συνομιλία πάνω στα έγγραφά σας, IDE με πράκτορα κώδικα και στούντιο σχεδιασμού σε μία διεπαφή — εξ ολοκλήρου στη δική σας υποδομή.',
    },
    nav: { hubs: 'Χώροι εργασίας', infra: 'Υποδομή', models: 'Μοντέλα', platform: 'Πλατφόρμα', pricing: 'Τιμολόγηση', faq: 'Ερωτήσεις', cta: 'Λίστα αναμονής' },
    hero: {
      eyebrow: 'Ασφάλεια. Ανεξαρτησία. Ακρίβεια.',
      l1: 'Ο χώρος εργασίας',
      l2: 'AI που <em>δεν</em>',
      l3: 'βγαίνει ποτέ έξω.',
      lede:
        'Συνομιλία θεμελιωμένη στα έγγραφά σας, IDE με πράκτορα κώδικα και στούντιο σχεδιασμού — συν hub μετάφρασης και MCP — μία διεπαφή, που τρέχει εξ ολοκλήρου μέσα στο δικό σας δίκτυο. Τα μοντέλα σας. Το υλικό σας. Οι κανόνες σας.',
      ctaPrimary: 'Λίστα αναμονής',
      ctaSecondary: 'Δείτε τι κάνει',
      note: 'Λειτουργεί σε απομονωμένο δίκτυο — χωρίς καμία εξερχόμενη σύνδεση',
    },
    slot: {
      hero: 'Επισκόπηση χώρου εργασίας',
      chat: 'Συνομιλία με πίνακα τεκμηρίων',
      code: 'IDE: δέντρο, επεξεργαστής, πράκτορας',
      design: 'Καμβάς σχεδίασης και εργαλεία',
      translate: 'Έργα μετάφρασης',
      models: 'Κατάλογος μοντέλων και πάροχοι',
    },
    stats: {
      context: 'Παράθυρο συμφραζομένων σε tokens',
      formats: 'Μορφές καμβά και εκτύπωσης',
      hubs: 'Hubs προϊόντος, μία διεπαφή',
      bytes: 'Bytes προς τρίτους',
    },
    hubs: {
      eyebrow: 'Hubs προϊόντος',
      title: 'Μία διεπαφή, <em>επτά κόμβοι.</em>',
      lede:
        'Επτά hubs προϊόντος μοιράζονται μία σύνδεση, ένα μοντέλο δικαιωμάτων και τα ίδια αρχεία. Συνομιλία, κώδικας και σχεδιασμός είναι τα καθημερινά εργαλεία — και παραδίδουν τη δουλειά μεταξύ τους.',
      open: 'Εγγραφή στη λίστα αναμονής',
      chat: {
        tab: 'Συνομιλία',
        title: 'Απαντήσεις θεμελιωμένες στα έγγραφά σας',
        lede:
          'Ανεβάστε ένα PDF, ένα συμβόλαιο ή ένα υπολογιστικό φύλλο και ρωτήστε πάνω σε αυτό. Η ανάκτηση τρέχει σε pgvector μέσα στη δική σας βάση — το αρχικό κείμενο δεν φεύγει ποτέ από το μηχάνημα όπου κατέληξε.',
        c1: 'Αρχεία γνώσης',
        c2: 'Όραση',
        c3: 'Επαλήθευση απαντήσεων',
        c4: 'Πίνακας τεκμηρίων',
        c5: 'Συνημμένα',
      },
      code: {
        tab: 'Eleftheria Code',
        title: 'Ένας πράκτορας που σχεδιάζει πριν χτίσει',
        lede:
          'Τρεις λειτουργίες, σκόπιμα διαχωρισμένες. Η Plan διερευνά και γράφει προδιαγραφή χωρίς να αγγίξει αρχείο. Η Build την υλοποιεί. Η Ask απαντά μόνο για ανάγνωση. Κάθε συνεδρία παίρνει απομονωμένο χώρο εργασίας με δικό της ιστορικό git.',
        c1: 'Plan · Build · Ask',
        c2: 'Git και κλωνοποίηση repo',
        c3: 'Επεξεργαστής Monaco',
        c4: 'Ζωντανή προεπισκόπηση',
        c5: 'Εξαγωγή ZIP',
      },
      design: {
        tab: 'Eleftheria Design',
        title: 'Από το brief στο λειτουργικό πρωτότυπο',
        lede:
          'Ορίστε έναν σχεδιασμό μέσα από καθοδηγούμενες ερωτήσεις και το Eleftheria γράφει ένα συμβόλαιο DESIGN.md μαζί με ένα αυτοτελές πρωτότυπο HTML. Επεξεργαστείτε το σε καμβά πολλών σελίδων και παραδώστε τα όλα στο Eleftheria Code για πραγματική υλοποίηση.',
        c1: 'Καμβάς πολλών σελίδων',
        c2: 'Εργαλεία σχεδίασης',
        c3: 'Πάνω από 30 μορφές',
        c4: 'Εξαγωγή ταυτότητας',
        c5: 'Παράδοση στο Code',
        c6: 'Κοινοποίηση',
        c7: 'Ροή εικόνων',
        c8: 'Αφαίρεση φόντου',
      },
      translate: {
        tab: 'Μετάφραση',
        title: 'Μετάφραση που μένει στο stack σας',
        lede:
          'Τρέξτε μετάφραση εγγράφων και κειμένου στα ίδια μοντέλα που ήδη φιλοξενείτε. Ορίστε γλώσσες, τόνο και ροές πολλαπλών περασμάτων — χωρίς να στέλνετε περιεχόμενο σε τρίτο SaaS.',
        c1: 'Ζεύγη γλωσσών',
        c2: 'Ροές πολλαπλών περασμάτων',
        c3: 'Έργα εγγράφων',
        c4: 'Τα μοντέλα σας',
        c5: 'Ίδιοι κανόνες ιδιωτικότητας',
      },
      more: {
        mcp: {
          t: 'MCP',
          d: 'Συνδέστε servers εργαλείων Model Context Protocol ώστε οι πράκτορες να καλούν εσωτερικά API και βάσεις με δικαιώματα ομάδας.',
        },
        projects: {
          t: 'Έργα',
          d: 'Οργανώστε συνομιλίες, αρχεία και χώρους κώδικα σε κοινά όρια έργου για ομάδες.',
        },
        artifacts: {
          t: 'Τεκμήρια',
          d: 'Δομημένα αποτελέσματα από κάθε hub — πίνακες, γραφήματα και έγγραφα για εξαγωγή ή επανάνοιγμα.',
        },
      },
    },
    models: {
      eyebrow: 'Μοντέλα & API',
      title: 'Τα μοντέλα σας. <em>Τα κλειδιά σας.</em> Οι κανόνες σας.',
      lede:
        'Φέρτε δική σας συμβατή με OpenAI εξαγωγή συμπερασμάτων, κυβερνήστε τι καλεί κάθε ομάδα και αυτοματοποιήστε την πλατφόρμα με bearer tokens — local-first, με προαιρετικούς cloud παρόχους όταν επιτρέπεται egress.',
      p1: {
        t: 'Φέρτε τα δικά σας μοντέλα',
        d: 'Στρέψτε συνομιλία, embeddings και reranking σε vLLM, llama-server, Ollama ή οποιοδήποτε συμβατό με OpenAI endpoint διαχειρίζεστε.',
      },
      p2: {
        t: 'Μητρώο παρόχων',
        d: 'Το τοπικό είναι προεπιλογή. Προαιρετικά καταχωρήστε OpenAI, Gemini, DeepSeek, Groq ή Azure όταν η πολιτική επιτρέπει εξερχόμενη κίνηση.',
      },
      p3: {
        t: 'Δικαιώματα ανά ομάδα',
        d: 'Αντιστοιχίστε ομάδες LDAP σε καταλόγους μοντέλων και πρόσβαση σε hubs ώστε οι ομάδες να βλέπουν μόνο την εξαγωγή που εγκρίνετε.',
      },
      p4: {
        t: 'Κλειδιά API',
        d: 'Εκδώστε bearer tokens wbr_ για REST και WebSocket — το ίδιο όριο αυθεντικοποίησης με το web UI.',
      },
    },
    infra: {
      eyebrow: 'Η περίμετρός σας',
      title: 'Τρέχει <em>εκεί που είστε.</em>',
      lede:
        'Κάθε στοιχείο έρχεται μέσα στο δικό σας stack Docker Compose. Η εξαγωγή συμπερασμάτων χτυπά endpoints μοντέλων που λειτουργείτε εσείς. Ενεργοποιήστε τη λειτουργία απομόνωσης και η εξερχόμενη πρόσβαση απενεργοποιείται στο επίπεδο της εφαρμογής.',
      diagramAlt: 'Η αρχιτεκτονική του Eleftheria μέσα στην περίμετρο του δικτύου σας',
      p1: {
        t: 'Λειτουργία απομόνωσης',
        d: 'Η αναζήτηση στο web απενεργοποιείται στην πηγή, τα βάρη των μοντέλων φορτώνονται από τοπική κρυφή μνήμη και το sandbox ανάλυσης δεδομένων τρέχει με το δίκτυο εντελώς κλειστό.',
      },
      p2: {
        t: 'Τα μοντέλα σας, το υλικό σας',
        d: 'Στρέψτε το Eleftheria σε οποιοδήποτε endpoint συμβατό με OpenAI. Η συνομιλία, τα embeddings και η επαναταξινόμηση ρυθμίζονται ανεξάρτητα, ώστε να συνδυάζετε μεγέθη μοντέλων ανά φόρτο εργασίας.',
      },
      p3: {
        t: 'Απομόνωση εξ ορισμού',
        d: 'Κάθε χρήστης έχει τον δικό του χώρο εργασίας κώδικα στον δίσκο. Η ανάλυση υπολογιστικών φύλλων εκτελείται σε προσωρινό container χωρίς διαδρομή προς το δίκτυο.',
      },
      dg: {
        internet: 'Δημόσιο διαδίκτυο',
        network: 'Το δίκτυό σας',
        nginx: 'TLS + στατικά',
        api: 'εφαρμογή + RAG',
        db: 'embeddings και ιστορικό',
        llm: 'τα μοντέλα σας',
        agent: 'πράκτορας κώδικα',
        foot: 'Καμία εξερχόμενη κλήση · Καμία τηλεμετρία · Κανένας λογαριασμός προμηθευτή',
      },
    },
    platform: {
      eyebrow: 'Πλατφόρμα',
      title: 'Φτιαγμένο για <em>περισσότερους από έναν.</em>',
      lede:
        'Το Eleftheria είναι εγκατάσταση πολλαπλών χρηστών, όχι παιχνίδι γραφείου. Η ταυτοποίηση, τα δικαιώματα και ο έλεγχος αποτελούν μέρος του προϊόντος και όχι enterprise αναβάθμιση.',
      c1: { t: 'LDAP και Active Directory', d: 'Ταυτοποίηση μέσω της υποδομής καταλόγου που ήδη λειτουργείτε, με απευθείας αντιστοίχιση των υπαρχόντων ομάδων στους ρόλους του Eleftheria.' },
      c2: { t: 'Δικαιώματα μοντέλων ανά ομάδα', d: 'Αποφασίστε ποιες ομάδες φτάνουν σε ποια μοντέλα και ανοίξτε τους χώρους Code και Design ανεξάρτητα για κάθε χρήστη.' },
      c3: { t: 'Αρχεία γνώσης', d: 'Επιμελημένες συλλογές εγγράφων, που συντηρούνται κεντρικά και συνδέονται σε οποιαδήποτε συνομιλία.' },
      c4: { t: 'Ανάλυση σε sandbox', d: 'Τα υπολογιστικά φύλλα τα χειρίζεται πράκτορας pandas μέσα σε container χωρίς πρόσβαση στο δίκτυο.' },
      c5: { t: 'Servers εργαλείων MCP', d: 'Καταχωρήστε servers Model Context Protocol μία φορά και εκθέστε τους στη συνομιλία και στους πράκτορες κώδικα με το ίδιο μοντέλο δικαιωμάτων.' },
      c6: { t: 'Όλα εξάγονται', d: 'Συνομιλίες σε Word, τεκμήρια σε PDF και Excel, σχέδια σε PNG, PDF και HTML, έργα σε ZIP. Τίποτα δεν μένει παγιδευμένο στο προϊόν.' },
      c7: { t: 'Επαλήθευση απαντήσεων', d: 'Περάστε μια απάντηση από πολλά μοντέλα ελέγχου και έναν κριτή, και εμφανίστε βαθμό αξιοπιστίας δίπλα στην απάντηση.' },
    },
    cmp: {
      eyebrow: 'Η ανταλλαγή',
      title: 'Τι θυσιάζετε <em>μένοντας σπίτι.</em>',
      lede:
        'Μια ειλικρινής σύγκριση. Οι φιλοξενούμενες πλατφόρμες κυκλοφορούν ταχύτερα και έχουν μεγαλύτερα μοντέλα. Το Eleftheria σας δίνει το ένα πράγμα που εκείνες δομικά δεν μπορούν.',
      them: {
        kicker: 'Φιλοξενούμενες πλατφόρμες AI',
        name: 'Ο υπολογιστής κάποιου άλλου',
        1: 'Τα έγγραφά σας επεξεργάζονται σε υποδομή που δεν μπορείτε να ελέγξετε',
        2: 'Τα μοντέλα αλλάζουν χωρίς εσάς, χωρίς δυνατότητα κλειδώματος έκδοσης',
        3: 'Η εκτός σύνδεσης λειτουργία δεν υποστηρίζεται',
        4: 'Χρέωση ανά θέση που αυξάνεται με το προσωπικό σας',
        5: 'Η τοποθεσία των δεδομένων είναι όρος συμβολαίου, όχι αρχιτεκτονική',
      },
      us: {
        name: 'Ο δικός σας υπολογιστής',
        1: 'Τα έγγραφα διανυσματοποιούνται και αποθηκεύονται στη δική σας εγκατάσταση Postgres',
        2: 'Επιλέγετε εσείς τα βάρη και αναβαθμίζετε με τον δικό σας ρυθμό',
        3: 'Η λειτουργία απομόνωσης είναι πλήρης και δοκιμασμένη διαμόρφωση',
        4: 'Προσθέτετε χρήστες χωρίς να προσθέτετε τιμολόγια',
        5: 'Τα δεδομένα βρίσκονται εκεί όπου τοποθετήσατε τον διακομιστή',
      },
    },
    pricing: {
      eyebrow: 'Τιμολόγηση',
      title: 'Άδεια λογισμικού. <em>Η δική σας</em> υποδομή.',
      lede:
        'On-premise άδεια για ευρωπαϊκές ομάδες. Εσείς παρέχετε hardware και μοντέλα — εμείς την άδεια του workspace. Τιμές σε EUR, χωρίς ΦΠΑ.',
      note: 'Κυριαρχία δεδομένων · Air-gap · GDPR DPA · Reverse charge ΦΠΑ για B2B ΕΕ',
      perMonth: '/ μήνα',
      popular: 'Δημοφιλές',
      custom: 'Προσαρμοσμένο',
      cta: 'Λίστα αναμονής',
      ctaEnt: 'Επικοινωνία πωλήσεων',
      foot:
        '~€20 / χρήστη / μήνα στα επί πληρωμή πλάνα. Add-on ενοτήτων από €3–€6 / χρήστη / μήνα. Κόστη LLM δικά σας. Ετήσια χρέωση προεπιλογή· μηνιαία +15%.',
      starter: {
        name: 'Starter',
        tag: 'Βασική πλατφόρμα για μικρές ομάδες',
        meta: '€5.880 / έτος · έως 25 χρήστες',
        f1: 'Chat, RAG & Knowledge Archives',
        f2: 'Πολυμοντελικό registry & MCP',
        f3: 'LDAP / AD & λειτουργία air-gap',
        f4: 'Υποστήριξη email (48ω)',
      },
      pro: {
        name: 'Professional',
        tag: 'Προσθήκη μετάφρασης AI',
        meta: '€11.880 / έτος · έως 50 χρήστες',
        f1: 'Όλα από το Starter',
        f2: 'Hub Vostok Translate',
        f3: 'Γλωσσάρια & δίγλωσση εξαγωγή',
        f4: 'Υποστήριξη email (24ω)',
      },
      suite: {
        name: 'Πλήρης Σουίτα',
        tag: 'Και οι τέσσερις ενότητες',
        meta: '€23.880 / έτος · έως 100 χρήστες',
        f1: 'Όλα από το Professional',
        f2: 'Στούντιο Vostok Design',
        f3: 'Agent IDE Vostok Code',
        f4: 'Εργάσιμες ώρες + Slack',
      },
      ent: {
        name: 'Enterprise',
        tag: 'Απεριόριστη κλίμακα',
        meta: 'Απεριόριστοι χρήστες · από €48.000 / έτος',
        f1: 'Όλες οι ενότητες + custom integrations',
        f2: 'Αποκλειστικός CSM & SLA',
        f3: 'On-site & αξιολόγηση AI Act',
        f4: 'Έκπτωση δημόσιου τομέα',
      },
    },
    faq: {
      eyebrow: 'Ερωτήσεις',
      title: 'Πριν ρωτήσετε',
      q1: {
        q: 'Φεύγει κάτι από το δίκτυό μου;',
        a: 'Μόνο αν το επιτρέψετε. Η αναζήτηση στο web είναι η μοναδική λειτουργία που κοιτά προς τα έξω, και η λειτουργία απομόνωσης την απενεργοποιεί στο επίπεδο της εφαρμογής. Η εξαγωγή συμπερασμάτων πηγαίνει σε endpoints που ρυθμίζετε εσείς, συνήθως containers στο ίδιο stack Compose. Δεν υπάρχει τηλεμετρία ούτε λογαριασμός προμηθευτή.',
      },
      q2: {
        q: 'Τι υλικό χρειάζεται;',
        a: 'Το επίπεδο της εφαρμογής είναι ελαφρύ: FastAPI, Postgres και nginx τρέχουν άνετα σε μικρό διακομιστή. Η πραγματική απαίτηση είναι η χωρητικότητα GPU που ζητούν τα μοντέλα που επιλέγετε. Επειδή τα endpoints συνομιλίας και embeddings ρυθμίζονται χωριστά, μπορείτε να τρέχετε μεγάλο μοντέλο συνομιλίας σε ένα μηχάνημα και μικρό μοντέλο embeddings αλλού.',
      },
      q3: {
        q: 'Ποια μοντέλα μπορώ να χρησιμοποιήσω;',
        a: 'Οτιδήποτε πίσω από API συμβατό με OpenAI. Το μητρώο παρόχων προεπιλέγει τοπικά llama-server ή vLLM· μπορείτε να προσθέσετε προαιρετικούς cloud παρόχους όταν επιτρέπεται egress. Τα embeddings χρησιμοποιούν εξ ορισμού το BGE-M3. Η αλλαγή μοντέλου είναι αλλαγή ρύθμισης, όχι μετάβαση.',
      },
      q4: {
        q: 'Σε τι διαφέρει από μια διεπαφή συνομιλίας πάνω σε τοπικό μοντέλο;',
        a: 'Στη διαδικασία ανάκτησης, στον πράκτορα κώδικα με πραγματική πρόσβαση σε αρχεία και git, στο στούντιο σχεδιασμού που παράγει λειτουργικά πρωτότυπα και στο επίπεδο δικαιωμάτων πολλών χρηστών. Ένα περιτύλιγμα συνομιλίας σας δίνει ένα πλαίσιο κειμένου. Το Eleftheria σας δίνει τρεις χώρους εργασίας παραγωγής που μοιράζονται κατάσταση.',
      },
      q5: {
        q: 'Μπορεί ο πράκτορας να εκτελέσει πραγματικά κώδικα;',
        a: 'Ναι. Η λειτουργία Build έχει πρόσβαση σε κέλυφος και εγγραφή αρχείων μέσα σε χώρο εργασίας περιορισμένο σε εκείνη τη συνεδρία και τον χρήστη. Οι λειτουργίες Plan και Ask είναι εκ σχεδιασμού μόνο για ανάγνωση, ώστε να εξερευνάτε έναν κώδικα χωρίς κίνδυνο τροποποίησης.',
      },
      q6: {
        q: 'Τι γίνεται με τα δεδομένα μου αν σταματήσω να το χρησιμοποιώ;',
        a: 'Μένουν στους δίσκους σας, γιατί ποτέ δεν πήγαν αλλού. Οι συνομιλίες εξάγονται σε Word, τα τεκμήρια σε PDF και Excel, τα σχέδια σε PNG, PDF και HTML, και τα έργα κώδικα σε ZIP. Η βάση δεδομένων είναι ένα συνηθισμένο Postgres από το οποίο μπορείτε να πάρετε αντίγραφο.',
      },
      q7: {
        q: 'Υποστηρίζει ενιαία σύνδεση;',
        a: 'Η ενσωμάτωση με LDAP και Active Directory είναι ενσωματωμένη, με αντιστοίχιση ομάδων σε ρόλους και δικαιώματα μοντέλων. Λειτουργούν επίσης τοπικοί λογαριασμοί με όνομα χρήστη και κωδικό, με δυνατότητα ενεργοποίησης ή απενεργοποίησης της εγγραφής.',
      },
      q8: {
        q: 'Πώς το δοκιμάζω;',
        a: 'Ολόκληρο το stack είναι ένα αρχείο Docker Compose. Σηκώστε τις υπηρεσίες, στρέψτε τη διαμόρφωση στα δικά σας endpoints μοντέλων και ανοίξτε την εφαρμογή στον browser.',
      },
      q9: {
        q: 'Μπορώ να καλέσω το Eleftheria από scripts;',
        a: 'Ναι. Δημιουργήστε κλειδιά API στο admin — τα bearer tokens wbr_ λειτουργούν σε REST και WebSocket με τα ίδια δικαιώματα ομάδας με τον λογαριασμό σας.',
      },
      q10: {
        q: 'Υπάρχει αφιερωμένο hub μετάφρασης;',
        a: 'Ναι. Το hub Μετάφρασης τρέχει μετάφραση εγγράφων και κειμένου στα ρυθμισμένα μοντέλα σας, με τις ίδιες local-first εγγυήσεις απορρήτου όπως στη συνομιλία — χωρίς API μετάφρασης τρίτων.',
      },
    },
    cta: {
      title: 'Κρατήστε τη δουλειά. <em>Κρατήστε τα δεδομένα.</em>',
      lede: 'Μία εγκατάσταση. Επτά κόμβοι. Τίποτα δεν φεύγει από το κτίριο.',
      primary: 'Λίστα αναμονής',
      secondary: 'Διαβάστε την επισκόπηση',
    },
    footer: {
      tag: 'Ένας αυτο-φιλοξενούμενος χώρος εργασίας AI όπου συνομιλία, κώδικας και σχεδιασμός μοιράζονται μία διεπαφή — και τα δεδομένα σας δεν φεύγουν ποτέ από το δίκτυό σας.',
      product: 'Προϊόν',
      resources: 'Υλικό',
      start: 'Ξεκινήστε',
      overview: 'Παρουσίαση',
      open: 'Λίστα αναμονής',
      signin: 'Σύνδεση',
      rights: '© 2026 Eleftheria. Ασφάλεια. Ανεξαρτησία. Ακρίβεια.',
      built: 'Αυτο-φιλοξενούμενο εκ σχεδιασμού.',
    },
    wait: {
      title: 'Εγγραφή στη λίστα αναμονής',
      lede:
        'Το Eleftheria ενεργοποιείται μία ομάδα τη φορά. Αφήστε ένα email και θα επικοινωνήσουμε για την πρόσβαση.',
      emailLabel: 'Εταιρικό email',
      placeholder: 'onoma@etaireia.com',
      submit: 'Αίτημα πρόσβασης',
      sending: 'Αποστολή…',
      successTitle: 'Είστε στη λίστα',
      successBody:
        'Ευχαριστούμε — έχουμε τη διεύθυνσή σας και θα επικοινωνήσουμε μόλις ανοίξει θέση για την ομάδα σας.',
      errInvalid: 'Εισαγάγετε μια έγκυρη διεύθυνση email.',
      errRate: 'Πάρα πολλές προσπάθειες. Δοκιμάστε ξανά σε ένα λεπτό.',
      errGeneric: 'Η αποστολή απέτυχε. Δοκιμάστε ξανά.',
      privacy: 'Αποθηκεύεται στον δικό μας διακομιστή. Χωρίς trackers τρίτων, χωρίς λίστες αλληλογραφίας.',
      close: 'Κλείσιμο',
    },
  };

  /* ── Engine ────────────────────────────────────────────────────────── */

  var SUPPORTED = ['en', 'it', 'ru', 'el'];
  var CODES = { en: 'EN', it: 'IT', ru: 'RU', el: 'EL' };

  // Overview deck per locale; [data-deck] links are repointed on every switch.
  var DECKS = {
    en: '/VOSTOK-IS-Presentation.html',
    it: '/VOSTOK-IS-Presentation-IT.html',
    ru: '/VOSTOK-IS-Presentation-RU.html',
    el: '/VOSTOK-IS-Presentation-EL.html',
  };

  function lookup(dict, path) {
    var parts = path.split('.');
    var node = dict;
    for (var i = 0; i < parts.length; i++) {
      if (node == null || typeof node !== 'object') return undefined;
      node = node[parts[i]];
    }
    return typeof node === 'string' ? node : undefined;
  }

  /** Resolve a key against the active locale, falling back to English. */
  function translate(lang, key) {
    var hit = lookup(T[lang] || {}, key);
    return hit !== undefined ? hit : lookup(T[FALLBACK], key);
  }

  function detect() {
    var stored = null;
    try {
      stored = localStorage.getItem(STORE_KEY);
    } catch (_) {
      /* private mode */
    }
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;

    var nav = (navigator.language || navigator.userLanguage || FALLBACK).toLowerCase();
    for (var i = 0; i < SUPPORTED.length; i++) {
      if (nav.indexOf(SUPPORTED[i]) === 0) return SUPPORTED[i];
    }
    return FALLBACK;
  }

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = FALLBACK;

    document.documentElement.lang = lang;

    // Plain text nodes
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = translate(lang, el.getAttribute('data-i18n'));
      if (value === undefined) return;
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) el.setAttribute(attr, value);
      else el.textContent = value;
    });

    // Rich text (contains inline <em> accents)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var value = translate(lang, el.getAttribute('data-i18n-html'));
      if (value !== undefined) el.innerHTML = value;
    });

    // Switcher chrome
    var code = document.getElementById('langCode');
    if (code) code.textContent = CODES[lang];
    document.querySelectorAll('.lang-opt').forEach(function (opt) {
      opt.setAttribute('aria-selected', String(opt.getAttribute('data-lang') === lang));
    });

    // Overview deck follows the language
    var deck = DECKS[lang] || DECKS[FALLBACK];
    document.querySelectorAll('[data-deck]').forEach(function (a) {
      a.setAttribute('href', deck);
    });

    try {
      localStorage.setItem(STORE_KEY, lang);
    } catch (_) {
      /* ignore */
    }

    document.dispatchEvent(new CustomEvent('vostok:langchange', { detail: { lang: lang } }));
  }

  window.VostokI18n = {
    supported: SUPPORTED,
    detect: detect,
    apply: apply,
    t: translate,
    current: function () {
      return document.documentElement.lang || FALLBACK;
    },
  };
})();
