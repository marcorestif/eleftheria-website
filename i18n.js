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
        q: 'Does any of my data leave my infrastructure?',
        a: 'No. Eleftheria runs entirely inside your network: the application, the database and the AI models. There is no telemetry, no vendor account and no "phone home". The only outbound feature is optional web search, and air-gap mode switches it off at the application layer.',
      },
      q2: {
        q: 'Is Eleftheria GDPR compliant?',
        a: 'Compliance is a property of the architecture, not a clause in our contract. Your data is processed on servers you control, in the jurisdiction you choose, by models you host. No personal data is transferred to us or to any third-party AI provider, so there is no data processor to vet and no international transfer to justify.',
      },
      q3: {
        q: 'How does this help with the EU AI Act?',
        a: 'The AI Act asks organisations to know which models they use, where data flows and who can access what. Eleftheria gives you a single admin panel for exactly that: per-group model permissions, audit-ready exports and a model registry you control. You pick the models, so you also pick the risk profile.',
      },
      q4: {
        q: 'Who is Eleftheria for?',
        a: 'Teams of 10 to 2,000 people in sectors where data cannot leave the organisation: law firms, financial services, healthcare and pharma, public sector, manufacturing with sensitive IP. If your compliance team has blocked ChatGPT or Copilot, this is the version they can approve.',
      },
      q5: {
        q: 'What do we actually get?',
        a: 'One workspace with four tools that share files and permissions: Chat grounded in your own documents, Eleftheria Code (a coding agent with Plan, Build and Ask modes), Eleftheria Design (brief to working prototype) and Translate. Plus LDAP/Active Directory login, API keys, MCP tool servers and exports to Word, PDF, Excel and ZIP.',
      },
      q6: {
        q: 'How is it different from ChatGPT Enterprise or Microsoft Copilot?',
        a: 'Those are excellent products that run on someone else\'s cloud. Eleftheria runs on yours. You trade the largest frontier models and zero-setup convenience for full data control, your choice of models, and a licence instead of a per-seat subscription. For most regulated teams that trade is the point.',
      },
      q7: {
        q: 'Which AI models can we use?',
        a: 'Any model behind an OpenAI-compatible API. Most customers run open-weight models locally (Qwen, Gemma, DeepSeek, Mistral) via llama.cpp or vLLM. If your policy allows it, you can also connect cloud providers such as Azure OpenAI or Anthropic for specific groups. Swapping a model is a configuration change, not a migration.',
      },
      q8: {
        q: 'What hardware do we need?',
        a: 'The application itself is light and runs on a small server. The real requirement is GPU capacity for the models you choose: a single workstation-class GPU is enough for a team pilot; larger teams or larger models scale to a dedicated server. We help you size it during the pilot.',
      },
      q9: {
        q: 'How much does it cost?',
        a: 'Eleftheria is a software licence, not a per-message or per-seat subscription. Plans start at €490 per month (Starter) and scale to a custom Enterprise tier with SSO, priority support and deployment assistance. You pay for your own hardware or cloud, so there are no surprise usage bills.',
      },
      q10: {
        q: 'How long does a pilot take?',
        a: 'Most teams are running within a day. The whole stack is a Docker Compose file: start the services, point them at your model endpoints, open the browser. A 30-day pilot on your own hardware is the normal way to evaluate, and we support you through it.',
      },
      q11: {
        q: 'What if we stop using it, or you disappear?',
        a: 'Your data stays on your disks, because it never went anywhere else. Everything exports to standard formats (Word, PDF, Excel, PNG, HTML, ZIP) and the database is ordinary Postgres you can dump at any time. There is no lock-in to leave.',
      },
      q12: {
        q: 'Who is behind Eleftheria?',
        a: 'A small team of enterprise AI engineers based in Venice, Italy, who spent years deploying AI in environments where data could not leave the building. Eleftheria is the Greek word for freedom. We built the product we kept being asked for and could never buy.',
      },
    },
    cta: {
      title: 'Keep the work. <em>Keep the data.</em>',
      lede: 'One deployment. Progressive workspaces. Nothing leaving the building.',
      primary: 'Join waitlist',
      tertiary: 'See technical details',
    },
    footer: {
      tag: 'A self-hosted AI workspace where chat, code, and design share one interface — and your data never leaves your network.',
      freedom: '<em>Eleftheria</em> (ελευθερία) — Greek for <em>freedom</em>. The freedom to keep your data yours.',
      product: 'Product',
      resources: 'Resources',
      start: 'Get started',
      linkedin: 'LinkedIn',
      contact: 'hello@eleftheria.tech',
      open: 'Join waitlist',
      signin: 'Sign in',
      rights: '© 2026 Eleftheria. Security. Independence. Precision.',
      built: 'Self-hosted by design.',
    },
    usecases: {
      eyebrow: 'Built for regulated teams',
      title: 'The AI your <em>compliance team</em> will actually approve.',
      lede: 'Eleftheria (ελευθερία) — Greek for <em>freedom</em>. The freedom to keep your data yours. Here is what that means in practice.',
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
        q: 'I miei dati escono dalla mia infrastruttura?',
        a: 'No. Eleftheria gira interamente dentro la tua rete: l\'applicazione, il database e i modelli AI. Non c\'è telemetria, nessun account fornitore e nessun "phone home". L\'unica funzione in uscita è la ricerca web opzionale, e la modalità air-gap la disattiva a livello applicativo.',
      },
      q2: {
        q: 'Eleftheria è conforme al GDPR?',
        a: 'La conformità è una proprietà dell\'architettura, non una clausola del nostro contratto. I tuoi dati sono trattati su server che controlli tu, nella giurisdizione che scegli, da modelli che ospiti tu. Nessun dato personale viene trasferito a noi o a un fornitore AI terzo, quindi non c\'è alcun responsabile del trattamento da verificare né alcun trasferimento internazionale da giustificare.',
      },
      q3: {
        q: 'Come aiuta con l\'AI Act europeo?',
        a: 'L\'AI Act chiede alle organizzazioni di sapere quali modelli usano, dove fluiscono i dati e chi può accedere a cosa. Eleftheria ti dà un unico pannello di amministrazione esattamente per questo: permessi sui modelli per gruppo, esportazioni pronte per l\'audit e un registro dei modelli che controlli tu. Scegli tu i modelli, quindi scegli anche il profilo di rischio.',
      },
      q4: {
        q: 'A chi si rivolge Eleftheria?',
        a: 'Team da 10 a 2.000 persone in settori dove i dati non possono uscire dall\'organizzazione: studi legali, servizi finanziari, sanità e farmaceutica, pubblica amministrazione, manifattura con proprietà intellettuale sensibile. Se il tuo team compliance ha bloccato ChatGPT o Copilot, questa è la versione che può approvare.',
      },
      q5: {
        q: 'Cosa otteniamo concretamente?',
        a: 'Un unico workspace con quattro strumenti che condividono file e permessi: Chat ancorata ai tuoi documenti, Eleftheria Code (un agente di coding con modalità Plan, Build e Ask), Eleftheria Design (dal brief al prototipo funzionante) e Translate. In più login LDAP/Active Directory, chiavi API, server di strumenti MCP ed esportazioni in Word, PDF, Excel e ZIP.',
      },
      q6: {
        q: 'In cosa differisce da ChatGPT Enterprise o Microsoft Copilot?',
        a: 'Sono ottimi prodotti che girano sul cloud di qualcun altro. Eleftheria gira sul tuo. Rinunci ai modelli frontier più grandi e alla comodità del setup zero in cambio del pieno controllo dei dati, della libertà di scegliere i modelli e di una licenza al posto di un abbonamento per utente. Per la maggior parte dei team regolamentati, quello scambio è esattamente il punto.',
      },
      q7: {
        q: 'Quali modelli AI possiamo usare?',
        a: 'Qualsiasi modello dietro un\'API compatibile con OpenAI. La maggior parte dei clienti esegue modelli open-weight in locale (Qwen, Gemma, DeepSeek, Mistral) tramite llama.cpp o vLLM. Se la tua policy lo consente, puoi anche collegare provider cloud come Azure OpenAI o Anthropic per gruppi specifici. Cambiare modello è una modifica di configurazione, non una migrazione.',
      },
      q8: {
        q: 'Che hardware ci serve?',
        a: 'L\'applicazione in sé è leggera e gira su un server piccolo. Il requisito vero è la capacità GPU per i modelli che scegli: una singola GPU di classe workstation basta per un pilota di team; team più grandi o modelli più grandi scalano su un server dedicato. Ti aiutiamo a dimensionarlo durante il pilota.',
      },
      q9: {
        q: 'Quanto costa?',
        a: 'Eleftheria è una licenza software, non un abbonamento per messaggio o per utente. I piani partono da 490 € al mese (Starter) e arrivano a un livello Enterprise personalizzato con SSO, supporto prioritario e assistenza al deployment. Paghi tu il tuo hardware o il tuo cloud, quindi niente bollette a sorpresa per il consumo.',
      },
      q10: {
        q: 'Quanto dura un pilota?',
        a: 'La maggior parte dei team è operativa entro un giorno. L\'intero stack è un file Docker Compose: avvia i servizi, puntali ai tuoi endpoint di modelli, apri il browser. Un pilota di 30 giorni sul tuo hardware è il modo normale di valutare, e ti seguiamo per tutta la durata.',
      },
      q11: {
        q: 'E se smettiamo di usarlo, o se voi sparite?',
        a: 'I tuoi dati restano sui tuoi dischi, perché non sono mai andati altrove. Tutto si esporta in formati standard (Word, PDF, Excel, PNG, HTML, ZIP) e il database è un normale Postgres di cui puoi fare il dump in qualsiasi momento. Non c\'è alcun lock-in da cui uscire.',
      },
      q12: {
        q: 'Chi c\'è dietro Eleftheria?',
        a: 'Un piccolo team di ingegneri AI enterprise con sede a Venezia, Italia, che ha passato anni a distribuire AI in ambienti dove i dati non potevano uscire dall\'edificio. Eleftheria è la parola greca per libertà. Abbiamo costruito il prodotto che continuavano a chiederci e che non potevamo mai comprare.',
      },
    },
    cta: {
      title: 'Tieni il lavoro. <em>Tieni i dati.</em>',
      lede: 'Un solo deployment. Workspace progressivi. Niente che esce dall\'edificio.',
      primary: 'Iscriviti alla lista',
      tertiary: 'Dettagli tecnici',
    },
    footer: {
      tag: 'Un workspace AI self-hosted dove chat, codice e design condividono una sola interfaccia — e i tuoi dati non lasciano mai la tua rete.',
      freedom: '<em>Eleftheria</em> (ελευθερία) — greco per <em>libertà</em>. La libertà di tenere i tuoi dati tuoi.',
      product: 'Prodotto',
      resources: 'Risorse',
      start: 'Inizia',
      linkedin: 'LinkedIn',
      contact: 'hello@eleftheria.tech',
      open: 'Iscriviti alla lista',
      signin: 'Accedi',
      rights: '© 2026 Eleftheria. Sicurezza. Indipendenza. Precisione.',
      built: 'Self-hosted per scelta.',
    },
    usecases: {
      eyebrow: 'Per team regolamentati',
      title: "L'AI che il tuo team di <em>compliance</em> approverà davvero.",
      lede: 'Eleftheria (ελευθερία) — greco per <em>libertà</em>. La libertà di tenere i tuoi dati tuoi. Ecco cosa significa in pratica.',
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
        q: 'Φεύγουν δεδομένα μου από την υποδομή μου;',
        a: 'Όχι. Το Eleftheria τρέχει εξ ολοκλήρου μέσα στο δίκτυό σας: η εφαρμογή, η βάση δεδομένων και τα μοντέλα AI. Δεν υπάρχει τηλεμετρία, λογαριασμός προμηθευτή ούτε «phone home». Η μόνη λειτουργία προς τα έξω είναι η προαιρετική αναζήτηση στο web, και η λειτουργία air-gap την απενεργοποιεί στο επίπεδο της εφαρμογής.',
      },
      q2: {
        q: 'Είναι το Eleftheria συμβατό με τον GDPR;',
        a: 'Η συμμόρφωση είναι ιδιότητα της αρχιτεκτονικής, όχι όρος στη σύμβασή μας. Τα δεδομένα σας επεξεργάζονται σε διακομιστές που ελέγχετε εσείς, στη δικαιοδοσία που επιλέγετε, από μοντέλα που φιλοξενείτε εσείς. Κανένα προσωπικό δεδομένο δεν μεταφέρεται σε εμάς ή σε τρίτο πάροχο AI, άρα δεν υπάρχει εκτελών την επεξεργασία προς έλεγχο ούτε διεθνής διαβίβαση προς αιτιολόγηση.',
      },
      q3: {
        q: 'Πώς βοηθά με τον AI Act της ΕΕ;',
        a: 'Ο AI Act ζητά από τους οργανισμούς να γνωρίζουν ποια μοντέλα χρησιμοποιούν, πού ρέουν τα δεδομένα και ποιος έχει πρόσβαση σε τι. Το Eleftheria σας δίνει έναν ενιαίο πίνακα διαχείρισης ακριβώς γι\' αυτό: δικαιώματα μοντέλων ανά ομάδα, εξαγωγές έτοιμες για έλεγχο και ένα μητρώο μοντέλων που ελέγχετε εσείς. Επιλέγετε τα μοντέλα, άρα επιλέγετε και το προφίλ κινδύνου.',
      },
      q4: {
        q: 'Για ποιους είναι το Eleftheria;',
        a: 'Ομάδες 10 έως 2.000 ατόμων σε κλάδους όπου τα δεδομένα δεν μπορούν να φύγουν από τον οργανισμό: δικηγορικά γραφεία, χρηματοοικονομικές υπηρεσίες, υγεία και φαρμακευτική, δημόσιος τομέας, βιομηχανία με ευαίσθητη πνευματική ιδιοκτησία. Αν η ομάδα συμμόρφωσής σας έχει μπλοκάρει το ChatGPT ή το Copilot, αυτή είναι η εκδοχή που μπορεί να εγκρίνει.',
      },
      q5: {
        q: 'Τι παίρνουμε στην πράξη;',
        a: 'Έναν χώρο εργασίας με τέσσερα εργαλεία που μοιράζονται αρχεία και δικαιώματα: Chat βασισμένο στα δικά σας έγγραφα, Eleftheria Code (πράκτορας κώδικα με λειτουργίες Plan, Build και Ask), Eleftheria Design (από το brief στο λειτουργικό πρωτότυπο) και Translate. Επιπλέον σύνδεση LDAP/Active Directory, κλειδιά API, διακομιστές εργαλείων MCP και εξαγωγές σε Word, PDF, Excel και ZIP.',
      },
      q6: {
        q: 'Σε τι διαφέρει από το ChatGPT Enterprise ή το Microsoft Copilot;',
        a: 'Είναι εξαιρετικά προϊόντα που τρέχουν στο cloud κάποιου άλλου. Το Eleftheria τρέχει στο δικό σας. Ανταλλάσσετε τα μεγαλύτερα frontier μοντέλα και την ευκολία της μηδενικής εγκατάστασης με πλήρη έλεγχο δεδομένων, δική σας επιλογή μοντέλων και άδεια χρήσης αντί για συνδρομή ανά χρήστη. Για τις περισσότερες ρυθμιζόμενες ομάδες, αυτή η ανταλλαγή είναι ακριβώς το ζητούμενο.',
      },
      q7: {
        q: 'Ποια μοντέλα AI μπορούμε να χρησιμοποιήσουμε;',
        a: 'Οποιοδήποτε μοντέλο πίσω από API συμβατό με OpenAI. Οι περισσότεροι πελάτες τρέχουν μοντέλα ανοιχτών βαρών τοπικά (Qwen, Gemma, DeepSeek, Mistral) μέσω llama.cpp ή vLLM. Αν η πολιτική σας το επιτρέπει, μπορείτε επίσης να συνδέσετε cloud παρόχους όπως Azure OpenAI ή Anthropic για συγκεκριμένες ομάδες. Η αλλαγή μοντέλου είναι αλλαγή ρύθμισης, όχι μετάβαση.',
      },
      q8: {
        q: 'Τι υλικό χρειαζόμαστε;',
        a: 'Η ίδια η εφαρμογή είναι ελαφριά και τρέχει σε μικρό διακομιστή. Η πραγματική απαίτηση είναι η χωρητικότητα GPU για τα μοντέλα που επιλέγετε: μία GPU κλάσης workstation αρκεί για πιλοτικό ομάδας· μεγαλύτερες ομάδες ή μεγαλύτερα μοντέλα κλιμακώνονται σε αποκλειστικό διακομιστή. Σας βοηθάμε να το διαστασιολογήσετε κατά το πιλοτικό.',
      },
      q9: {
        q: 'Πόσο κοστίζει;',
        a: 'Το Eleftheria είναι άδεια λογισμικού, όχι συνδρομή ανά μήνυμα ή ανά χρήστη. Τα πλάνα ξεκινούν από 490 € τον μήνα (Starter) και φτάνουν σε προσαρμοσμένο επίπεδο Enterprise με SSO, υποστήριξη προτεραιότητας και βοήθεια στην εγκατάσταση. Πληρώνετε το δικό σας υλικό ή cloud, οπότε δεν υπάρχουν απρόσμενοι λογαριασμοί χρήσης.',
      },
      q10: {
        q: 'Πόσο διαρκεί ένα πιλοτικό;',
        a: 'Οι περισσότερες ομάδες είναι σε λειτουργία μέσα σε μία ημέρα. Ολόκληρο το stack είναι ένα αρχείο Docker Compose: ξεκινήστε τις υπηρεσίες, στρέψτε τες στα endpoints των μοντέλων σας, ανοίξτε τον browser. Ένα πιλοτικό 30 ημερών στο δικό σας υλικό είναι ο συνήθης τρόπος αξιολόγησης, και σας υποστηρίζουμε σε όλη τη διάρκεια.',
      },
      q11: {
        q: 'Κι αν σταματήσουμε να το χρησιμοποιούμε, ή αν εσείς εξαφανιστείτε;',
        a: 'Τα δεδομένα σας μένουν στους δίσκους σας, γιατί ποτέ δεν πήγαν αλλού. Όλα εξάγονται σε τυπικές μορφές (Word, PDF, Excel, PNG, HTML, ZIP) και η βάση δεδομένων είναι ένα συνηθισμένο Postgres από το οποίο μπορείτε να πάρετε αντίγραφο ανά πάσα στιγμή. Δεν υπάρχει lock-in για να φύγετε.',
      },
      q12: {
        q: 'Ποιος βρίσκεται πίσω από το Eleftheria;',
        a: 'Μια μικρή ομάδα μηχανικών enterprise AI με έδρα τη Βενετία, Ιταλία, που πέρασε χρόνια εγκαθιστώντας AI σε περιβάλλοντα όπου τα δεδομένα δεν μπορούσαν να βγουν από το κτίριο. Eleftheria είναι η ελληνική λέξη για την ελευθερία. Φτιάξαμε το προϊόν που μας ζητούσαν συνεχώς και δεν μπορούσαμε ποτέ να αγοράσουμε.',
      },
    },
    cta: {
      title: 'Κρατήστε τη δουλειά. <em>Κρατήστε τα δεδομένα.</em>',
      lede: 'Μία εγκατάσταση. Προοδευτικοί χώροι εργασίας. Τίποτα δεν φεύγει από το κτίριο.',
      primary: 'Λίστα αναμονής',
      tertiary: 'Τεχνικές λεπτομέρειες',
    },
    footer: {
      tag: 'Ένας αυτο-φιλοξενούμενος χώρος εργασίας AI όπου συνομιλία, κώδικας και σχεδιασμός μοιράζονται μία διεπαφή — και τα δεδομένα σας δεν φεύγουν ποτέ από το δίκτυό σας.',
      freedom: '<em>Eleftheria</em> (ελευθερία) — ελληνικά για την <em>ελευθερία</em>. Η ελευθερία να κρατάτε τα δεδομένα σας δικά σας.',
      product: 'Προϊόν',
      resources: 'Υλικό',
      start: 'Ξεκινήστε',
      linkedin: 'LinkedIn',
      contact: 'hello@eleftheria.tech',
      open: 'Λίστα αναμονής',
      signin: 'Σύνδεση',
      rights: '© 2026 Eleftheria. Ασφάλεια. Ανεξαρτησία. Ακρίβεια.',
      built: 'Αυτο-φιλοξενούμενο εκ σχεδιασμού.',
    },
    usecases: {
      eyebrow: 'Για ρυθμιζόμενες ομάδες',
      title: 'Το AI που θα εγκρίνει πραγματικά η ομάδα <em>συμμόρφωσης</em>.',
      lede: 'Eleftheria (ελευθερία) — ελληνικά για την <em>ελευθερία</em>. Η ελευθερία να κρατάτε τα δεδομένα σας δικά σας. Να τι σημαίνει στην πράξη.',
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
