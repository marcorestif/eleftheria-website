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
        'The private AI workspace for European teams in regulated industries. Chat with your documents, build with AI — all on your own infrastructure.',
    },
    nav: { hubs: 'Workspaces', infra: 'Infrastructure', models: 'Models', platform: 'Platform', pricing: 'Pricing', faq: 'FAQ', cta: 'Join waitlist' },
    hero: {
      eyebrow: 'Security. Independence. Precision.',
      l1: 'The AI workspace',
      l2: 'that <em>never</em>',
      l3: 'phones home.',
      lede:
        'The private AI workspace for European teams in regulated industries. Chat with your documents, build with AI, design — all running inside your own network. Your models. Your hardware. Your rules.',
      ctaPrimary: 'Join waitlist',
      ctaSecondary: 'See what it does',
      note: 'Air-gap capable — works with zero outbound connectivity',
      icp: 'Built for legal, finance, and healthcare teams where data sovereignty isn\'t optional.',
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
      hubs: 'Workspaces, one interface',
      bytes: 'Bytes sent to third parties',
    },
    hubs: {
      eyebrow: 'Product workspaces',
      title: 'Start with chat. <em>Build anything.</em>',
      lede:
        'Start with document chat on day one. Add the coding agent when your dev team is ready. Expand to design, translate, and MCP as your team grows. One login, one permission model, one set of files — everything hands off seamlessly to everything else.',
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
        f2: 'Translate hub',
        f3: 'Glossaries & bilingual export',
        f4: 'Email support (24h)',
      },
      suite: {
        name: 'Full Suite',
        tag: 'All four modules, one platform',
        meta: '€23,880 / year · up to 100 users',
        f1: 'Everything in Professional',
        f2: 'Design studio',
        f3: 'Code agent IDE',
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
      lede: 'One deployment. Progressive workspaces. Nothing leaving the building.',
      primary: 'Join waitlist',
      secondary: 'Read the overview',
      tertiary: 'See technical details',
    },
    footer: {
      tag: 'A self-hosted AI workspace where chat, code, and design share one interface — and your data never leaves your network.',
      freedom: '<em>Eleftheria</em> (ελευθερία) — Greek for <em>freedom</em>. Because your data should be.',
      product: 'Product',
      resources: 'Resources',
      start: 'Get started',
      overview: 'Overview deck',
      open: 'Join waitlist',
      signin: 'Sign in',
      rights: '© 2026 Eleftheria. Security. Independence. Precision.',
      built: 'Self-hosted by design.',
    },
    usecases: {
      eyebrow: 'Built for regulated teams',
      title: 'The AI your <em>compliance team</em> will actually approve.',
      lede: 'Eleftheria (ελευθερία) — Greek for <em>freedom</em>. Because your data should be. Here is what that means in practice.',
      legal: {
        t: 'For legal & compliance teams',
        d: 'Review contracts, analyse case files, and draft responses against your documents — without sending a single page to OpenAI, Microsoft, or any cloud service. Retrieval runs on <em>your</em> Postgres instance.',
      },
      dev: {
        t: 'For development teams',
        d: 'Let the coding agent plan, build, and review against repositories that never leave your network. Git access, real shell execution, and a Monaco IDE — all running on infrastructure your security team can audit.',
      },
      finance: {
        t: 'For finance & operations teams',
        d: 'Analyse spreadsheets and financial models inside a sandboxed container with no network route out. Translate internal reports into any language using models you control. No third-party SaaS, no data residency guesswork.',
      },
    },
    proof: {
      betaNum: 'Private beta',
      betaLabel: 'Currently rolling out to select European teams — one deployment at a time',
      deploysNum: '50+',
      deploysLabel: 'Enterprise AI deployments our founding team has shipped across regulated industries',
      bytesNum: '0',
      bytesLabel: 'Bytes sent to third parties by default — not a claim, an architecture',
      quote:
        'Eleftheria was built by enterprise AI engineers who have spent years deploying AI inside organisations where data cannot leave the building. We built the tool we kept wishing existed.',
      quoteBy: '— The Eleftheria founding team',
    },
    compliance: {
      label: 'AI Act ready · GDPR native',
      title: "The only AI workspace that's compliant <em>by architecture</em>, not by contract clause.",
      lede: 'We provide Data Processing Agreements at <em>every</em> pricing tier — not as an enterprise upsell. Because when your data never leaves your network, GDPR compliance is an architectural guarantee, not a legal assumption. EU AI Act assessment included with Enterprise.',
      t1: '✓ GDPR DPA at all tiers',
      t2: '✓ EU AI Act assessment',
      t3: '✓ Data residency by architecture',
      t4: '✓ Air-gap mode tested',
      t5: '✓ No telemetry',
      t6: '✓ No vendor account required',
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
        'Il workspace AI privato per team europei in settori regolamentati. Chatta con i tuoi documenti, costruisci con l\'AI — tutto sulla tua infrastruttura.',
    },
    nav: { hubs: 'Workspace', infra: 'Infrastruttura', models: 'Modelli', platform: 'Piattaforma', pricing: 'Prezzi', faq: 'FAQ', cta: 'Iscriviti' },
    hero: {
      eyebrow: 'Sicurezza. Indipendenza. Precisione.',
      l1: 'Il workspace AI',
      l2: 'che resta <em>dentro</em>',
      l3: 'le tue mura.',
      lede:
        'Il workspace AI privato per team europei in settori regolamentati. Chatta con i tuoi documenti, costruisci con l\'AI, progetta — tutto dentro la tua rete. I tuoi modelli. Il tuo hardware. Le tue regole.',
      ctaPrimary: 'Iscriviti alla lista',
      ctaSecondary: 'Scopri cosa fa',
      note: 'Compatibile con reti isolate — funziona senza alcuna connessione in uscita',
      icp: 'Pensato per team legali, finanziari e sanitari dove la sovranità dei dati non è opzionale.',
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
      hubs: 'Workspace, un\'interfaccia',
      bytes: 'Byte inviati a terze parti',
    },
    hubs: {
      eyebrow: 'Workspace prodotto',
      title: 'Parti dalla chat. <em>Costruisci qualunque cosa.</em>',
      lede:
        'Inizia con la chat sui documenti dal primo giorno. Aggiungi l\'agente di coding quando il team di sviluppo è pronto. Espandi a design, traduzione e MCP man mano che cresci. Un login, un modello di permessi, un insieme di file — tutto si collega senza attrito.',
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
        f2: 'Hub Translate',
        f3: 'Glossari ed export bilingue',
        f4: 'Supporto email (24h)',
      },
      suite: {
        name: 'Suite Completa',
        tag: 'Tutti e quattro i moduli',
        meta: '€23.880 / anno · fino a 100 utenti',
        f1: 'Tutto di Professional',
        f2: 'Studio Design',
        f3: 'IDE agente Code',
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
      lede: 'Un solo deployment. Workspace progressivi. Niente che esce dall\'edificio.',
      primary: 'Iscriviti alla lista',
      secondary: 'Leggi la panoramica',
      tertiary: 'Dettagli tecnici',
    },
    footer: {
      tag: 'Un workspace AI self-hosted dove chat, codice e design condividono una sola interfaccia — e i tuoi dati non lasciano mai la tua rete.',
      freedom: '<em>Eleftheria</em> (ελευθερία) — greco per <em>libertà</em>. Perché i tuoi dati dovrebbero esserlo.',
      product: 'Prodotto',
      resources: 'Risorse',
      start: 'Inizia',
      overview: 'Presentazione',
      open: 'Iscriviti alla lista',
      signin: 'Accedi',
      rights: '© 2026 Eleftheria. Sicurezza. Indipendenza. Precisione.',
      built: 'Self-hosted per scelta.',
    },
    usecases: {
      eyebrow: 'Per team regolamentati',
      title: "L'AI che il tuo team di <em>compliance</em> approverà davvero.",
      lede: 'Eleftheria (ελευθερία) — greco per <em>libertà</em>. Perché i tuoi dati dovrebbero esserlo. Ecco cosa significa in pratica.',
      legal: {
        t: 'Per team legali e compliance',
        d: 'Rivedi contratti, analizza fascicoli e bozza risposte sui tuoi documenti — senza inviare una sola pagina a OpenAI, Microsoft o altri servizi cloud. Il retrieval gira sulla <em>tua</em> istanza Postgres.',
      },
      dev: {
        t: 'Per team di sviluppo',
        d: 'Lascia che l\'agente di coding pianifichi, costruisca e riveda repository che non lasciano mai la tua rete. Accesso git, shell reale e IDE Monaco — su infrastruttura che il team di sicurezza può auditare.',
      },
      finance: {
        t: 'Per team finance e operations',
        d: 'Analizza fogli di calcolo e modelli finanziari in un container sandboxed senza uscita di rete. Traduci report interni in qualsiasi lingua con modelli che controlli tu. Niente SaaS di terzi, niente dubbi sulla residenza dei dati.',
      },
    },
    proof: {
      betaNum: 'Beta privata',
      betaLabel: 'In rollout selettivo per team europei — un deployment alla volta',
      deploysNum: '50+',
      deploysLabel: 'Deployment AI enterprise che il team fondatore ha consegnato in settori regolamentati',
      bytesNum: '0',
      bytesLabel: 'Byte inviati a terze parti di default — non una promessa, un\'architettura',
      quote:
        'Eleftheria è stata costruita da ingegneri AI enterprise che da anni fanno partire l\'AI in organizzazioni dove i dati non possono uscire dall\'edificio. Abbiamo costruito lo strumento che volevamo esistesse.',
      quoteBy: '— Il team fondatore di Eleftheria',
    },
    compliance: {
      label: 'AI Act ready · GDPR native',
      title: "L'unico workspace AI conforme <em>per architettura</em>, non per clausola contrattuale.",
      lede: 'Forniamo Data Processing Agreement a <em>ogni</em> fascia di prezzo — non come upsell enterprise. Quando i dati non lasciano la rete, la conformità GDPR è una garanzia architetturale, non un\'ipotesi legale. Valutazione AI Act inclusa con Enterprise.',
      t1: '✓ DPA GDPR a tutti i livelli',
      t2: '✓ Valutazione EU AI Act',
      t3: '✓ Residenza dati per architettura',
      t4: '✓ Modalità air-gap testata',
      t5: '✓ Nessuna telemetria',
      t6: '✓ Nessun account fornitore richiesto',
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

  /* ---------------------------------------------------------------- EL */
  T.el = {
    meta: {
      title: 'Eleftheria — Ο χώρος εργασίας AI που δεν βγαίνει ποτέ έξω',
      description:
        'Ο ιδιωτικός χώρος εργασίας AI για ευρωπαϊκές ομάδες σε ρυθμιζόμενους κλάδους. Συνομιλήστε με τα έγγραφά σας, χτίστε με AI — στη δική σας υποδομή.',
    },
    nav: { hubs: 'Χώροι εργασίας', infra: 'Υποδομή', models: 'Μοντέλα', platform: 'Πλατφόρμα', pricing: 'Τιμολόγηση', faq: 'Ερωτήσεις', cta: 'Λίστα αναμονής' },
    hero: {
      eyebrow: 'Ασφάλεια. Ανεξαρτησία. Ακρίβεια.',
      l1: 'Ο χώρος εργασίας',
      l2: 'AI που <em>δεν</em>',
      l3: 'βγαίνει ποτέ έξω.',
      lede:
        'Ο ιδιωτικός χώρος εργασίας AI για ευρωπαϊκές ομάδες σε ρυθμιζόμενους κλάδους. Συνομιλία με έγγραφα, ανάπτυξη με AI, σχεδιασμός — όλα μέσα στο δικό σας δίκτυο. Τα μοντέλα σας. Το υλικό σας. Οι κανόνες σας.',
      ctaPrimary: 'Λίστα αναμονής',
      ctaSecondary: 'Δείτε τι κάνει',
      note: 'Λειτουργεί σε απομονωμένο δίκτυο — χωρίς καμία εξερχόμενη σύνδεση',
      icp: 'Για νομικές, χρηματοοικονομικές και υγειονομικές ομάδες όπου η κυριαρχία δεδομένων δεν είναι προαιρετική.',
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
      hubs: 'Χώροι εργασίας, μία διεπαφή',
      bytes: 'Bytes προς τρίτους',
    },
    hubs: {
      eyebrow: 'Χώροι εργασίας',
      title: 'Ξεκινήστε με συνομιλία. <em>Χτίστε οτιδήποτε.</em>',
      lede:
        'Ξεκινήστε με συνομιλία πάνω σε έγγραφα από την πρώτη μέρα. Προσθέστε τον πράκτορα κώδικα όταν είναι έτοιμη η ομάδα ανάπτυξης. Επεκταθείτε σε σχεδιασμό, μετάφραση και MCP καθώς μεγαλώνετε. Μία σύνδεση, ένα μοντέλο δικαιωμάτων, κοινά αρχεία — όλα παραδίδουν δουλειά μεταξύ τους.',
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
        f2: 'Hub Translate',
        f3: 'Γλωσσάρια & δίγλωσση εξαγωγή',
        f4: 'Υποστήριξη email (24ω)',
      },
      suite: {
        name: 'Πλήρης Σουίτα',
        tag: 'Και οι τέσσερις ενότητες',
        meta: '€23.880 / έτος · έως 100 χρήστες',
        f1: 'Όλα από το Professional',
        f2: 'Στούντιο Design',
        f3: 'Agent IDE Code',
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
      lede: 'Μία εγκατάσταση. Προοδευτικοί χώροι εργασίας. Τίποτα δεν φεύγει από το κτίριο.',
      primary: 'Λίστα αναμονής',
      secondary: 'Διαβάστε την επισκόπηση',
      tertiary: 'Τεχνικές λεπτομέρειες',
    },
    footer: {
      tag: 'Ένας αυτο-φιλοξενούμενος χώρος εργασίας AI όπου συνομιλία, κώδικας και σχεδιασμός μοιράζονται μία διεπαφή — και τα δεδομένα σας δεν φεύγουν ποτέ από το δίκτυό σας.',
      freedom: '<em>Eleftheria</em> (ελευθερία) — ελληνικά για την <em>ελευθερία</em>. Επειδή τα δεδομένα σας πρέπει να είναι.',
      product: 'Προϊόν',
      resources: 'Υλικό',
      start: 'Ξεκινήστε',
      overview: 'Παρουσίαση',
      open: 'Λίστα αναμονής',
      signin: 'Σύνδεση',
      rights: '© 2026 Eleftheria. Ασφάλεια. Ανεξαρτησία. Ακρίβεια.',
      built: 'Αυτο-φιλοξενούμενο εκ σχεδιασμού.',
    },
    usecases: {
      eyebrow: 'Για ρυθμιζόμενες ομάδες',
      title: 'Το AI που θα εγκρίνει πραγματικά η ομάδα <em>συμμόρφωσης</em>.',
      lede: 'Eleftheria (ελευθερία) — ελληνικά για την <em>ελευθερία</em>. Επειδή τα δεδομένα σας πρέπει να είναι. Να τι σημαίνει στην πράξη.',
      legal: {
        t: 'Για νομικές ομάδες και συμμόρφωση',
        d: 'Εξετάστε συμβόλαια, αναλύστε φακέλους και συντάξτε απαντήσεις πάνω στα έγγραφά σας — χωρίς να στείλετε ούτε μία σελίδα σε OpenAI, Microsoft ή άλλο cloud. Η ανάκτηση τρέχει στο <em>δικό σας</em> Postgres.',
      },
      dev: {
        t: 'Για ομάδες ανάπτυξης',
        d: 'Αφήστε τον πράκτορα να σχεδιάζει, να χτίζει και να κάνει review σε repositories που δεν φεύγουν από το δίκτυό σας. Git, πραγματικό shell και Monaco IDE — σε υποδομή που μπορεί να ελέγξει η ασφάλεια.',
      },
      finance: {
        t: 'Για χρηματοοικονομικά και operations',
        d: 'Αναλύστε υπολογιστικά φύλλα και οικονομικά μοντέλα σε sandboxed container χωρίς έξοδο δικτύου. Μεταφράστε εσωτερικές αναφορές σε οποιαδήποτε γλώσσα με μοντέλα υπό τον έλεγχό σας. Χωρίς τρίτο SaaS, χωρίς αμφιβολίες για data residency.',
      },
    },
    proof: {
      betaNum: 'Ιδιωτική beta',
      betaLabel: 'Κυκλοφορεί επιλεκτικά σε ευρωπαϊκές ομάδες — μία εγκατάσταση τη φορά',
      deploysNum: '50+',
      deploysLabel: 'Enterprise AI deployments που η ιδρυτική ομάδα έχει παραδώσει σε ρυθμιζόμενους κλάδους',
      bytesNum: '0',
      bytesLabel: 'Bytes προς τρίτους από προεπιλογή — όχι ισχυρισμός, αρχιτεκτονική',
      quote:
        'Το Eleftheria χτίστηκε από μηχανικούς enterprise AI που χρόνια αναπτύσσουν AI σε οργανισμούς όπου τα δεδομένα δεν μπορούν να φύγουν από το κτίριο. Φτιάξαμε το εργαλείο που θέλαμε να υπάρχει.',
      quoteBy: '— Η ιδρυτική ομάδα του Eleftheria',
    },
    compliance: {
      label: 'AI Act ready · GDPR native',
      title: 'Ο μόνος χώρος εργασίας AI που είναι συμμορφωμένος <em>αρχιτεκτονικά</em>, όχι με συμβατική ρήτρα.',
      lede: 'Παρέχουμε Data Processing Agreements σε <em>κάθε</em> επίπεδο τιμολόγησης — όχι ως enterprise upsell. Όταν τα δεδομένα δεν φεύγουν από το δίκτυο, η συμμόρφωση GDPR είναι αρχιτεκτονική εγγύηση, όχι νομική υπόθεση. Αξιολόγηση AI Act περιλαμβάνεται στο Enterprise.',
      t1: '✓ GDPR DPA σε όλα τα επίπεδα',
      t2: '✓ Αξιολόγηση EU AI Act',
      t3: '✓ Data residency μέσω αρχιτεκτονικής',
      t4: '✓ Δοκιμασμένη λειτουργία air-gap',
      t5: '✓ Χωρίς τηλεμετρία',
      t6: '✓ Χωρίς λογαριασμό προμηθευτή',
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

  var SUPPORTED = ['en', 'it', 'el'];
  var CODES = { en: 'EN', it: 'IT', el: 'EL' };

  // Overview deck per locale; [data-deck] links are repointed on every switch.
  var DECKS = {
    en: '/VOSTOK-IS-Presentation.html',
    it: '/VOSTOK-IS-Presentation-IT.html',
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
